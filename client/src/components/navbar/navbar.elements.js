import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  position: sticky;
  background-color: #fbeded;
  z-index: 100;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

// ========== Begin Left Component ==========

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const LanguageOption = styled.button`
  
`

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
`;

// ========== End Left Component ==========
// ========== Begin Center Component ==========

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;

// ========== End Center Component ==========
// ========== Begin Right Component ==========

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export const NoCart = styled.div`
  position: absolute;
  top: 35px;
  right: -10px;
  border-radius: 2px;
  box-shadow: 0 2px 10px #ccc;
  width: 400px;
  height: ${(props) => props.noCart === true ? '210px' : '290px'};
  background-color: white;
  display: none;
  animation: fadeIn ease-in 0.2s;
  &:after { 
      content: '';
      position: absolute;
      right: 9px;
      top: -26px;
      border-width: 13px;
      border-style: solid;
      border-color: transparent transparent white transparent;
  }
`;

export const NoCartImg = styled.img`
  width: 70%;
  margin-left: 62px;
  margin-top: 24px;
`;

export const CartContainer = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  position: relative;
  &:hover ${NoCart}{
    display: block;
  }
`;


// ========== End Right Component ==========

// ============ Preview product when hover cart ==============

export const PrevProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleContainer = styled.div`
  border-bottom: 1px solid lightgray;
`

export const PrevTitle = styled.p`
  color: #767676;
  font-weight: 500;
  margin: 5px 0 5px 5px;
`

export const ListProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 205px;
`

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5px 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid lightgray;
`

export const ProductImg = styled.img`
  width: 15%;
`

export const ProductCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
`

export const ProductName = styled.p`
  font-weight: 500;
  font-size: 15px;
`

export const ProductCat = styled.p`
  font-size: 13px;
  color: grey;
  font-weight: 500;
`

export const ProductRight = styled.div`
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
`

export const PriceContainer = styled.div`
  font-weight: 500;
  font-size: 15px;
`

export const Price = styled.span`
  color: #ee4d2d;
`

export const Quantity = styled.span`
  color: grey;
  font-weight: 500;
  margin-left: 5px;
`

export const RemoveBtn = styled.button`
  border: none;
  background-color: transparent;
`

export const ViewCartBtn = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 2px;
  border: none;
  background-color: #ee4d2d;
  color: white;
  margin: 5px 0 10px 275px;
`


// ===========================================================
