import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    background-color: #f5f5f5;
    position: sticky;
    top: 60px;
    z-index: 99;
`

export const Left = styled.div`
    display: flex;
    align-items: center;
`

export const Title = styled.p`
    
`

export const Span = styled.span`
    font-size: 32px;
    color: #ee4d2d;
    font-weight: ${props => props.sale === "sale" ? 400 : 700};
    margin-left: ${props => props.sale === "sale" && "10px"};
`

export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-top: 5px;
`

export const CountdownItem = styled.div`
    background-color: black;
    color: white;
    margin-right: 5px;
    padding: 1px 3px;
    border-radius: 3px;
`

export const Right = styled.div`
    
`

export const Option = styled.button`
    display: flex;
    align-items: center;
    color: #ee4d2d;
    font-size: 20px;
    border: none;
    background-color: transparent;
`

export const Body = styled.div`
    
`

export const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
`

export const Arrow = styled.div`
    width: 30px;
    height: 30px;
    background-color: #ee4d2d;
    color: white;
    border-radius: 50%;
    display: ${(props) => {
        if(props.direction === "left" && props.slideIndex === 0){
            return "none"
        }
        if(props.direction === "right" && props.slideIndex === 2){
            return "none"
        }
        return "flex"
    }};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "5px"};
    right: ${(props) => props.direction === "right" && "4px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.2);
    }
`

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    padding: 11px;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -96}vw);
`

export const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 80%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display:  flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`

export const Product = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 15.3vw; */
    /* height: 33.2vh */
    width: 274px;
    height: 318px;
    margin: 20px 10px 0px 10px;  
    background-color: #f5f5f5;

    &:hover ${Info}{
        opacity: 1;
    }
`

export const ImgContainer = styled.div`
    height: 80%;
    width: 100%;
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
`

export const DiscountContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 55px;
    height: 50px;
    background-color: rgba(255, 216, 57, 1);
    &:after {
        content: '';
        position: absolute;
        left: 0px;
        bottom: -10px;
        border-width: 0 27.5px 10px;
        border-style: solid;
        border-color: red rgba(255, 216, 57, 1) transparent rgba(255, 216, 57, 1);
    }
`

export const Percent = styled.p`
    color: #ee4e2f;
    font-weight: 400;
    font-size: 20px;
    position: relative;
    left: 9px;
`

export const DiscountTitle = styled.p`
    color: white;
    font-weight: 400;
    font-size: 20px;
    position: relative;
    left: 5px;
    bottom: 5px;
`

export const InfoContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    bottom: 9px;
`

export const Price = styled.p`
    color: #ff0000;
    font-size: 20px;
`

export const Sold = styled.div`
    background-color: #ffbda6;
    color: white;
    width: 180px;
    display: flex;
    justify-content: center;
    margin-top: 2px;
    border-radius: 10px;
`

export const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

