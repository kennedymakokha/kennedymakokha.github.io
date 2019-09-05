import React,{Component} from 'react';

import axios from 'axios';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from 'react-loader-spinner'

import './style.css'

class contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            body: '',
            sent:true

        }
        // this.handleInputChange = this.handleChange.bind(this)
    }

    handleInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})

    }

    handleSubmit = async (e) => {
        this.setState({
            sent:false
        })
        e.preventDefault();
        const emailBody = {
            name: this.state.name,
            email: this.state.email,
            body: this.state.body,

        }
        console.log(emailBody)

        await axios.post(`http://104.248.247.251:7000/contact/send`, emailBody)
            .then(res => {
                this.setState({
                    name: '',
                    email: '',
                    body: '',


                })
                // alert('message sent succefull')
                // console.log(res);
                // console.log(res.data);
                this.setState({
                    sent:true
                });
            })
            .catch(e => {
                throw e
            })

    }


    render(){

        const {sent} = this.state;
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

                    {/*{!sent ? <div className="overlay" style={{backgroundColor: "rgba(0,0,0,0.5)",height:'200px',position: 'fixed',*/}
                        {/*display:'block',*/}
                        {/*width: '100%',*/}
                        {/*height: '100vh',*/}
                        {/*top: 0,*/}
                        {/*left: 0,*/}
                        {/*right: 0,*/}
                        {/*bottom: 0,*/}
                        {/*zIndex: 2,*/}
                        {/*cursor: 'pointer'*/}
                    {/*}}>*/}

                    {/*</div>:<div className="overlay" style={{backgroundColor: "rgba(0,0,0,0.5)",height:'200px',position: 'fixed',*/}
                        {/*display:'none',*/}
                        {/*width: '100%',*/}
                        {/*height: '100vh',*/}
                        {/*top: 0,*/}
                        {/*left: 0,*/}
                        {/*right: 0,*/}
                        {/*bottom: 0,*/}
                        {/*zIndex: 2,*/}
                        {/*cursor: 'pointer'*/}
                    {/*}}> </div>}*/}


                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            {this.state.sent ?<form id='contact-form' onSubmit={this.handleSubmit} >
                                <div className="row">
                                    <div className="col-md-6 form-group">

                                        <input type="text" onChange={this.handleInputChange} name="name" value={this.state.name} className="form-control con-validate" id="contact-name"
                                               placeholder="Name" minLength='3'/>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="email" onChange={this.handleInputChange} name="email" value={this.state.email} className="form-control con-validate" id="contact-email"
                                               placeholder="Email"/>
                                    </div>
                                    <div className="col-md-12 form-group">

                                            <textarea onChange={this.handleInputChange} name="body" value={this.state.body} className="form-control con-validate" id="contact-message"
                                                      placeholder="How can we help you?" rows='6'></textarea>
                                    </div>
                                    <div className="col-md-12 text-center">

                                        <button id="contact-submit" className="mt-30 main-btn">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>:<Loader
                                type="Puff"
                                color="#00BFFF"
                                height="100"
                                width="100"
                            />}

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default contact;


