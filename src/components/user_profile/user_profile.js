// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
import avatar from '../../images/testprofilepic.jpg';
import { Colors, InfosPessoais, Sizes } from "../../constants/constants";

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={Sizes.medium} m={Sizes.medium} offset="s2 m2">
          <img src={avatar} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >{ InfosPessoais.devName }</h5>
        <p className={Colors.indigoBGWhiteText}>Front-End Developer in training</p>
      </Row>
  </Card>
);

export default UserProfile;