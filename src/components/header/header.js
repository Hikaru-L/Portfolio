// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';

import { NavLink } from 'react-router-dom'
import { Colors } from "../../constants/constants";


const Header = () => (
  <Row>  
    <Navbar className={Colors.indigoBGWhiteText}>
      <li><NavLink to="/Portfolio">Home</NavLink></li>
      <li><NavLink to="/Portfolio/projects">Projects</NavLink></li>
      <li><NavLink to="/Portfolio/contact">Contact</NavLink></li>
      
    </Navbar>
  </Row>
);

export default Header;