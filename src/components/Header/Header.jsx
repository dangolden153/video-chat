import React from 'react'
import {Container, Header_box, Left_bar, Right_bar, Logo_container,Logo_name,Logo_name_right,Amount,Text,Line} from './Header.styles'

const Header =()=> {
    return (
        <Container>
            <Header_box>

        <Left_bar>
        <Logo_container>
        <Logo_name>AFYA</Logo_name>
        </Logo_container>
        <Amount>143.00</Amount>
        <Text>Balance</Text>
        </Left_bar>

        <Line />

        <Right_bar>
        <Logo_container>
        <Logo_name_right>ZAR</Logo_name_right>
        </Logo_container>
        <Amount>R21.00</Amount>
        <Text>Equivalent</Text>
        </Right_bar>

            </Header_box>
        </Container>
    )
}

export default Header
