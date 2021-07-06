import React from 'react'; 
import './Header.css'
import Navi from '../navbar'
import Home from '../home'
 import { Container } from 'react-bootstrap';


const Header = () => {
    return (
        <div className="divContainer">
            <Navi /> 
            <Home /> 
        </div>
    )
}; 

export default Header; 