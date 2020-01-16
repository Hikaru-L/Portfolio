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
import aaamat_logo from '../../images/aaamatlogo.png'
import { InfosPessoais, Sizes } from '../../constants/constants'

const Home = () => (
  <Row>
    <Col m={ Sizes.small } s={ Sizes.large }>
      <UserProfile /> 
    </Col>
    <Col m={ Sizes.medium } s={ Sizes.large }>
        <h5 className="subtitle">About Me</h5>
        <Card>
          <div>
            <p><b>{InfosPessoais.aboutMeTitle1}</b></p>
            <p>{InfosPessoais.aboutMeText1}</p>
            <br/>
            <p><b>{InfosPessoais.aboutMeTitle2}</b></p>
            <p>{InfosPessoais.aboutMeText2}</p>
          </div>
        </Card>
        <h5 className="subtitle">Experiences</h5>
        <Experience title = "Front-End developer intern"
                    company = "OutSmart"
                    description = "Current job, joined the company in January 2020 as an intern."
                    avatar = {outsmart_logo}
        />
        <Experience title = "Sports General Manager"
                    company = "AAAMAT - IME USP"
                    description = "Voluntary role at college that gave me a lot of knowledge on dealing with people and organizing events."
                    avatar = {aaamat_logo}
        />
    </Col>
  </Row>
);

export default Home;