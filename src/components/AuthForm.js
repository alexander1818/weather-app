import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Tost from '../components/Toest'

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

        if(!userExists){
            users.push(obj)
            localStorage.setItem('users', JSON.stringify(users))
        }

        console.log('register', email, password)
    }

    const login = () => {

        const users = JSON.parse(localStorage.getItem('users'))

        const exists = users.some((existedUser) => {

            return existedUser.email == email && existedUser.password == password;
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

    // const showMassage = () => {
    //     setMassage(email)
    // }
    
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

                <Button variant="primary" type="submit">{isSignUp ? 'Sign up' : 'Login'}</Button>
            </Form>

            {isSignUp && <p>If you want registration  <Button variant="link" onClick={setSignUpFalse}>Click</Button> </p>}
            {!isSignUp && <p>If you allready have a password  <Button variant="link" onClick={setSignUpTrue}>Sign Up</Button> </p>}

            {massage && <Tost />  }
        </div>
    )
}
export default AuthForm; 