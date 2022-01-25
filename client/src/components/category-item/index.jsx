import React from 'react'
import { Link } from "react-router-dom";
import { fetchProduct } from '../../features/apiCalls'
import { useDispatch } from 'react-redux'
import {
    Container,
    Image,
    Info,
    Title,
    Button
} from './category-item.elements'

function CategoryItem({category}) {
    const dispatch = useDispatch()

    //Delay api call => display lazy load:
    const handleClick = () => {
        fetchProduct(dispatch)
    }

    return (
        <Container>
            <Image src={category.img}/>
            <Info id={category.id}>
                <Title>{category.title}</Title>
                <Link to={`/products/${category.cat}`}>
                <Button onClick={handleClick}>SHOP NOW</Button>
                </Link>
            </Info>
        </Container>
    )
}

export default CategoryItem
