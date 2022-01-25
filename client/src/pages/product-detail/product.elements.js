import styled from 'styled-components'

export const Container = styled.div`

`

export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

export const ImgContainer = styled.div`
    flex: 1;
`

export const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    border-radius: 10px;
`

export const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

export const Title = styled.h1`
    font-weight: 600;
`

export const Desc = styled.p`
    margin: 20px 0px;
`

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`

export const SalePrice = styled.div`
    font-size: 32px;
    color: #ee4d2d;
`

export const SalePercent = styled.div`
    background-color: #ee4d2d;
    margin-left: 15px;
    font-size: 15px;
    color: white;
    font-weight: 600;
    padding: 1px 3px;
    margin-top: 4px;
    border-radius: 3px;
`

export const SaleContainer = styled.div`
    display: flex;
    margin-left: 15px;
    align-items: center;
`

export const Price = styled.span`
    margin-top: 4px;
    font-size: ${props => props.sale === 'sale' ? '20px' : '32px'};
    color: ${props => props.sale === 'sale' ? '#a3a3a3' : 'black'};
    text-decoration: ${props => props.sale === 'sale' && 'line-through 2px #a3a3a3 solid'};
`

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    width: 50%;
`

export const Filter = styled.div`
    display: flex;
    align-items: center;
`

export const FilterTitle = styled.span`
    font-size: 20px;
    margin-right: 20px;
`

export const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
    border: ${props =>  props.active === "active" ? "2px solid gray" : ""}
`

export const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

export const FilterSizeOption = styled.option`

`

export const AddContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 35px;
`

export const AddToCartBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: 0px 20px;
    border: 1px solid #ee4d2d;
    color: #ee4d2d;
    background-color: #ffeee8;
    &:hover{
        opacity: 0.8;
    }
`

export const TextButton = styled.div`
    font-size: 19px;
`

export const BuyNowBtn = styled.button`
    margin-left: 15px;
    height: 50px;
    padding: 0px 20px;
    background-color: #ee4d2d;
    color: white;
    border: none;
    &:hover {
        opacity: 0.9;
    }
`

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
`

export const AmountTitle = styled.div`
    margin-right: 25px;
    font-size: 20px;
`

export const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    font-weight: 700;
`

/* ===================== Overview ======================= */

export const OverView = styled.div`
    display: flex;
`

export const OverViewOption = styled.div`
    margin-top: 15px;
    display: flex;
    border-right: ${props => props.border === true && '1px solid #767676'};
    padding-left: ${props => props.paddingLeft === true && '10px'};
    padding-right: 10px;
`

export const NumberOverView = styled.p`
    font-size: 17px;
    margin-right: 5px;
`

export const TextOverView = styled.p`
    font-size: 17px;
    color: #767676;
`

/* ======================================================== */

/* =================== Flash Sale ========================= */

export const FlashSaleContainer = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 10px;
    background-image: url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/4323ad4dc2b3c72d0474d51f20fb83e8.jpg'),linear-gradient(-90deg,#f0451e 9%,#f32424 96%);
`

export const FlashSaleTitle = styled.div`
    display: flex;
`

export const FlashSaleTitleLeft = styled.p`
    color: white;
    margin-right: 5px;
    font-weight: 700;
    font-size: 17px;
`

export const FlashSaleTitleRight = styled.p`
    color: white;
    font-size: 17px;
`

export const Remaining = styled.div`
    display: flex;
`

export const RemainingTitle = styled.p`
    font-size: 17px;
    color: white;
    margin-right: 5px;
`

export const TimeContainer = styled.div`
    display: flex;
`

export const TimeBlock = styled.div`
    background-color: black;
    color: white;
    margin-right: 5px;
    font-weight: 600;
    padding: 0 5px;
`

/* ======================================================== */

/* ===================== Guarantee ======================== */

export const Guarantee = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    width: 85%;
`   

export const GLeft = styled.div`
    display: flex;
    align-items: center;
`

export const GuaranteeIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 7px;
`

export const GRight = styled.div`
    color: #767676;
`


/* ======================================================== */

