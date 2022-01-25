import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    /* Thêm overflow: hidden => Khi hover vào image, image sẽ được zoom trong khung container
    Không làm thay đổi kích thước container */
    overflow: hidden;
`

export const Image = styled.img`
    position: absolute;
    width: 100%;  
    height: 100%;  
    object-fit: cover;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.1);
    }
    
`

export const Info = styled.div`
    position: absolute;
    top: 200px;
    left: ${(props) => props.id === 2 ? "75px" : "110px"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
`

export const Title = styled.h1`
     color: white;
     margin-bottom: 20px;  
`

export const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;    
`