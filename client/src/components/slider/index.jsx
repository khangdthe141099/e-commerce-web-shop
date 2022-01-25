import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import {
    Container,
    Arrow,
    Wrapper,
    Slide,
    ImgContainer,
    Image,
    InfoContainer,
    Title,
    Desc,
    Button
} from './slider.elements'
import { sliderItems } from '../../mock-data/data'

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    useEffect(() => {
        const slideId = setInterval(() => {
            setSlideIndex((prevState) => prevState < 2 ? prevState + 1 : 0)
        }, 4000)

        return () => clearInterval(slideId)
    }, [])

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>

            {/* Slider Index is Image Index */}
            <Wrapper slideIndex={slideIndex}>
                {
                    sliderItems.map((item, index) => (
                        <Slide bg={item.bg} key={index}>
                            <ImgContainer>
                                <Image src={item.img} />
                            </ImgContainer>

                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Link to={`/products/${item.cat}`}>
                                <Button>SHOW NOW</Button>
                                </Link>
                            </InfoContainer>
                        </Slide>
                    ))
                }
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider