import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, 
        SearchOutlined, 
        FavoriteBorderOutlined
} from '@mui/icons-material';
import {
    Container,
    Circle,
    Image,
    Info,
    Icon
} from './product.elements'

function Product({item}) {

    return (
        <Container>
            <Circle />
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                    <SearchOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
