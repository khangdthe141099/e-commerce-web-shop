import React, { useEffect, useState } from 'react'
import { logoutSuccess } from '../../features/user/userSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useUser } from '../../features/hook'
import { useCart } from '../../features/hook'
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { Badge } from '@mui/material';
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
    MenuItem
} from './navbar.elements'

function Navbar() {
    const [quantity, setQuantity] = useState('')

    const { products } = useCart()

    const { currentUser } = useUser()
    const userId = currentUser?._id

    const dispatch = useDispatch()

    const handleLogout = () => {
        //Xóa thông tin user ở redux
        dispatch(logoutSuccess())
    }

    const handleScrollTop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }

    //Lấy ra danh sách sản phẩm tương ứng với user:
    useEffect(() => {
        const userProduct = products.filter(product => product.userId === userId)

        setQuantity(userProduct.length)
    }, [products, userId])


    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: 'gray', fontSize: 16 }} />
                    </SearchContainer>
                </Left>

                <Center>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                        <Logo onClick={handleScrollTop}>K-Tech.</Logo>
                    </Link>
                </Center>

                <Right>
                    {
                        currentUser
                            ? (
                                <>
                                    <MenuItem>Welcome {currentUser.name} !</MenuItem>
                                    <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                                        <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
                                    </Link>
                                </>
                            )
                            : (
                                <>
                                    <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
                                        <MenuItem>REGISTER</MenuItem>
                                    </Link>
                                    <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                                        <MenuItem>SIGN IN</MenuItem>
                                    </Link>
                                </>
                            )
                    }
                    <Link to={`/cart/${userId}`}>
                        <MenuItem>
                            <Tooltip title="Cart">
                                <Badge badgeContent={quantity} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </Tooltip>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
