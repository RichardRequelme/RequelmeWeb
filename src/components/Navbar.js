import React from 'react'
import logo from '../components/loguito.png'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#040720'}}>
            <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='logo...'></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" >
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item active">
                        <a className="nav-link" href="#" id="navegador">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#" id="navegador">Link</a>
                    </li>

                </ul>
            </div>
        </nav>
        
    )
}


export default Navbar;
