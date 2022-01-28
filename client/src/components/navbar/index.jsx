import React, { useEffect, useState } from "react";
import { logoutSuccess } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useUser } from "../../features/hook";
import { useCart } from "../../features/hook";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { removeProduct } from "../../features/cart/cartSlice";
import nocart from "../../assets/images/no_cart.png";
import { Badge } from "@mui/material";
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Input,
  Logo,
  CartContainer,
  MenuItem,
  NoCart,
  NoCartImg,
  ListProductContainer,
  PrevProductsContainer,
  PrevTitle,
  Price,
  ProductCat,
  ProductImg,
  ProductItem,
  ProductName,
  RemoveBtn,
  ViewCartBtn,
  TitleContainer,
  ProductCenter,
  ProductRight,
  PriceContainer,
  Quantity,
} from "./navbar.elements";

function Navbar() {
  const [userProducts, setUserProducts] = useState([]);

  const { products } = useCart();

  const { currentUser } = useUser();
  const userId = currentUser?._id;

  const dispatch = useDispatch();

  const handleLogout = () => {
    //Xóa thông tin user ở redux
    dispatch(logoutSuccess());
  };

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  //Lấy ra danh sách sản phẩm tương ứng với user:
  useEffect(() => {
    const userProduct = products.filter((product) => product.userId === userId);

    setUserProducts(userProduct);
  }, [products, userId]);

  const handleScrollTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo onClick={handleScrollTop}>K-Tech.</Logo>
          </Link>
        </Center>

        <Right>
          {currentUser ? (
            <>
              <MenuItem>Welcome {currentUser.name} !</MenuItem>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}

          {/* Cart Layout */}
          <CartContainer>
            <Link to={`/cart/${userId}`}>
              <Badge badgeContent={userProducts.length} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>

            <NoCart noCart={userProducts.length === 0 ? true : false}>
              {userProducts.length === 0 ? (
                <NoCartImg src={nocart} alt="" />
              ) : (
                <PrevProductsContainer>
                  <TitleContainer>
                    <PrevTitle>Added Product</PrevTitle>
                  </TitleContainer>
                  <ListProductContainer>
                    {userProducts.map((product, index) => {
                      const isSale = product.sale.isSale;
                      const salePercent = product.sale.percent;
                      const price = product.price;
                      const salePrice = price - price * (salePercent / 100);
                      const category = product.categories[1];

                      console.log(category);
                      return (
                        <ProductItem key={index}>
                          <ProductImg src={product.img} alt="" />
                          <ProductCenter>
                            <ProductName>{product.title}</ProductName>
                            <ProductCat>Phan loai: {category}</ProductCat>
                          </ProductCenter>
                          <ProductRight>
                            <PriceContainer>
                              <Price>${isSale ? salePrice : price}</Price>
                              <Quantity>x {product.quantity}</Quantity>
                            </PriceContainer>
                            <RemoveBtn
                              onClick={() => handleRemove(product._id)}
                            >
                              Remove
                            </RemoveBtn>
                          </ProductRight>
                        </ProductItem>
                      );
                    })}
                  </ListProductContainer>
                  <Link to={`/cart/${userId}`}>
                    <ViewCartBtn>View Cart</ViewCartBtn>
                  </Link>
                </PrevProductsContainer>
              )}
            </NoCart>
          </CartContainer>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
