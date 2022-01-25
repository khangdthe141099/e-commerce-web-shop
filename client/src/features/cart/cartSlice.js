import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],  //products.quantity => Số lượng sản phẩm trong mỗi đơn hàng
    userId: '', //Thêm userId cho mỗi sản phẩm để get ra các sản phẩm với user tương ứng
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //Thêm sản phẩm vào giỏ hàng:
        addProduct: (state, action) => {
            state.products.push(action.payload)
            state.userId = action.payload.userId
        },
        //Thay đổi số lượng sản phẩm trong mỗi đơn hàng:
        changeQuantityInCart: (state, action) => {
            const newProducts = state.products
            const index = newProducts.findIndex(product => product._id === action.payload.id);
            const quantity = newProducts[index].quantity
            if (action.payload.type === "asc") {
                newProducts[index].quantity = quantity + 1
            } else {
                if (newProducts[index].quantity > 0) {
                    newProducts[index].quantity = quantity - 1
                }
                //Trường hợp số lương sản phẩm bằng 0 => Xóa sản phẩm khỏi giỏ hàng:
                if(newProducts[index].quantity === 0){
                    newProducts.splice(index, 1)
                }
            }
        },

        //Checkout thành công => Xóa list sản phẩm vừa add khỏi cart:
        checkoutSuccess: (state, action) => {
            const userId = action.payload
            //Lấy ra list sản phẩm TRỪ những sản phẩm của user hiện tại
            //Sau khi checkout => Số lượng sản phẩm của user hiện tại sẽ bằng 0
            const userProducts = state.products.filter((product) => product.userId !== userId)
            state.products = userProducts
        }
    }
});


export const {
    addProduct,
    changeQuantityInCart,
    checkoutSuccess
} = cartSlice.actions

export default cartSlice.reducer

export const getCart = state => state.cart