import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AuthForm from '../components/AuthForm';
import '../pages/Auth.css'

const Auth = props => {

    return (
        <Container className="container vh-100 ">
            <Row className="d-flex justify-content-center    vh-100  ">
                <Col xs="10" sm='10' md='8' lg='6' className="d-flex justify-content-center align-items-center w-100">
                    <AuthForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;