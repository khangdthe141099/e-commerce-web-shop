import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../../features/hook'
import { addProduct } from '../../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { Remove, Add, AddShoppingCart, Star, AccessTime } from '@mui/icons-material';
import axios from 'axios'
import { publicRequest } from '../../axios/requestMethods'
import {
    Container,
    Wrapper,
    ImgContainer,
    Image,
    InfoContainer,
    Title,
    Desc,
    Price,
    FilterContainer,
    Filter,
    FilterTitle,
    FilterColor,
    FilterSize,
    FilterSizeOption,
    AddContainer,
    AmountContainer,
    Amount,
    PriceContainer,
    SalePrice,
    SalePercent,
    SaleContainer,
    AmountTitle,
    AddToCartBtn,
    BuyNowBtn,
    TextButton,
    NumberOverView,
    OverView,
    TextOverView,
    OverViewOption,
    FlashSaleContainer,
    FlashSaleTitle,
    FlashSaleTitleLeft,
    FlashSaleTitleRight,
    Remaining,
    RemainingTitle,
    TimeBlock,
    TimeContainer,
    GLeft,
    GRight,
    Guarantee,
    GuaranteeIcon
} from './product.elements'
import Navbar from '../../components/navbar'
import Announcement from '../../components/announcement'
import Footer from '../../components/footer'
import { useTranslation } from "react-i18next";

function ProductDetail() {
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')

    //Multiple language:
    const { t } = useTranslation()

    const dispatch = useDispatch()

    const { currentUser } = useUser()
    const userId = currentUser?._id
    const TOKEN = currentUser?.accessToken

    const location = useLocation()
    const id = location.pathname.split("/")[2]

    const rating = product?.rating

    //=========== SALE =================
    const isSale = product?.sale?.isSale
    const price = product?.price
    const salePercent = product?.sale?.percent
    const salePrice = price - price * (salePercent / 100)
    //==================================

    const navigate = useNavigate()

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1)
        } else if (type === "inc") {
            setQuantity(quantity + 1)
        }
    }


    //Using redux to add to card:
    const handleClick = () => {
        try {
            const createCart = async () => {
                await axios({
                    url: 'http://localhost:5000/cart',
                    method: 'POST',
                    headers: { token: `Bearer ${TOKEN}` },
                    data: {
                        userId: userId,
                        products:
                            [
                                {
                                    productId: product._id,
                                    quantity: quantity
                                }
                            ]
                    }
                })
            }
            if (currentUser) {
                createCart()

                //Display Sweet Alert after add product to cart successfully:
                Swal.fire(
                    'Add product successfully!',
                    'Go to cart to view product details...',
                    'success'
                ).then((result) => {
                    if (result.isConfirmed) {
                        navigate(`/cart/${userId}`)
                    }
                })
            } else {
                Swal.fire(
                    'Add product failed!',
                    'Please login to continue...',
                    'warning'
                ).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/login')
                    }
                })
            }

        } catch (err) {
            console.log(err)
        }

        //dispatch action
        if (currentUser) {
            dispatch(addProduct({ ...product, quantity, color, size, userId }))
        }
    }

    //Get product by product id:
    useEffect(() => {
        const getProduct = async () => {
            const res = await publicRequest.get(`/product/find/${id}`)
            setProduct(res.data)
        }
        getProduct()
    }, [id])

    //Auto scroll top when page loaded:
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Container>
            <Announcement />
            <Navbar />

            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>

                    <OverView>
                        <OverViewOption border={true} style={{ display: 'flex', alignItems: 'center' }}>
                            <NumberOverView>{rating}</NumberOverView>
                            {/* Render number of star of each product */}
                            {
                                Array(rating)
                                .fill()
                                .map((_, index) => (
                                    <Star sx={{ fontSize: '17px', marginTop: '3px', color: '#ee4d2d' }} />
                                ))
                            }
                        </OverViewOption>

                        <OverViewOption border={true} paddingLeft={true}>
                            <NumberOverView>350</NumberOverView>
                            <TextOverView>{t('product_detail_evaluate')}</TextOverView>
                        </OverViewOption>

                        <OverViewOption paddingLeft={true}>
                            <NumberOverView>998</NumberOverView>
                            <TextOverView>{t('product_detail_sold')}</TextOverView>
                        </OverViewOption>
                    </OverView>

                    {
                        isSale &&
                        (
                            <FlashSaleContainer>
                                <FlashSaleTitle>
                                    <FlashSaleTitleLeft>Flash</FlashSaleTitleLeft>
                                    <FlashSaleTitleRight>Sale</FlashSaleTitleRight>
                                </FlashSaleTitle>

                                <Remaining>
                                    <AccessTime sx={{ color: 'white', marginRight: '5px' }} />
                                    <RemainingTitle>{t('product_detail_ends_in')}</RemainingTitle>
                                    <TimeContainer>
                                        <TimeBlock>10</TimeBlock>
                                        <TimeBlock>25</TimeBlock>
                                        <TimeBlock>07</TimeBlock>
                                    </TimeContainer>
                                </Remaining>
                            </FlashSaleContainer>
                        )
                    }

                    <Desc>
                        {product.desc}
                    </Desc>

                    <PriceContainer>
                        <Price sale={isSale && 'sale'}>${price}</Price>
                        {
                            isSale &&
                            (
                                <SaleContainer>
                                    <SalePrice>{salePrice}</SalePrice>
                                    <SalePercent>{salePercent}% {t('product_detail_sale')}</SalePercent>
                                </SaleContainer>
                            )
                        }
                    </PriceContainer>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>{t('product_detail_color')}</FilterTitle>
                            {
                                product.color?.map((c) => (
                                    <FilterColor color={c} key={c}
                                        onClick={() => setColor(c)}
                                        active={c === color ? "active" : ""} />
                                ))
                            }
                        </Filter>
                        <Filter>
                            <FilterTitle>{t('product_detail_size')}</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {
                                    product.size?.map((s) => (
                                        <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                    ))
                                }
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AmountContainer>
                        <AmountTitle>{t('product_detail_quantity')}</AmountTitle>
                        <Remove onClick={() => handleQuantity("dec")} />
                        <Amount>{quantity}</Amount>
                        <Add onClick={() => handleQuantity("inc")} />
                    </AmountContainer>

                    <AddContainer>
                        <AddToCartBtn onClick={handleClick}>
                            <AddShoppingCart sx={{ marginRight: '7px' }} />
                            <TextButton>{t('product_detail_btn_add_to_cart')}</TextButton>
                        </AddToCartBtn>
                        <BuyNowBtn>
                            <TextButton>{t('product_detail_btn_buy_now')}</TextButton>
                        </BuyNowBtn>
                    </AddContainer>

                    <Guarantee>
                        <GLeft>
                            <GuaranteeIcon src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/67454c89080444c5997b53109072c9e0.png"/>
                            K-Tech. {t('product_detail_guarantee')}
                        </GLeft>
                        <GRight>{t('product_detail_money_back')}</GRight>
                    </Guarantee>
                </InfoContainer>
            </Wrapper>

            <Footer />
        </Container>
    )
}

export default ProductDetail
