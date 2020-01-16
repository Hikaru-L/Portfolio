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

const HomeText = {
  descriptionProps: 'subtitle',
  descriptionText: 'About Me',
  descriptionTextExperience: 'Experience',
  expTitle1: "Front-End developer intern",
  expCompany1: "OutSmart",
  expDescription1: "Current job, joined the company in January 2020 as an intern.",
  expTitle2: "Sports General Manager",
  expCompany2: "AAAMAT - IME USP",
  expDescription2: "Voluntary role at college that gave me a lot of knowledge on dealing with people and organizing events.",
}

const Home = () => (
  <Row>
    <Col m={ Sizes.small } s={ Sizes.large }>
      <UserProfile /> 
    </Col>
    <Col m={ Sizes.medium } s={ Sizes.large }>
        <h5 className={HomeText.descriptionProps}>{HomeText.descriptionText}</h5>
        <Card>
          <div>
            <p><b>{InfosPessoais.aboutMeTitle1}</b></p>
            <p>{InfosPessoais.aboutMeText1}</p>
            <br/>
            <p><b>{InfosPessoais.aboutMeTitle2}</b></p>
            <p>{InfosPessoais.aboutMeText2}</p>
          </div>
        </Card>
        <h5 className={HomeText.descriptionProps}>{HomeText.descriptionTextExperience}</h5>
        <Experience title = {HomeText.expTitle1}
                    company = {HomeText.expCompany1}
                    description = {HomeText.expDescription1}
                    avatar = {outsmart_logo}
        />
        <Experience title = {HomeText.expTitle2}
                    company = {HomeText.expCompany2}
                    description = {HomeText.expDescription2}
                    avatar = {aaamat_logo}
        />
    </Col>
  </Row>
);

export default Home;