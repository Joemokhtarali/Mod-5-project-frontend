import React from 'react'
import { Link } from 'react-router-dom'
import { removeCurrentUser } from '../actionCreators/actionCreater'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";



function Navbar(props) {
    let history = useHistory();

    function logOut() {
        props.removeCurrentUser()
        localStorage.clear()
        history.push("/");
    } 
    return (
        <div className='mynavbar'>
            <nav className="navbar navbar-expand-md navbar-light bg-">
                <a href="/home" className="navbar-brand">
                    <img src="/examples/images/logo.svg" height="28" alt="CoolBrand"></img>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        {props.currentUser ? <Link to='/home'  ><button> Home </button>  </Link> : null}
                        {props.currentUser ? <Link to='/activities'  ><button> All Activities </button>  </Link> : null}

                    </div>

                    <div className="navbar-nav ml-auto">
                        {props.currentUser ? <Link to='/myprofile'><button> Profile </button></Link> : null}
                        {props.currentUser ? <button onClick={logOut}> Logout </button> : null}

                    </div>
                </div>

            </nav>
        </div>

    )
}


export default connect(null, { removeCurrentUser })(Navbar)

