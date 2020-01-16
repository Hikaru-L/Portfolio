// Importando o React
import React from 'react';
// Importando o React Dom para injetar o <APP /> na tag <div id="root"></div> do index.html
import ReactDOM from 'react-dom';
// Importando o componenet APP
import App from './App';
// Importando o css
import './index.css';

import { BrowserRouter } from 'react-router-dom'

// Renderizando o component APP (com seus sub componenets e etc) em <div id="root"></div> do index.html
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
),
    document.getElementById('root'));