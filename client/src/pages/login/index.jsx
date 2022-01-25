import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../features/hook'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../../features/apiCalls'
import { login } from '../../features/apiCalls'
import {
    Container,
    Wrapper,
    Title,
    Form,
    Input,
    Button,
    Option,
    Error
 } from './login.elements'
 

function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { isFetching, error } = useUser()

    const dispatch = useDispatch()

    const handleUserName = (e) => {  
        const usernameInput = e.target.value
        const usernameRemoveSpace = usernameInput.replace(/\s+/g, '')
        setUserName(usernameRemoveSpace)
    }

    const handlePassword = (e) => {
        const passwordInput = e.target.value
        const passwordRemoveSpace = passwordInput.replace(/\s+/g, '')
        setPassword(passwordRemoveSpace) 
    }

    const handleClick = (e) => {
        e.preventDefault()
        //Dispatch action login:
        login(dispatch, {username, password})  
        //Dispatch action fetch product => display lazy load
        fetchProduct(dispatch)
    }


    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input 
                        placeholder="username" 
                        onChange={handleUserName} />
                    <Input 
                        placeholder="password" 
                        type="password" 
                        onChange={handlePassword} />
                    <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                    { error && <Error>Something went wrong</Error> }
                    <Option>DO NOT YOU REMEMBER THE PASSWORD?</Option>
                    <Link to={'/register'}>
                    <Option>CREATE A NEW ACCOUNT</Option>
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
