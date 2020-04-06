import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../forms/login';
import Signup from '../forms/signup';



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
                        <Link to='/'  ><button> Home </button>  </Link>
                    </div>
                    
                    <div className="navbar-nav ml-auto">
                        <Link to='/login'><button> Login </button>  </Link>
                        <Link to='/signup'><button>  Sign up </button> </Link>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar

