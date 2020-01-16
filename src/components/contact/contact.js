// Importando o React
import React, { useState } from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o component UserProfile
import UserProfile from '../user_profile/user_profile'
import { InfosPessoais, Colors, Sizes, Modifiers } from '../../constants/constants'
const ContactProps = {
  title: 'Contact',
  contactType1: 'E-mail',
  contactType2: 'LinkedIn',
  buttonText: 'Link to my GitHub',

}
const Contact = () => {
  return (
    <Row>
      <Col m={Sizes.small} s={Sizes.large}>
        <UserProfile />
      </Col>
      <Col m={Sizes.medium} s={Sizes.large}>
          <h5>{ContactProps.title}</h5>
          <Card>
            <Row>
                <p><b> {ContactProps.contactType1} </b></p>
                <Card>
                <p> { InfosPessoais.email1 } </p>
                <p> { InfosPessoais.email2 } </p>
                </Card>
                <p><b> {ContactProps.contactType2} </b></p>
                <Card>
                <p> { InfosPessoais.linkedIn }</p>
                </Card>
                
              <Col s={ Sizes.large } m={Sizes.large }>
                <Button waves= { Modifiers.waveTypeLight }
                className={ Colors.indigoBGWhiteText } 
                href={ InfosPessoais.github }
                node= { Modifiers.nodeTypeA }
                >  
                { ContactProps.buttonText } </Button>
              </Col>
            </Row>
          </Card>
      </Col>
    </Row>
  )
};

export default Contact;