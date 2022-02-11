import React from 'react'
import {
    Facebook,
    Instagram,
    Twitter,
    Pinterest,
    Room,
    Phone,
    MailOutline
} from '@mui/icons-material';
import {
    Container,
    Left,
    Center,
    Right,
    Logo,
    Desc,
    SocialContainer,
    SocialIcon,
    Title,
    List,
    ListItem,
    ContactItem,
    Payment
} from './footer.elements'
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation()

    return (
        <Container>
            <Left>
                <Logo>K-Tech.</Logo>
                <Desc>
                    {t('footer_left_desc')}
                </Desc>
                <SocialContainer>
                    <SocialIcon color="#0e8cf1">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="#f7450b">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="#1d9bf0">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="#e60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>{t('footer_center_title')}</Title>
                <List>
                    <ListItem>{t('footer_center_option_home')}</ListItem>
                    <ListItem>{t('footer_center_option_cart')}</ListItem>
                    <ListItem>Mac</ListItem>
                    <ListItem>iPad</ListItem>
                    <ListItem>iPhone</ListItem>
                    <ListItem>Watch</ListItem>
                    <ListItem>AirPods</ListItem>
                    <ListItem>{t('footer_center_option_account')}</ListItem>
                    <ListItem>{t('footer_center_option_order_tracking')}</ListItem>
                    <ListItem>{t('footer_center_option_term')}</ListItem>
                </List>
            </Center>

            <Right>
                <Title>{t('footer_right_title')}</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }}/>  Km29 Đường Cao Tốc 08, Thạch Hoà, Thạch Thất, Hà Nội
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }}/> +03 640 991 56
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }}/> damtuankhang@gmail.com
                </ContactItem>
                <Payment src=""/>
            </Right>
        </Container>
    )
}

export default Footer
