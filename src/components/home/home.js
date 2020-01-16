// Importando o React
import React from "react"
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize'
// Importando o component UserProfile
import UserProfile from '../user_profile/user_profile'
//Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 
import outsmart_logo from '../../images/outsmartlogo.png'
import { infosPessoais } from '../../constants/constants'

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile /> 
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">About Me</h5>
        <Card>
          <div>
            <p><b>{infosPessoais.aboutMeTitle1}</b></p>
            <p>{infosPessoais.aboutMeText1}</p>
            <br/>
            <p><b>{infosPessoais.aboutMeTitle2}</b></p>
            <p>{infosPessoais.aboutMeText2}</p>
          </div>
        </Card>
        <h5 className="subtitle">Experiences</h5>
        <Experience title = "Front-End developer"
                    company = "OutSmart"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                    avatar = {outsmart_logo}
        />
    </Col>
  </Row>
);

export default Home;