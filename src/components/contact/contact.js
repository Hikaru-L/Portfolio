// Importando o React
import React, { useState } from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o component UserProfile
import UserProfile from '../user_profile/user_profile'

const Contact = () => {
  const [test, setTest] = useState('YES');

  const returnHome = () => {
    if (test === 'YES')
      setTest('NO')
    else
      setTest('YES')
  
  }
  return (
    <Row>
      <Col m={3} s={12}>
        <UserProfile />
      </Col>
      <Col m={8} s={12}>
          <h5>Contact</h5>
          <Card>
            <Row>
                <Input type="email" label="Email" s={12} />
                <Input label="LinkedIn" s={12} />
              <Col s={12} m={12}>
                <Button waves='light' 
                className="right grey darken-2" 
                onClick={returnHome}
                >  
                {test}</Button>
              </Col>
            </Row>
          </Card>
      </Col>
    </Row>
  )
};

export default Contact;