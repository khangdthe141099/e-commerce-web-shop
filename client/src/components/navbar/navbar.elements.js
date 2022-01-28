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

export const CartContainer = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  position: relative;
  &:after { 
      content: '';
      position: absolute;
      right: -1px;
      top: 9px;
      border-width: 13px;
      border-style: solid;
      border-color: transparent transparent red transparent;
  }
`;

export const NoCart = styled.div`
  position: absolute;
  top: 35px;
  right: -1px;
  border-radius: 2px;
  box-shadow: 0 2px 10px #ccc;
  width: 400px;
  height: 200px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoCartImg = styled.img`
  width: 70%;
`;

// ========== End Right Component ==========
