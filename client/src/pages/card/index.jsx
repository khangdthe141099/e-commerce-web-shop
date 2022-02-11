import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useUser } from '../../features/hook'
import { changeQuantityInCart, checkoutSuccess, removeProduct } from '../../features/cart/cartSlice'
import { Remove, Add, Delete } from '@mui/icons-material';
import { fetchProduct } from '../../features/apiCalls'
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
  ButtonRemove,
  CartEmptyImg
} from './card.elements'
import Announcement from "../../components/announcement";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { useTranslation } from "react-i18next";

function Cart() {
  const { products } = useCart()

  const { currentUser } = useUser()
  const userId = currentUser?._id

  const [stripeToken, setStripeToken] = useState(null)
  const [userProducts, setUserProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  //Multiple language:
  const { t } = useTranslation()

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
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>{t('product_cart_your_bag')}</Title>
        <Top>
          <Link to={'/products'}>
            <TopButton onClick={() => dispatch(fetchProduct)}>{t('product_cart_continue_shopping')}</TopButton>
          </Link>
          <TopTexts>
            <TopText>{t('product_cart_shopping_bag')} ({userProducts.length})</TopText>
            <TopText>{t('product_cart_your_wishlish')} (0)</TopText>
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
            <TopButton type="filled">{t('product_cart_checkout_now')}</TopButton>
          </StripeCheckout>
        </Top>
        <Bottom>
          <Info>
            {/* Kiểm tra nếu không có sp trong giỏ hàng thì hiển thị image cart empty */}
            {
              userProducts.length === 0 &&
              <CartEmptyImg 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMufL_fYUEBmw6UrEM-a_-Xo2JLYpsOLhs8QuP53Kyrg9OGPm2tHvX3x2LRmxAw8RTWrY&usqp=CAU" 
              alt=""/>
            }
            {/* Nếu có sp trong giỏ hàng thì map list sản phẩm và hiển thị */}
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
                            <b>{t('product_cart_product')}:</b> {product.title}
                            {
                              isSale && <Sale>{salePercent}% {t('product_cart_sale')}</Sale>
                            }
                          </ProductName>
                          <ProductId>
                            <b>ID:</b> {product._id}
                          </ProductId>
                          <ProductColor color={product.color} />
                          <ProductSize>
                            <b>{t('product_cart_size')}:</b> {product.size}
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
            <SummaryTitle>{t('product_cart_order_summary')}</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>{t('product_cart_sub_total')}</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>{t('product_cart_estimate_shipping')}</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>{t('product_cart_shipping_discount')}</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>{t('product_cart_total')}</SummaryItemText>
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
              <Button>{t('product_cart_checkout_now')}</Button>
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
