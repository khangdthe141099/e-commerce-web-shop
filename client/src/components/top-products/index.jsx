import React, { useState, useEffect } from 'react'
import {
    ArrowBackIosNew,
    ArrowForwardIos,
    ShoppingCartOutlined,
    SearchOutlined,
    FavoriteBorderOutlined,
    Visibility
} from '@mui/icons-material';
import axios from 'axios';
import { Link } from 'react-router-dom'
import {
    Container,
    Header,
    Arrow,
    Body,
    DiscountContainer,
    DiscountTitle,
    Image,
    ImgContainer,
    InfoContainer,
    Left,
    Option,
    Price,
    Product,
    ProductContainer,
    Right,
    Sold,
    Title,
    Wrapper,
    Span,
    Icon,
    Info
} from './top-products.elements'

function TopProducts() {
    const [products, setProducts] = useState([])
    const [slideIndex, setSlideIndex] = useState(0)

    //Filter to get list sale products:
    const saleProducts = products.filter((product) => product.sale.isSale === true)

    //Call API get list product:
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/product`)

                setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        getProducts()
    }, [])


    //Handle slider product:
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 2)
        }
    }

    return (
        <Container>
            <Header>
                <Left>
                    <Title>
                        <Span>TOP SEARCH</Span>
                    </Title>
                </Left>

                <Right>
                    <Option>
                        See all
                        <ArrowForwardIos fontSize="small" />
                    </Option>
                </Right>
            </Header>

            <Body>
                <ProductContainer>
                    <Arrow
                        slideIndex={slideIndex}
                        direction="left"
                        onClick={() => handleClick('left')}>
                        <ArrowBackIosNew />
                    </Arrow>

                    {/* Slider Index is Image Index */}
                    <Wrapper slideIndex={slideIndex}>
                        {
                            saleProducts.map((product, index) => {
                                const price = product.price
                                const salePercent = product.sale.percent
                                const salePrice = price - price * (salePercent / 100)

                                return (
                                    <Product key={index}>
                                        <ImgContainer>
                                            <Image src={product.img} />
                                        </ImgContainer>

                                        <DiscountContainer>
                                            <DiscountTitle>TOP</DiscountTitle>
                                        </DiscountContainer>

                                        <InfoContainer>
                                            <Price>Price: {salePrice}</Price>
                                            <Sold>
                                                View {product.view} 
                                                <Visibility sx={{marginLeft: 1}}/>
                                            </Sold>
                                        </InfoContainer>

                                        <Info>
                                            <Icon>
                                                <ShoppingCartOutlined />
                                            </Icon>
                                            <Icon>
                                                <Link
                                                    style={{ color: 'black' }}
                                                    to={`/product/${product._id}`}>
                                                    <SearchOutlined />
                                                </Link>
                                            </Icon>
                                            <Icon>
                                                <FavoriteBorderOutlined />
                                            </Icon>
                                        </Info>
                                    </Product>
                                )
                            })
                        }
                    </Wrapper>

                    <Arrow
                        slideIndex={slideIndex}
                        direction="right"
                        onClick={() => handleClick('right')}>
                        <ArrowForwardIos />
                    </Arrow>
                </ProductContainer>
            </Body>
        </Container>
    )
}

export default TopProducts
