import React from 'react'

import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import TodayIcon from '@material-ui/icons/Today';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

import {Container,Img_text_box,Text} from  './Bottom.styles'
function Bottom() {
    return (
        <Container>
            <Img_text_box>
            <HomeIcon style={{color: "#FA314A", fontSize: "35px"}}/>
            <Text>home</Text>
            </Img_text_box>

            <Img_text_box>
            <DescriptionIcon style={{color: "#FA314A", fontSize: "35px"}}/>
            <Text>activity</Text>
            </Img_text_box>

            <Img_text_box>
            <CreateNewFolderIcon style={{color: "#FA314A", fontSize: "35px"}}/>
            <Text>wallet</Text>
            </Img_text_box>

            <Img_text_box>
            <TodayIcon style={{color: "#FA314A", fontSize: "35px"}}/>
            <Text>market</Text>
            </Img_text_box>

            <Img_text_box>
            <CardGiftcardIcon style={{color: "#FA314A", fontSize: "35px"}}/>
            <Text>earn</Text>
            </Img_text_box>
        </Container>
    )
}

export default Bottom

