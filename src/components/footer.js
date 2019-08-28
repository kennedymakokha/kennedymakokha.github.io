import React,{Component} from 'react';

class portfolio extends Component {
    render(){
        return(
            <footer className="pt-50 pb-50">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3 col-sm-6">

                            <div className="contact-info">
                                <h5>Kennedy</h5>
                                <p>Software developer.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">

                            <div className="contact-info">
                                <h5>Phone No.</h5>
                                <p>(+254) 716 017 221</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="contact-info">
                                <h5>Email</h5>
                                <p>katchibo2@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">

                            <div className="contact-info">
                                <h5>Address</h5>
                                <p>3334-30200 Kitale, Ke.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-12">
                            <hr/>
                            <p className="copy pt-30">
                                Kennedy &copy; 2019. All Right Reserved, Designed By Kennedy Makokha.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default portfolio;


