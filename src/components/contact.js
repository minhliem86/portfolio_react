import React, {Component} from 'react';
import CommonModel from '../models/common';

const jQuery = window.jQuery;

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: null,
            mes: ''
        };

        // BINDING
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onHanleChange = this.onHanleChange.bind(this);
        this.onHandleCloseModal = this.onHandleCloseModal.bind(this);
    }

    onHanleChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    onHandleSubmit(event) {
        event.preventDefault();
        jQuery('#modal-contact').show();
        // let data = {
        //     name: this.state.name,
        //     email: this.state.email,
        //     phone: this.state.phone,
        //     message: this.state.message,
        // }
        // CommonModel.postContact(data).then(res => {
        //     jQuery('#modal-contact').show();
        //     if (res.errors === null) {
        //         this.setSate({
        //             mes: '<p>Cảm ơn bạn đã gửi thông tin cho tôi.</p>\n' +
        //             '                                <p>Trong trường hợp cần liên lạc sớm. Vui lòng liên hệ theo số: (+84) 902 942 054 hoặc để lại SMS.</p>\n' +
        //             '                                <p>Chúc bạn một ngày tốt lành!</p>',
        //             errors: null
        //         })
        //     } else {
        //         this.setState({
        //             mes: null,
        //             errors: res.errors,
        //         })
        //     }
        // });
    }

    onHandleCloseModal(event)
    {
        event.preventDefault();
        jQuery('#modal-contact').hide();
        this.setState({
            mes: null,
            errors: null,
        })
    }

    render() {
        return (
            <section id="contact" className="success">
                <div className="container">
                    <h2 className="text-center">Contact Me</h2>
                    <hr className="star-light"/>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <form id="contactForm" onSubmit={this.onHandleSubmit}>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Name</label>
                                        <input className="form-control" id="name" name="name" type="text"
                                               placeholder="Name"
                                               required
                                               data-validation-required-message="Please enter your name."
                                               value={this.state.name} onChange={this.onHanleChange}
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Email Address</label>
                                        <input className="form-control" id="email" name="email" type="email"
                                               placeholder="Email Address" required
                                               data-validation-required-message="Please enter your email address."
                                               value={this.state.email} onChange={this.onHanleChange}
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Phone Number</label>
                                        <input className="form-control" id="phone" name="phone" type="tel"
                                               placeholder="Phone Number" required
                                               data-validation-required-message="Please enter your phone number."
                                               value={this.state.phone} onChange={this.onHanleChange}
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Message</label>
                                        <textarea className="form-control" name="message" id="message" rows="5"
                                                  placeholder="Message" required
                                                  data-validation-required-message="Please enter a message."
                                                  value={this.state.message} onChange={this.onHanleChange}
                                        ></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br/>
                                <div id="success"></div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-lg" id="sendMessageButton">Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modal-contact">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" onClick={this.onHandleCloseModal} aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">Submition Fail!</h4>
                            </div>
                            <div className="modal-body">
                                tester
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}