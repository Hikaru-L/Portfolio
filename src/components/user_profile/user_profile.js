// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
import avatar from '../../images/testprofilepic.jpg';
import { Colors, InfosPessoais, Sizes } from "../../constants/constants";

const UserProfileProps = {
  avatarProps:  "circle responsive-img",
  colOffset: 's2 m2',
  rowAlignment: 'center-align',
}

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={Sizes.medium} m={Sizes.medium} offset= {UserProfileProps.colOffset} >
          <img src={avatar} className={UserProfileProps.avatarProps} />
        </Col>
      </Row>
      <Row className= {UserProfileProps.rowAlignment} >
        <h5 >{ InfosPessoais.devName }</h5>
        <p className={Colors.indigoBGWhiteText}> {InfosPessoais.jobTitle} </p>
      </Row>
  </Card>
);

export default UserProfile;