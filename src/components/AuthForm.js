import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import Tost from '../components/Toest';
import FormInput from '../components/Form';


const AuthForm = (props) => {
    const [isSignUp, setSignUp] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [massage, setMassage] = useState(null);

    const setSignUpFalse = () => {
        setSignUp(false)
    }

    const setSignUpTrue = () => {
        setSignUp(true)
    }

    const register = () => {

        if (localStorage.getItem('users') === null) {
            localStorage.setItem('users', JSON.stringify([]));
        }

        const users = JSON.parse(localStorage.getItem('users'))
        const obj = {
            email,
            password
        }

        const userExists = users.some((existedUser) => {

            return existedUser.email === obj.email
        })

        if (!userExists) {
            users.push(obj)
            localStorage.setItem('users', JSON.stringify(users))
        }

        console.log('register', email, password)
    }

    const login = () => {

        const users = JSON.parse(localStorage.getItem('users'))

        const exists = users.some((existedUser) => {

            return existedUser.email === email && existedUser.password === password;
        })
        console.log('EXISTS', exists)
        setMassage(exists)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        isSignUp ? register() : login();
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const getingWeather = async (e) => {

        let res = []
        const API_KEY = '527236c6e428a1fc7353831ef8271f3c';
        e.preventDefault();

        const city = e.target.elements.city.value;


        if (city) {
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            const data = await api_url.json();
            // console.log(data)

            let sunset = data.sys.sunset;
            let date = new Date();
            date.setTime(sunset);
            let sunset_date = date.getUTCHours() + ':' + date.getUTCMinutes() + ':' + date.getUTCSeconds()

            const obj = {
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunset: sunset_date,
            }

            Object.keys(obj).map((el) => {
                console.log(el + ': ' + obj[el])
                res.push(el + ': ' + obj[el])
            })
        }

        console.log(res)

    }

    return (
        <div className='w-100 '>
            <h1>{isSignUp ? 'Sign up' : 'Login'}</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} type="email" placeholder="Enter email" onChange={handleChangeEmail} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} type="password" placeholder="Password" onChange={handleChangePassword} />
                </Form.Group>

                <Button variant="primary" type="submit" >Submit</Button>
                {/* {isSignUp ? 'Sign up' : 'Login'} */}
            </Form>

            {isSignUp && <p>If you want registration  <Button variant="link" onClick={setSignUpFalse}>Click</Button> </p>}
            {!isSignUp && <p>If you allready have a password  <Button variant="link" onClick={setSignUpTrue}>Sign Up</Button> </p>}

            {massage && <FormInput weatherMethod={getingWeather} />}
            {/* {massage && <Tost />} */}
        </div>

    )
}
export default AuthForm; 