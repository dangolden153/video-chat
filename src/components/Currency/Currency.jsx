import React from "react";

import {
  Container,
  Heading,
  Input_box,
  Button_container,
  Button,
  Select,
  Input,
  Background_color
} from "./Currency.styles";

function Currency() {
  
  return (
    <Container>
      {/* heading
            input
            button */}

      <Heading>Select Currency:</Heading>

      <Background_color>
        <Input_box>
          <Select name="cars" id="cars">
            <option value="volvo">afya</option>
          </Select>

          <Input placeholder="0.00001" />
        </Input_box>

        <Button_container>
          <Button>send</Button>
          <Button>recieve</Button>
        </Button_container>
      </Background_color>
    </Container>
  );
}

export default Currency;
