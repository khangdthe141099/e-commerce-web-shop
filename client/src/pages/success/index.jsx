import { useEffect, useState } from "react";
import {
    CheckCircle,
    Home,
    Business,
    LocalShipping,
    Payment,
    EventNote,
    ArrowLeft,
    Print,
    Autorenew
} from '@mui/icons-material';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useUser } from '../../features/hook'
import { useLocation } from "react-router";
import {
    Container,
    Wrapper,
    Body,
    Desc,
    Left,
    Option,
    OrderDate,
    OrderInfo,
    Right,
    SubOption,
    SubOptionTitle,
    Title,
    Top,
    SubOptionDesc,
    OptionDetail,
    OptionDetailItem,
    OptionDetailItemPrice,
    OptionDetailItemText,
    OptionTitle,
    OptionRight,
    Button,
    ListButton,
    ListButtonLeft,
    ListButtonRight
} from './success.elements'

function Success() {
    // const { ExcelDownloder } = useExcelDownloder();

    const location = useLocation();

    //in Cart.jsx I sent data and product. Please check that page for the changes.(in video it's only data)
    const data = location.state.stripeData;
    const products = location.state.products;
    const total = location.state.total;

    const { currentUser } = useUser()
    const userId = currentUser._id
    const TOKEN = currentUser.accessToken

    const [order, setOrder] = useState(null);


    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await axios({
                    url: "http://localhost:5000/order",
                    method: "POST",
                    headers: { token: `Bearer ${TOKEN}` },
                    data: {
                        userId: userId,
                        products: products.map((item) => ({
                            productId: item._id,
                            quantity: item.quantity,
                        })),
                        amount: total,
                        address: data.billing_details.address,
                    }
                })
                setOrder(res.data);

            } catch { }
        };
        data && createOrder();
    }, [data, userId, TOKEN, products, total]);


    return (
        <>
            <Container>
                <Wrapper>
                    <Top>
                        <CheckCircle sx={{ fontSize: 80, color: '#1178bd' }} />
                        <Title>Thank you for your order!</Title>
                        <Desc>The order confirmation email with details of your order and a link to track its progress has been sent to your email address</Desc>
                        <OrderInfo>`YOUR ORDER # IS: {order?._id} - {order?.status}`</OrderInfo>
                        <OrderDate>Order Date: {new Date(order?.createdAt).toDateString()}</OrderDate>
                    </Top>

                    <Body>
                        <Left>
                            <Option>
                                <SubOption>
                                    <SubOptionTitle>
                                        <Home sx={{ fontSize: 30, color: '#1178bd', marginRight: '5px' }} />
                                        SHIPPING ADDRESS
                                    </SubOptionTitle>
                                    <SubOptionDesc>
                                        Name: {data.billing_details.name} <br />
                                        Email: {data.billing_details.email === null ? 'khangdt@gmail.com' : data.billing_details.email}<br />
                                        Phone: {data.billing_details.phone === null ? '03-888-888-888' : data.billing_details.phone} <br />
                                        Address: {data.billing_details.address.line1} <br />
                                        Postal code: {data.billing_details.address.postal_code}
                                    </SubOptionDesc>
                                </SubOption>

                                <SubOption>
                                    <SubOptionTitle>
                                        <Business sx={{ fontSize: 30, color: '#1178bd', marginRight: '5px' }} />
                                        BILLING ADDRESS
                                    </SubOptionTitle>
                                    <SubOptionDesc>
                                        Name: {data.billing_details.name} <br />
                                        Email: {data.billing_details.email === null ? 'khangdt@gmail.com' : data.billing_details.email}<br />
                                        Phone: {data.billing_details.phone === null ? '03-888-888-888' : data.billing_details.phone} <br />
                                        Address: {data.billing_details.address.line1} <br />
                                        Postal code: {data.billing_details.address.postal_code}
                                    </SubOptionDesc>
                                </SubOption>
                            </Option>

                            <Option>
                                <SubOption>
                                    <SubOptionTitle>
                                        <LocalShipping sx={{ fontSize: 30, color: '#1178bd', marginRight: '5px' }} />
                                        SHIPPING METHOD
                                    </SubOptionTitle>
                                    <SubOptionDesc>
                                    Economical delivery
                                    </SubOptionDesc>
                                </SubOption>

                                <SubOption>
                                    <SubOptionTitle>
                                        <Payment sx={{ fontSize: 30, color: '#1178bd', marginRight: '5px' }} />
                                        PAYMENT METHOD
                                    </SubOptionTitle>
                                    <SubOptionDesc>
                                        ID: {data.payment_method} <br />
                                        Number: ****{data.payment_method_details.card.last4} <br />
                                        Fingerprint: {data.payment_method_details.card.fingerprint} <br />
                                        Type: {data.payment_method_details.card.brand} {data.payment_method_details.card.funding} {data.payment_method_details.type}
                                    </SubOptionDesc>
                                </SubOption>
                            </Option>
                        </Left>

                        <Right>
                            <OptionRight>
                                <OptionTitle>
                                    <EventNote sx={{ fontSize: 30, color: '#1178bd', marginRight: '5px' }} />
                                    ORDER SUMMARY
                                </OptionTitle>
                                <OptionDetail>
                                    <OptionDetailItem>
                                        <OptionDetailItemText>Subtotal</OptionDetailItemText>
                                        <OptionDetailItemPrice> ${order?.amount}</OptionDetailItemPrice>
                                    </OptionDetailItem>

                                    <OptionDetailItem>
                                        <OptionDetailItemText>Estimated Shipping</OptionDetailItemText>
                                        <OptionDetailItemPrice> $5.63</OptionDetailItemPrice>
                                    </OptionDetailItem>

                                    <OptionDetailItem>
                                        <OptionDetailItemText>Shipping Discount</OptionDetailItemText>
                                        <OptionDetailItemPrice> $-5.63</OptionDetailItemPrice>
                                    </OptionDetailItem>

                                    <OptionDetailItem type="total">
                                        <OptionDetailItemText>Total</OptionDetailItemText>
                                        <OptionDetailItemPrice> ${order?.amount}</OptionDetailItemPrice>
                                    </OptionDetailItem>
                                </OptionDetail>
                            </OptionRight>

                            <ListButton>
                                <ListButtonLeft>
                                    <Link to="/" sx={{textDecoration: 'none'}}>
                                        <Button>
                                            <ArrowLeft sx={{ marginRight: '5px' }} />
                                            Continue Shopping
                                        </Button>
                                    </Link>
                                </ListButtonLeft>

                                <ListButtonRight>
                                    <Button>
                                        <Print sx={{ marginRight: '5px' }} />
                                        Print Order
                                    </Button>
                                    <Button>
                                        <Autorenew sx={{ marginRight: '5px' }} />
                                        Re-Order
                                    </Button>
                                </ListButtonRight>
                            </ListButton>
                        </Right>
                    </Body>
                </Wrapper>
            </Container>
        </>
    )
}

export default Success
