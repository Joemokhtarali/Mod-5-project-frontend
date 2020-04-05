import React from 'react'
import { BrowserRouter as NavLink } from 'react-router-dom'



class Navbar extends React.Component {

    render() {
        return (

            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a href="/" className="navbar-brand">
                    <img src="/examples/images/logo.svg" height="28" alt="CoolBrand"></img>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <NavLink to='/' exact className="nav-item nav-link"> Home </NavLink>
                        <NavLink to='/categories' exact className="nav-item nav-link"> Categories </NavLink>
                    </div>
                    
                    <div className="navbar-nav ml-auto">
                        <NavLink to='/login' exact className="nav-item nav-link"> Login </NavLink>
                        <NavLink to='/signup' exact className="nav-item nav-link"> Sign up </NavLink>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar

