import React, { Component } from 'react';
import FormValidator from '../Login/FormValidator'
import '../Login/Login.css'

class Login extends Component {
    constructor(){
        super();
        this.validator = new FormValidator([
            {
            field: 'email',
            method: 'isEmpty',
            validWhen: false,
            message:'Email is required',
            },
            {
            field: 'email',
            method: 'isEmail',
            validWhen: true,
            message:'That is not a valid email',
            },
            {
            field: 'password',
            method: 'isEmpty',
            validWhen: false,
            message:'Password is required',
            },
            {
            field: 'password_confirmation',
            method: 'isEmpty',
            validWhen: false,
            message:'Password Confirmation is required',
            },
            {
            field: 'password_confirmation',
            method: 'isEmpty',
            validWhen: false,
            message:'Password and password confirmation do not match',
            }
    ]);
            this.state = {
                email: '',
                password: '',
                password_confirmation: '',
                validation: this.validator.valid(),
            }

            this.submitted = false;
    }

            passwordMatch = (confirmation, state) => (state.password === confirmation)

            handleInputChange = event => {
                event.preventDefault();

                this.setState({
                    [event.target.name]: event.target.value,
                })
            }

            handleFormSubmit = event =>{
                event.preventDefault();

                const validation = this.validator.validate(this.state);
                this.setState({validation});
                this.submitted = true;

                if(validation.isValid) {

                }
            }
    render() { 
        let validation = this.submitted ?
                            this.validator.validate(this.state) :
                            this.state.validation
        return ( 
            <div>
                <nav className="nav">
                    <a className="navbar-brand" href="https://">
                        AWL
                    </a>
                    <div className="nav-menu">
                        <a className="nav-link" href="https://">Home <span className="sr-only">(current)</span></a>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button>
                    </div>
                </nav>
                <form className="form-signin">
                  <h1 className='h3'>
                    Please Login
                  </h1>
                    <div className="form-group {validation.email.isInvalid && 'has-error'}">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control is-valid" name="email" placeholder="Email address" onChange={this.handleInputChange} autoFocus/>
                        <span className="help-block">{validation.email.message}</span> 
                        <label for="Password">Password</label>
                        <input type="password" class="form-control is-valid" name="password" id="inputPassword"  placeholder="Password" onChange={this.handleInputChange} autoFocus/>
                        <span className="help-block">{validation.password.message}</span> 
                    </div>
                        <div className="Checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me"/>
                                    <span>"Remember Me"</span>
                                </label>
                        </div>
                    
                  <button onClick={this.handleFormSubmit} className="btn btn-lg btn-primary" type="submit">Login</button>
                  </form>
            </div>


         );
    }
}
 
export default Login ;