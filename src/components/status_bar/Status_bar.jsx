import React from "react";
import SignalCellular4BarIcon from '@material-ui/icons/SignalCellular4Bar';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';
import WifiIcon from '@material-ui/icons/Wifi';

import {Container,Time,Left_bar,Right_bar} from './Status_bar.styles'

const Status_bar = () => {
  return (
    <Container>

        <Left_bar>
        <Time>4 : 02</Time>
        </Left_bar>

        <Right_bar>
        <SignalCellular4BarIcon style={{margin:" 0 5px"}} />
        <WifiIcon style={{margin:" 0 5px"}}/>
        <BatteryFullIcon style={{margin:" 0 5px"}}/>
        </Right_bar>
      
    </Container>
  );
};

export default Status_bar;
