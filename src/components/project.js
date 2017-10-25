import React, {Component} from 'react';

export default class Project extends Component{
    render(){
        return(
            <section id="portfolio">
                <div className="container">
                    <h2 className="text-center">Projects</h2>
                    <hr className="star-primary"/>
                        <div className="row">
                            <div className="col-sm-4 portfolio-item">
                                <a className="portfolio-link" href="#portfolioModal1" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="img/portfolio/cabin.png" alt=""/>
                                </a>
                            </div>
                        </div>
                </div>
            </section>  
        );
    }
}