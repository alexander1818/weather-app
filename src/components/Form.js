import React, { useState } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import './Form.css';
import Weather from './Weather';
// import Weather from './Weather.js';

const api = {
  key: '527236c6e428a1fc7353831ef8271f3c',
  base: 'https://api.openweathermap.org/data/2.5/'
}

const FormInput = (props) => {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = e => {
    e.preventDefault()

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

  const handleSubmit = (e) => {
    // const citys = e.target.value;
    setQuery(e.target.value)
    console.log(e.target.elements.city.value)
  }
  const city = {
    kyiv: 'kyiv',
    london: 'london'
  }

  return (
    <div >
      <Weather/>
      <div className="citys">
        {/* <div className="citys-item" value={query} {????????} onClick={search}>{city.kyiv}</div> */}
        {/* <div className="citys-item" name="kyiv" value={query}  onClick={search}>{city.kyiv}</div> */}
        {/* <div className="citys-item" name="london" value={query}  onClick={search}>{city.london}</div> */}
        <div className="citys-item" onClick={search}>Moscow</div>
        <div className="citys-item" onClick={search}>Marmaris</div>             
        <div className="citys-item" onClick={search}>Hawai</div>
      </div>

      <div>
      <main className="wrap d-flex justify-content-center w-100">
        
        <Form className=" input-city  "
          onSubmit={FormInput} >
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
              <Button variant="primary" type="submit" onClick={search}> Получить погоду</Button>
            </InputGroup.Append>
          </InputGroup>

          {(typeof weather.main != "undefined") ? (
            <div className="info-box">
              <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country} </div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)} &#176;C</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : ('')}

        </Form >
      </main>
      </div>
    </div>

  )
}
export default FormInput;