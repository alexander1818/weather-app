import React, { useState } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import './Form.css';
import Navigation from './Navigation';
import AddCity from '../pages/AddCity';

const api = {
  key: '527236c6e428a1fc7353831ef8271f3c',
  base: 'https://api.openweathermap.org/data/2.5/'
}

const FormInput = (props) => {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState([]);


  const handleNewCity = (e) => {
    e.preventDefault();
    if (query === '') return;
    setCity([...city, { id: Date.now(), text: query }])
    // e.target.reset();
  }


  const search = query => (e) => {
    e.preventDefault()

    if (query === '') return;
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result)

      })
  }

  const dateBuilder = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'];

    let days = ['Sundey', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  const cityList = {
    kyiv: 'kyiv',
    london: 'london',
    zp: 'Запорожье',
    msc: 'moscow',
    marmaris: 'marmaris',
    hawai: 'hawaii'
  }

  const removeCity = (id) => {
    setCity(city.filter((town) => town.id != id))
  }

  console.log('-----', city)

  return (
    <div >
      <AddCity town={city} />
      <div className="citys">
        {/* <div className="citys-item" value={query} onClick={search(cityList.kyiv)}>Kyiv</div>
        <div className="citys-item" name="london" value={query} onClick={search(cityList.london)}>London</div>
        <div className="citys-item" value={query} onClick={search(cityList.zp)}>Запорожье</div>
        <div className="citys-item" value={query} onClick={search(cityList.msc)}>Moscow</div>
        <div className="citys-item" value={query} onClick={search(cityList.marmaris)}>Marmaris</div>
        <div className="citys-item" value={query} onClick={search(cityList.hawai)}>Hawaii</div> */}
        <div style={{ color: "red" }}>

          <div>
            {city.map((town) => (

              <div key={town.id} className="citys-item" onClick={search(town.text)} >{town.text}
                <a className="remove-city" href="#" onClick={() => removeCity(town.id)}>x</a>
              </div>

            ))}
          </div>
        </div>
      </div>

      <main className="wrap d-flex justify-content-center w-100">

        <Form className=" input-city  "
          onSubmit={handleNewCity}
        >
          <InputGroup className=" ">
            <FormControl className="search-box"
              type="text"
              onChange={e => setQuery(e.target.value)}
              value={query}
              placeholder="Search..."
              aria-describedby="basic-addon2"
              name="city"
            />

            <InputGroup.Append >
              <Button variant="primary" type="submit" onClick={search(query)}> Получить погоду</Button>
            </InputGroup.Append>

            <InputGroup.Append >
              <Button className="bg-warning" variant="primary" type="submit" onClick={handleNewCity}> Add</Button>
            </InputGroup.Append>
          </InputGroup>

          {(typeof weather.main != "undefined") ? (
            <div className="info-box">
              <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country} </div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}&#176;C</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : ('')}

        </Form >
      </main>

      <Navigation />

    </div>

  )
}
export default FormInput;