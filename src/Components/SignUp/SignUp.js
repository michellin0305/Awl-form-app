import React, { Component } from 'react';
import FormValidator from '../SignUp/FormValidator';
import '../SignUp/SignUp.css'

class SignUp extends Component {
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
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                    </div>
                </nav>
                <h1>
                   AWL Intergrated
                </h1>
                <p>Signup Today</p>
                <form data-validate>
                        <div className="form-group">
                            <label for="inputCompanyname">Company Name</label>
                            <input type="text" className="form-control is-valid" id="inputCompanyname" placeholder="Company name" required/>
                        </div>
                        <div className="form-group">
                            <label for="inputFirstname">First Name</label>
                            <input type="text" className="form-control is-valid" id="inputFirstname" placeholder="First name"  required/>
                        </div>
                        <div className="form-group">
                            <label for="inputLastname">Last name</label>
                            <input type="text" className="form-control is-valid" id="inputLastname" placeholder="Last name" required />
                        </div>
                        <div className="form-group {validation.email.isInvalid && 'has-error'}">
                            <label for="email">Email</label>
                            <input type="email" className="form-control is-valid" name='email' placeholder="john@doe.com" onChange={this.handleInputChange}/>    
                            <span className="help-block">{validation.email.message}</span>  
                        </div>
                        <div className="form-group {validation.password.isInvalid && 'has-error'}">
                            <label for="Password">Password</label>
                            <input type="password" className="form-control is-valid" name="Password" placeholder="Password" onChange={this.handleInputChange}/>
                            <span className="help-block">{validation.password.message}</span> 
                        </div>
                        <div className="form-group{validation.password_confirmation.isInvalid && 'has-error'}">
                            <label for="ConfirmPassword">Confirm Password</label>
                            <input type="password" className="form-control is-valid" name="ConfirmPassword" placeholder="Password" onChange={this.handleInputChange}/>
                            <span className="help-block">{validation.password_confirmation.message}</span>       
                        </div>
                        <div className="form-group">
                            <label for="country">Country</label>
                           <select className="form-control">
                                <option>select...</option>
                                <option>Benin</option>
                                <option>Burkina Faso</option>
                                <option>Cape Verde</option>
                                <option>Gambia</option>
                                <option>Ghana</option>
                                <option>Guniea</option>
                                <option>Guniea-Bissau</option>
                                <option>Ivory Coast</option>
                                <option>Liberia</option>
                                <option>Mali</option>
                                <option>Mauritania</option>
                                <option>Niger</option>
                                <option>Nigeria</option>
                                <option>Senegal</option>
                                <option>Sierra Leone</option>
                                <option>Togo</option>
                            </select>     
                        </div>
            
                        
                    <button onClick={this.handleFormSubmit}className="btn btn-primary" type="submit">Sign up</button>
                </form>
            </div>
         );
    }
}
 
export default SignUp;