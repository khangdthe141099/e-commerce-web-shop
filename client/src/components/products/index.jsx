import React, { useState, useEffect, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { ScaleLoader } from "react-spinners";
import axios from 'axios'
import {
    Container,
    LoadContainer,
    EndMessage
} from './products.elements'
import Product from '../product'


function Products({ cat, filter, sort }) {
    const [products, setProducts] = useState([])
    const [listProducts, setListProducts] = useState([])
    const [saleProducts, setSaleProducts] = useState([])
    const [filteredSaleProducts, setFilteredSaleProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [hasMore, setHasMore] = useState(true)

    //===== Hanlde infinite loading =====
    //Số lượng sản phẩm hiển thị lần render đầu tiên(trước khi infinite-loading)
    const productSize = 8

    const indexProducts = useRef(1)

    //===================================
    //Fetch list products from database:
    useEffect(() => {
        const getProducts = async () => {
            try{
                const res = await axios.get(`http://localhost:5000/product`)

                setListProducts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getProducts()
    }, [])

    //Get list sale products:
    useEffect(() => {
        const getListSaleProducts = () => {
            const saleProducts = listProducts
                                 .filter((product) => product.sale.isSale === true)
    
            setSaleProducts(saleProducts)
        }
        getListSaleProducts()
    }, [listProducts])


    //Get all product by category:
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/product?category=${cat}`
                        : `http://localhost:5000/product`)

                setProducts(res.data.slice(0, productSize))

            } catch (err) {
                console.log(err)
            }
        }
        getProducts();

    }, [cat])

    //Filter Products by Color and Size:
    useEffect(() => {
        //Filter list products by category:
        cat && setFilteredProducts(
            products.filter(item =>
                Object.entries(filter).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        )

        //Filter list products by sale products:
        if(cat && cat === 'sale'){
            setFilteredSaleProducts(
                saleProducts.filter((item) => 
                Object.entries(filter).every(([key, value]) =>
                     item[key].includes(value)
                )
            ) 
            ) 
        }
    }, [products, saleProducts, cat, filter])


    //Sort list products:
    useEffect(() => {
        if ((sort === "newest")) {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            )
            setFilteredSaleProducts((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
            )
        } else if ((sort === "asc")) {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            )
            setFilteredSaleProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
            )
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            )
            setFilteredSaleProducts((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
            )
        }
    }, [sort])

    const fetchMoreData = async () => {
        try {
            const res = await axios.get(
                cat
                        ? `http://localhost:5000/product?category=${cat}`
                        : `http://localhost:5000/product`)

            //index của sản phẩm => xử lí thêm sản phẩm:
            const index = indexProducts.current

            //List sản phẩm sẽ được thêm vào list sản cũ khi infinite loading xảy ra:
            const moreProducts = res.data.slice(index * productSize, (index + 1) * productSize)

            //Tăng index sản phẩm lên 1 sau mỗi lần loading => Get các list sản phẩm sau
            indexProducts.current += 1

            const newProducts = products.concat(moreProducts)

            //setHasMore: false => Báo hiệu rằng đã load hết dữ liệu trong db
            //Và: hiển thị message trong props "endMessage" của InfiniteScroll
            if (newProducts.length === res.data.length) {
                setHasMore(false)
            }

            setTimeout(() => {
                setProducts(newProducts)
            }, 1500)

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <Container>
            <InfiniteScroll
                dataLength={products.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={
                    <LoadContainer>
                        <ScaleLoader speedMultiplier={1} size={10} />
                    </LoadContainer>
                }
                endMessage={
                    <EndMessage></EndMessage>
                }
                style={{ padding: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
                {
                    cat
                        ? (
                            cat === 'sale' ?
                            filteredSaleProducts.map((item, index) => (
                                <Product item={item} key={index} />
                            )) :
                            filteredProducts.map((item, index) => (
                                <Product item={item} key={index} />
                            ))
                        )
                        : products.map((item, index) => (
                            <Product item={item} key={index} />
                        ))
                }
            </InfiniteScroll>
        </Container>
    )
}

export default Products
