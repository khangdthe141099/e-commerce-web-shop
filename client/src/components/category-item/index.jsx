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
import { useTranslation } from "react-i18next";

function CategoryItem({category}) {    
    const { t } = useTranslation()

    const dispatch = useDispatch()

    //Delay api call => display lazy load:
    const handleClick = () => {
        dispatch(fetchProduct)
    }

    return (
        <Container>
            <Image src={category.img}/>
            <Info id={category.id}>
                <Title>{category.title}</Title>
                <Link to={`/products/${category.cat}`}>
                <Button onClick={handleClick}>{t('shop_now')}</Button>
                </Link>
            </Info>
        </Container>
    )
}

export default CategoryItem
