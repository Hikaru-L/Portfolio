// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';

import { NavLink } from 'react-router-dom'

const Header = () => (
  <Row>  
    <Navbar className="indigo">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="contact">Contact</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;