import React, {Component} from 'react';

export default class About extends Component {
    render(){
        return(
            <section className="success" id="about">
                <div className="container">
                    <h2 className="text-center">About</h2>
                    <hr className="star-light"/>
                    <div className="row">
                        <div className="col-lg-5 ml-auto">
                            <img src="img/profile.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-5 mr-auto">
                            <div className="about-content">
                                <p><span>Name: </span>Phan Minh Liêm</p>
                                <p><span>Email: </span>minhliemphp@gmail.com</p>
                                <p><span>Phone: </span>0123 456 789</p>
                                <p><span>Hobbit: </span>Lorem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        );
    }
}