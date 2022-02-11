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
import { useTranslation } from "react-i18next";

function NewsLetter() {
    const { t } = useTranslation()

    return (
        <Container>
            <Title>{t('news_lettes')}</Title>
            <Desc>{t('new_lettes_title')}</Desc>
            <InputContainer>
                <Input placeholder={t('your_email')}/>
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
