import React,{Component} from 'react';

class contact extends Component {
    render(){
        return(
            <section className="contact pt-100 pb-100" id="contact" data-scroll-index="5">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="heading">
                                <h6>Contact</h6>
                                <h2>Get In Touch</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">

                            <form id='contact-form' ><input type='hidden' name='form-name'
                                                                         value='contactForm'/>
                                <div className="row">
                                    <div className="col-md-6 form-group">

                                        <input type="text" className="form-control con-validate" id="contact-name"
                                               placeholder="Name" minLength='3'/>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="email" className="form-control con-validate" id="contact-email"
                                               placeholder="Email"/>
                                    </div>
                                    <div className="col-md-12 form-group">

                                            <textarea className="form-control con-validate" id="contact-message"
                                                      placeholder="How can we help you?" rows='6'></textarea>
                                    </div>
                                    <div className="col-md-12 text-center">

                                        <button id="contact-submit" className="mt-30 main-btn">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default contact;


