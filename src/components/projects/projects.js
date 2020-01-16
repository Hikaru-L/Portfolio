// Importando o React
import React, { useState } from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o component UserProfile
import UserProfile from '../user_profile/user_profile'
import { InfosPessoais, Colors } from '../../constants/constants'

const Projects = () => {
    return (
        <Col>
            <Row>
                <h5>Projects</h5>
                <p>Here are some personal projects, all available in my GitHub.</p>
                <Card>
                    <Button
                    waves = "light"
                    className={ Colors.indigoBGWhiteText } 
                    href={ InfosPessoais.github }
                    node="a"
                    >
                    Tabletop RPG Combat Tracker</Button>
                    <br/>
                    <br/>
                    <Button
                    waves = "light"
                    className={ Colors.indigoBGWhiteText } 
                    href={ InfosPessoais.github }
                    node="a"
                    >
                    College Assignments</Button>
                </Card>
            </Row>
        </Col>
    )
}
export default Projects;