import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    width: 500px;
    padding: 20px;
    background-color: white;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

export const Input = styled.input`
    flex: 1;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

export const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

export const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

export const Option = styled.div` 
    margin-bottom: 15px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    width: 500px;
`

export const Span = styled.span`    
    color: teal;
    font-weight: bold;
`

export const Noti = styled.span`
    font-size: 12px;
    color: red;
    margin-top: 10px;
`

export const Warning = styled.span`
    font-size: 12px;
    color: red;
    margin-top: 5px;
`