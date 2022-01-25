import React from 'react'
import { Send } from '@mui/icons-material';
import { 
    Container,
    Title,
    Desc,
    InputContainer,
    Input,
    Button,
} from './news-letter.elements'

function NewsLetter() {
    return (
        <Container>
            <Title>News Lettes</Title>
            <Desc>Get timely updates from your favorite products</Desc>
            <InputContainer>
                <Input placeholder="Your email..."/>
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
