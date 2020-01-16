// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
import { Colors, Sizes } from "../../constants/constants";

// Recebe os parâmetros passadados para o Component na variável props
const Experience = (props) => (
  <Card>
      <Row>
        <Col s={Sizes.verySmall} m={Sizes.verySmall}>
          <img src={props.avatar} className="square responsive-img" />
          { props.name }
        </Col>

        <Col s={Sizes.mediumLarge} s={Sizes.mediumLarge}>
          <p><b>{props.title} in <span className={ Colors.lightGreyBG }>{props.company}</span></b></p>
          <p>{props.description}</p>
        </Col>
      </Row>
  </Card>
);

export default Experience;