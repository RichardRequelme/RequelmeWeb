import React from 'react'
import logo from '../components/loguito.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#040720'}}>
        <div className="container">
            
            <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='logo...'></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color:'white'}}/>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" >
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item active">
                        <a className="nav-link" href="#" id="navegador">articles()</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#" id="navegador">projects()</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#" id="navegador">aboutMe()</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#" id="navegador">contact()</a>
                    </li>
                    
                </ul>
            </div>
        </div>
        </nav>
        
    )
}


export default Navbar;
