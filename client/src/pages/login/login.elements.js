import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  /* Nếu click vào đăng nhập => isFetching chuyển từ false => true 
    Lúc này button sẽ không thể click được vào*/
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

export const Option = styled.p`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: teal;
  font-weight: bold;
` 

export const Error = styled.span`
  color: red
`