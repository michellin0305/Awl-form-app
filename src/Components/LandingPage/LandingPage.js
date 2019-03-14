import React, { Component } from 'react';
import Maternity from '../Images/Maternity.jpg'
import Parent from '../Images/Parent.jpg'
import image from '../Images/image.jpg'
import '../LandingPage/LandingPage.css'

class LandingPage extends Component {
    render() { 
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
                    <div className="jumbotron">
                        <h1 className="display-4">AWL Integrate</h1>
                        <div className="container-fluid">
                        <div className="row">
                                    <div className="col-4">
                                    <img src={Maternity} className="" width= "70" height= "70" alt=""/>
                                    </div>
                                    <div className="col-4">
                                    <img src={Parent} className="" width= "90" height= "70" alt=""/>
                                    </div>
                                    <div className="col-4">
                                    <img src={image} className=""  width= "90" height= "70" alt=""/>
                                    </div>
                            </div>
                        </div>
                        <p className="lead">An open source,simple yet powerful absence management software for small and medium size business</p>
                        <p>Click the sign up button below to enjoy full coverage on specfic absense permit from work</p>
                        <p>Endorsed by LevelUp software developers.</p>
                        <a className="btn btn-success btn-lg" href="https://" role="button">Sign Up</a>
                    </div>       
            </div>
         );
    }
}
 
export default LandingPage;