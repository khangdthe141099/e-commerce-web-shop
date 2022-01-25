import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { register } from '../../features/apiCalls'
import { Link } from 'react-router-dom'
import {
    Container,
    Wrapper,
    Title,
    Form,
    Input,
    Agreement,
    Button,
    Option,
    Span,
    Noti,
    Warning
} from './register.elements'

function Register() {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [validName, setValidName] = useState(true)
    const [validAddress, setValidAddress] = useState(true)
    const [validUserName, setValidUserName] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [validPassword, setValidPassword] = useState(true)
    const [validPasswordConfirmation, setValidPasswordConfirmation] = useState(true)
    const [isMatch, setIsMatch] = useState(true)
    

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const validatePassword = () => {
        let match
        if(password === passwordConfirmation && password !== '' && passwordConfirmation !== ''){
            match = true
        }else {
            match = false
        }

        return match
    }

    const getValidation = () => {
        if(name === ''){
            setValidName(false)
        }
        if(address === ''){
            setValidAddress(false)
        }
        if(username === ''){
            setValidUserName(false)
        }
        if(email === ''){
            setValidEmail(false)
        }
        if(password === ''){
            setValidPassword(false)
        }
        if(passwordConfirmation === ''){
            setValidPasswordConfirmation(false)
        }
    }

    const handleClick = (e) => {
        e.preventDefault()

        getValidation()

        if (validatePassword()) {
            register(dispatch, {
                name,
                address,
                username,
                email,
                password
            })
            navigate('/login')
        } else {
            setIsMatch(false)
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input
                        value={name}
                        placeholder="Name"
                        onChange={e => setName(e.target.value)}
                    />
                    {
                        !validName && 
                        <Warning style={{width: '700px'}}>Please enter your name...</Warning>
                    }
                    <Input
                        value={address}
                        placeholder="Address"
                        onChange={e => setAddress(e.target.value)}
                    />
                    {
                        !validAddress && 
                        <Warning style={{width: '700px'}}>Please enter your address...</Warning>
                    }
                    <Input
                        value={username}
                        placeholder="Username"
                        onChange={e => setUserName(e.target.value)}
                    />
                    {
                        !validUserName && 
                        <Warning style={{width: '700px'}}>Please enter your username...</Warning>
                    }
                    <Input
                        value={email}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    {
                        !validEmail && 
                        <Warning style={{width: '700px'}}>Please enter your email...</Warning>
                    }
                    <Input
                        value={password}
                        placeholder="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    {
                        !validPassword && 
                        <Warning style={{width: '700px'}}>Please enter your pasword...</Warning>
                    }
                    <Input
                        value={passwordConfirmation}
                        placeholder="Confirm password"
                        type="password"
                        onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                    {
                        !validPasswordConfirmation && 
                        <Warning style={{width: '700px'}}>Please enter your password confirmation...</Warning>
                    }
                    {
                        (!isMatch && password !== '' && passwordConfirmation !== '') 
                        && <Noti>Password does not match, please confirm password!!!</Noti>
                    }
                    <Agreement>
                        By creating an account, I consent to processing of my personal
                        data in account with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Option>
                        Do you already have an account.
                        <Link to={'/login'}>
                            <Span> SIGN IN here</Span>
                        </Link>
                    </Option>
                    <Button onClick={handleClick}>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
