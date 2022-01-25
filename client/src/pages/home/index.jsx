import React, { useState, useEffect } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useProduct } from '../../features/hook'
import { Button } from './home.elements'
import Loading from '../../components/loading'
import Navbar from '../../components/navbar'
import Announcement from '../../components/announcement'
import Slider from '../../components/slider'
import Categories from '../../components/categories'
import Products from '../../components/products'
import NewsLetter from '../../components/news-letter'
import Footer from '../../components/footer'
import SaleProducts from '../../components/sale-products'
import TopProducts from '../../components/top-products'

function Home() {
    const [showGoToTop, setShowGoToTop] = useState(false)

    //Display button "Go To Top" when scroll down 200px:
    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 1000)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    })

    const { isFetching } = useProduct()

    return (
        <>
            {
                isFetching
                    ? <Loading />
                    : (
                        <>
                            <Announcement />
                            <Navbar />
                            {
                                showGoToTop &&
                                <Button
                                    onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
                                >
                                    <ArrowUpwardIcon />
                                </Button>
                            }
                            <Slider />
                            <Categories />
                            <SaleProducts />
                            <TopProducts />
                            <Products />
                            <NewsLetter />
                            <Footer />
                        </>
                    )
            }
        </>
    )
}

export default Home
