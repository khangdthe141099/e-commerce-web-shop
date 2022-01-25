import React from 'react'
import { LoadContainer } from './loading.elements'
import { HashLoader } from "react-spinners";
import Announcement from '../../components/announcement'
import Navbar from '../../components/navbar'
import NewsLetter from '../../components/news-letter'
import Footer from '../../components/footer'

function Loading() {
    return (
        <>
        <Announcement />
        <Navbar />
        <LoadContainer>
            <HashLoader color='red' loading={true} size={70} speedMultiplier={1.5} />
        </LoadContainer>
        <NewsLetter />
        <Footer />
        </>
    )
}

export default Loading
