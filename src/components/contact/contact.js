// Importando o React
import React, { useState } from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o component UserProfile
import UserProfile from '../user_profile/user_profile'
import { InfosPessoais, Colors, Sizes } from '../../constants/constants'

const Contact = () => {
  return (
    <Row>
      <Col m={Sizes.small} s={Sizes.large}>
        <UserProfile />
      </Col>
      <Col m={Sizes.medium} s={Sizes.large}>
          <h5>Contact</h5>
          <Card>
            <Row>
                <p><b> E-mail </b></p>
                <Card>
                <p> { InfosPessoais.email1 } </p>
                <p> { InfosPessoais.email2 } </p>
                </Card>
                <p><b> LinkedIn </b></p>
                <Card>
                <p>lembrete pra fazer o linkedin</p>
                </Card>
                
              <Col s={12} m={12}>
                <Button waves='light' 
                className={ Colors.indigoBGWhiteText } 
                href={ InfosPessoais.github }
                node="a"
                >  
                Link to my GitHub</Button>
              </Col>
            </Row>
          </Card>
      </Col>
    </Row>
  )
};

export default Contact;