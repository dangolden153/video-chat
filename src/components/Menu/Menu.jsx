import React from "react";
import pics from '../../picture/xray.jpg'
import pic from '../../picture/ribbon2.jpg'
import pic1 from '../../picture/pressure.jpg'
import {
  Container,
  Heading,
  Menu_text,
  Menu_contents,
  Activity_level,
  Input,
  Background_color,
} from "./Menu.styles";

function Menu_section() {
  
  return (
    <Container>

      <Heading>Recent Activity</Heading>

      <Background_color>

        <Menu_contents to='/hiv'>
          <img src={pic} alt="..."  style={{width: "40px", height: "40px", borderRadius: "50%"}}/>
          <Menu_text>hiv blood draw test</Menu_text>
          <Activity_level>A100</Activity_level>
        </Menu_contents>
        
        <Menu_contents to='/xray'>
          <img src={pics} alt="..."  style={{width: "40px", height: "40px", borderRadius: "50%"}}/>
          <Menu_text>TB radiology xray</Menu_text>
          <Activity_level>A30</Activity_level>
        </Menu_contents>

        <Menu_contents to='/blood'>
          <img src={pic1} alt="..."  style={{width: "40px", height: "40px", borderRadius: "50%"}}/>
          <Menu_text>blood pressure check</Menu_text>
          <Activity_level>A10</Activity_level>
        </Menu_contents>
      </Background_color>
    </Container>
  );
}

export default Menu_section;
