import { useSelector } from 'react-redux';
import { getCart } from './cart/cartSlice' 
import { getUser } from './user/userSlice' 
import { getProductState } from './product/productSlice'

export const useCart = () => {
    const cart = useSelector(getCart)
    return cart
}

export const useUser = () => {
    const user = useSelector(getUser)
    return user
}

export const useProduct = () => {
    const product = useSelector(getProductState)
    return product
}