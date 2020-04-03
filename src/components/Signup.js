import React from 'react'

class Signup extends React.Component {

    render() {
        return(
        <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-login">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <a href="#" className="active" id="login-form-link">Login</a>
                                    </div>
                                    <div className="col-xs-6">
                                        <a href="#" id="register-form-link">Register</a>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form id="login-form" action="https://phpoll.com/login/process" method="post" role="form" style="display: block;">
                                            <div className="form-group">
                                                <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value=""></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password"></input>
                                            </div>
                                            <div className="form-group text-center">
                                                <input type="checkbox" tabindex="3" className="" name="remember" id="remember"></input>
                                                <label for="remember"> Remember Me</label>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-6 col-sm-offset-3">
                                                        <input type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-login" value="Log In"></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="text-center">
                                                            <a href="https://phpoll.com/recover" tabindex="5" className="forgot-password">Forgot Password?</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <form id="register-form" action="https://phpoll.com/register/process" method="post" role="form" style="display: none;">
                                            <div className="form-group">
                                                <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value=""></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" tabindex="1" className="form-control" placeholder="Email Address" value=""></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password"></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="confirm-password" id="confirm-password" tabindex="2" className="form-control" placeholder="Confirm Password"></input>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-6 col-sm-offset-3">
                                                        <input type="submit" name="register-submit" id="register-submit" tabindex="4" className="form-control btn btn-register" value="Register Now"></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Signup