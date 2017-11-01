import React, {Component} from 'react';
import CommonModel from '../models/common';
const jQuery = window.jQuery;

export default class Project extends Component{
    constructor(props){
        super(props);

        this.state = {
            projects : null,
            showProjectItem: 3,
            expanded: false
        }
        // BINDING
        this.onHandleShowitem = this.onHandleShowitem.bind(this);
        this.onHandleModal = this.onHandleModal.bind(this);
    }

    componentDidMount(){
        this.getProjectList();

    }

    getProjectList(){
        CommonModel.getProjects().then((data) => {
           this.setState({
               projects: data.data
           })
        });
    }
    /*EVENT HANDLE*/
    onHandleShowitem(event){
        if(this.state.projects){
            if(this.state.showProjectItem === 3){
                this.setState({
                    showProjectItem: this.state.projects.result.length,
                    expanded: true
                })
            }else{
                this.setState({
                    showProjectItem: 3,
                    expanded: false
                })
            }
        }
    }

    onHandleModal(event){
        event.preventDefault();
        jQuery('.modal').modal('show');


    }

    render(){
        return(
            <section id="portfolio">
                <div className="container">
                    <h2 className="text-center">Projects</h2>
                    <hr className="star-primary"/>
                    <div className="row">
                        {
                            this.state.projects !== null && this.state.projects.result.length > 0 ? (
                                this.state.projects.result.slice(0, this.state.showProjectItem).map( (rs, key)=>
                                    <div className="col-sm-4  portfolio-item" key={key} >
                                        <a className="portfolio-link" onClick={this.onHandleModal} project={rs }>
                                            <div className="caption">
                                                <div className="caption-content">
                                                    <i className="fa fa-search-plus fa-3x"></i>
                                                </div>
                                            </div>
                                            <img className="img-fluid" src="img/portfolio/cabin.png" alt=""/>
                                        </a>
                                    </div>
                                )
                            ) : (
                                <div className="col-sm-12 portfolio-item text-center">
                                    <p>Chưa có dữ liệu</p>
                                </div>
                            )
                        }


                    </div>
                    {
                        this.state.expanded ? (
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="btn-container text-center">
                                        <button type="button" className="btn btn-warning" onClick={this.onHandleShowitem}>Show Less</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="btn-container text-center">
                                        <button type="button" className="btn btn-primary" onClick={this.onHandleShowitem}>Show More</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
                <div className="portfolio-modal modal fade">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="close-modal" data-dismiss="modal">
                                <div className="lr">
                                    <div className="rl"></div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 mx-auto">
                                        <div className="modal-body">
                                            <h2>Project Title</h2>
                                            <hr className="star-primary"/>
                                            <img className="img-fluid img-centered" src="img/portfolio/submarine.png" alt=""/>
                                            <p>Use this area of the page to describe your project. The icon above is part of a free icon
                                                set by
                                                <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can
                                                download their free set with 16 icons, or you can purchase the entire set with 146 icons
                                                for only $12!</p>
                                            <ul className="list-inline item-details">
                                                <li>Client:
                                                    <strong>
                                                        <a href="http://startbootstrap.com">Start Bootstrap</a>
                                                    </strong>
                                                </li>

                                                <li>Service:
                                                    <strong>
                                                        <a href="http://startbootstrap.com">Web Development</a>
                                                    </strong>
                                                </li>
                                            </ul>
                                            <button className="btn btn-success" type="button" data-dismiss="modal">
                                                <i className="fa fa-times"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        );
    }
}