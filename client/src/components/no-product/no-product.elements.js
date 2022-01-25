import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    background-color: rgba(255, 255, 186, 0.6)
    /* background-color: rgba(237, 163, 176, 0.4); */
`

export const Image = styled.img`
    width: 500px;
    border-radius: 50px;
`

export const Title = styled.h2`
    margin-top: 10px;
`

export const Button = styled.button`
    margin-top: 30px;
    width: 250px;
    height: 45px;
    border-radius: 10px;
    border: none;
    background-color: rgba(222, 13, 24);
    color: white;
    transition: all 0.5s ease;
    &:hover {
        background-color: rgba(222, 13, 24, 0.8);
        transform: scale(1.1);
    }
`