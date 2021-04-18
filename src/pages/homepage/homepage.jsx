import React from 'react'
import Up_nav from '../../components/up_nav/Up_nav'
import Status_bar from '../../components/status_bar/Status_bar'
import Header from '../../components/Header/Header'
import Currency from '../../components/Currency/Currency'
import Menu_section from '../../components/Menu/Menu'
import Bottom from '../../components/bottom_nav/Bottom'
import {Container, Header_background} from './homepage.styles'


function Home_page() {
    return (
        <div> 
            <Container>
                <Header_background>
                <Status_bar />
                <Up_nav />
                <Header />
                </Header_background>
                
                <Currency />
                <Menu_section />
                <Bottom />
            </Container>
            
        </div>
    )
}

export default Home_page
