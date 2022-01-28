import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useUser } from '../../features/hook'
import { changeQuantityInCart, checkoutSuccess, removeProduct } from '../../features/cart/cartSlice'
import { Remove, Add, Delete } from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../../axios/requestMethods'
import { useCart } from '../../features/hook'
import {
  Container,
  Bottom,
  Button,
  Details,
  Hr,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetail,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top, TopButton,
  TopText,
  TopTexts,
  Wrapper,
  Sale,
  ButtonRemove
} from './card.elements'
import Announcement from "../../components/announcement";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

function Cart() {
  const { products } = useCart()

  const { currentUser } = useUser()
  const userId = currentUser?._id

  const [stripeToken, setStripeToken] = useState(null)
  const [userProducts, setUserProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const KEY = "pk_test_51KBFaCJdarKw3EgP9KG3G4T82t2yHexGTfjf23yJYJKH0CDBmK5CV5Jd5GZM24WJ6jUP0KTZ4SfzjrBPWbZvYQra007ziAhRta"

  //Sau khi thanh toán xong => chạy vào hàm onToken => set stripeToken thông tin thanh toán
  const onToken = (token) => {
    setStripeToken(token)
  }

  //Xóa sản phẩm khỏi giỏ hàng khi click remove button:
  const handleRemove = (id) => {
    dispatch(removeProduct(id))
  }

  //Thay đổi số lượng mỗi sản phẩm trong cart:
  const handleClick = (type, id) => {
    dispatch(changeQuantityInCart({ type, id }))
  }

  //Get list product tương ứng với user:
  useEffect(() => {
    const userP = products.filter(product => product.userId === userId)

    setUserProducts(userP)
  }, [products, userId])

  //Get total order tương ứng với list product của user:
  useEffect(() => {
    const totalP = userProducts.reduce((total, product) => {
      const price = product.price
      const isSale = product.sale.isSale
      const salePercent = product.sale.percent
      const salePrice = price - price * (salePercent / 100)
      let subTotal = 0
      if(isSale) {
        subTotal = product.quantity * salePrice
      }else {
        subTotal = product.quantity * price
      }
    
      return total + subTotal
    }, 0)

    setTotalPrice(totalP)
  }, [userProducts, userId])

  useEffect(() => {
      console.log(userProducts)
  }, [userProducts])

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate('/success', {
          state:
          {
            stripeData: res.data,
            products: userProducts,
            total: totalPrice
          }
        })


        dispatch(checkoutSuccess(userId))
      } catch { }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate, dispatch, userId, userProducts, totalPrice]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to={'/products'}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <StripeCheckout
            name="K-Tech"
            image="https://athgroup.vn/Images/Img_Products/images/ath-y-nghia-logo-Apple(2).png"
            billingAddress
            shippingAddress
            description={`Your total is ${totalPrice}`}
            amount={totalPrice * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </StripeCheckout>
        </Top>
        <Bottom>
          <Info>
            {
              userProducts.map((product, index) => {
                const price = product.price
                const isSale = product.sale.isSale
                const salePercent = product.sale.percent
                const salePrice = price - price * (salePercent / 100)

                const totalPrice = product.quantity * price
                const totalSalePrice = product.quantity * salePrice

                return (
                  <>
                    <Product key={index}>
                      <ProductDetail>
                        <Image src={product.img} />
                        <Details>
                          <ProductName>
                            <b>Product:</b> {product.title}
                            {
                              isSale && <Sale>{salePercent}% SALE</Sale>
                            }
                          </ProductName>
                          <ProductId>
                            <b>ID:</b> {product._id}
                          </ProductId>
                          <ProductColor color={product.color} />
                          <ProductSize>
                            <b>Size:</b> {product.size}
                          </ProductSize>
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <ProductAmountContainer>
                          <Add onClick={() => handleClick('asc', product._id)} />
                          <ProductAmount>{product.quantity}</ProductAmount>
                          <Remove onClick={() => handleClick('des', product._id)} />
                        </ProductAmountContainer>
                        <ProductPrice>${isSale ? totalSalePrice : totalPrice}</ProductPrice>
                      </PriceDetail>
                      <ButtonRemove onClick={() => handleRemove(product._id)}>
                      <Delete color='error'/>
                      </ButtonRemove>
                    </Product>
                    <Hr />
                  </>
                )
              })
            }
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>

            {/* ===== STRIPE CHECKOUT ===== */}
            <StripeCheckout
              name="K-Tech"
              image="https://athgroup.vn/Images/Img_Products/images/ath-y-nghia-logo-Apple(2).png"
              billingAddress
              shippingAddress
              description={`Your total is ${totalPrice}`}
              amount={totalPrice * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
            {/* =========================== */}

          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
