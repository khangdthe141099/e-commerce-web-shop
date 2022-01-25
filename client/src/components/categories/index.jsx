import React from 'react'
import {
    Container
} from './categories.elements'
import { categories } from '../../mock-data/data'
import CategoryItem from '../category-item'

function Categories() {
    return (
        <Container>
            {
                categories.map((category, index) => (
                    <CategoryItem category={category} key={index}/>
                ))
            }
        </Container>
    )
}

export default Categories
