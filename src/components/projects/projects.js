// Importando o React
import React, { useState } from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o component UserProfile
import UserProfile from '../user_profile/user_profile'
import { InfosPessoais, Colors , Modifiers } from '../../constants/constants'

const ProjectsProps = {
    title: 'Projects',
    description: 'Here are some personal projects, all available in my GitHub.',
    projectName1: 'Tabletop RPG Combat Tracker',
    projectName2: 'College Assignments',
    //projectName3: '',
}

const Projects = () => {
    return (
        <Col>
            <Row>
                <h5>{ProjectsProps.title}</h5>
                <p>{ProjectsProps.description}</p>
                <Card>
                    <Button
                    waves = {Modifiers.waveTypeLight}
                    className={ Colors.indigoBGWhiteText } 
                    href={ InfosPessoais.github }
                    node={Modifiers.nodeTypeA}
                    >
                    {ProjectsProps.projectName1}</Button>
                    <br/>
                    <br/>
                    <Button
                    waves = {Modifiers.waveTypeLight}
                    className={ Colors.greyBGWhiteText } 
                    href={ InfosPessoais.github }
                    node={Modifiers.nodeTypeA}
                    >
                    {ProjectsProps.projectName2} </Button>
                </Card>
            </Row>
        </Col>
    )
}
export default Projects;