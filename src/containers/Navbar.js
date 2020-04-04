import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'



class Navbar extends React.Component {

    render() {
        return (

            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <a href="#" class="navbar-brand">
                    <img src="/examples/images/logo.svg" height="28" alt="CoolBrand"></img>
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
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

       // <nav className="navbar navbar-expand-lg navbar-light bg-light">
            //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            //         <span className="navbar-toggler-icon"></span>
            //     </button>
            //     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            //         <a className="navbar-brand" href="#">Hidden brand</a>
            //         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            //             <li className="nav-item active">
            //                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            //             </li>
            //             <li className="nav-item">
            //                 <a className="nav-link" href="#">Link</a>
            //             </li>
            //         </ul>
            //         <ul className="nav navbar-nav navbar-right">
            //             <li><a href="#"><span class="glyphicon glyphicon-user"></span>  Sign Up  </a></li>
            //             <li><a href="#"><span class="glyphicon glyphicon-log-in"></span>  Login  </a></li>
            //         </ul>
            //     </div>
            // </nav>