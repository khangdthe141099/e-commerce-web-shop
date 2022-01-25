import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Image,
    Title,
    Button
} from './no-product.elements'

function NoProduct() {
    return (
        <Container>
            <Image src="https://www.pngitem.com/pimgs/m/690-6908694_grunge-sold-out-label-psd-hd-png-download.png"/>
            <Title>Sorry !!! The product you are looking for is currently out of stock, please come back later.</Title>
            <Link to={'/'}>
            <Button>{`<<< BACK TO HOME PAGE <<<`}</Button>
            </Link>
        </Container>
    )
}

export default NoProduct
