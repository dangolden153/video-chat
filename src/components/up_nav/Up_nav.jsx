import React from "react";

import logo from '../../picture/ribbon.jpg'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Container,Left_bar,Img,Logo_text,Right_bar} from "./up_nav.styles";

function Up_nav() {
  return (
    <Container>
      <Left_bar>
          <img src={logo} alt="logo" style={{width: "30px", objectFit: "contain"}}/>
        <Logo_text>ribbon</Logo_text>
      </Left_bar>

      <Right_bar>
      <AccountCircleIcon style={{margin: '0 5px', color: "#FA314A", fontSize: "30px"}} />
      <NotificationsIcon style={{margin: '0 5px', color: "#FA314A" }}/>
      </Right_bar>
    </Container>
  );
}

export default Up_nav;
