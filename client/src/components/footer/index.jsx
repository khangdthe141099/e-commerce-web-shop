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

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>K-Tech.</Logo>
                <Desc>
                    New subscribers only. $9.99/mo. after trial. Offer available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer good for 3 months after eligible device pairing.
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
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Mac</ListItem>
                    <ListItem>iPad</ListItem>
                    <ListItem>iPhone</ListItem>
                    <ListItem>Watch</ListItem>
                    <ListItem>AirPods</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
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
