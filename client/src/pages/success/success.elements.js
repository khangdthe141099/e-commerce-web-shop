import styled from 'styled-components'

export const Container = styled.div`   
    margin: 0;
`

export const Wrapper = styled.div`   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0px;
`

export const Top = styled.div`   
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
`

export const Title = styled.h1`   
    font-size: 40px;
    margin-bottom: 10px;
`

export const Desc = styled.p`   
    margin-bottom: 5px;
`

export const OrderInfo = styled.div`   
    margin-bottom: 5px;
    background-color: #f1f1ee;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: 500;
`

export const OrderDate = styled.p`   
 
`

export const Body = styled.div`   
    display: flex;
    flex-direction: row;
    width: 70%;
`

export const Left = styled.div`   
    flex: 1;
    display: flex;
`

export const Option = styled.div`   
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SubOption = styled.div`   
    height: 189px;
    width: 280px;
    margin-right: 20px;
`

export const SubOptionTitle = styled.p`   
    display: flex;
    align-items: center;
    background-color: #f1f1ee;
    padding: 5px;
    font-weight: 600;
`

export const SubOptionDesc = styled.p`   
    padding: 10px 7px;
`

export const Right = styled.div`   
    flex: 1;
`

export const OptionRight = styled.div`
    
` 

export const OptionTitle = styled.div`   
    display: flex;
    align-items: center;
    background-color: #f1f1ee;
    padding: 5px;
    font-weight: 600;
`

export const OptionDetail = styled.div`   
    padding: 10px 7px;
`

export const OptionDetailItem = styled.div`   
    margin-bottom: 30px;
    font-size: ${props => props.type === "total" ? "24px" : "18px"};
    font-weight: ${props => props.type === "total" ? "600" : ""};
    
`

export const OptionDetailItemText = styled.span`   
    
`

export const OptionDetailItemPrice = styled.span`   
    
`

export const ListButtonLeft = styled.div`

` 

export const ListButtonRight = styled.div`
    display: flex;
` 

export const Button = styled.button`
    display: flex;
    align-items: center;
    background-color: rgb(17, 120, 189);
    color: white;
    width: 155px;
    height: 35px;
    border: none;
    border-radius: 2px;
    margin-right: 10px;
    padding: 5px;
    transition: all 0.5s ease;
    &:hover {
        background-color: rgba(17, 120, 189, 0.8);
        transform: scale(1.1);
    }
` 

export const ListButton = styled.div`
    display: flex;
    justify-content: space-between;
` 





