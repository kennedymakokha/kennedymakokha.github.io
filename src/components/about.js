import React,{Component} from 'react';

import Cv from "./downloads/mycv.docx";

import './style.css';

import Kennedy from './images/kennedy.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { faFacebook,faTwitter,faDribbble,faGooglePlus,faPinterest } from '@fortawesome/free-brands-svg-icons'

// import { faCoffee, faChevronDown } from '@fortawesome/free-solid-svg-icons'


class about extends Component {
    render(){
        return(
            <section className="about pt-100 pb-100 fade-in" id="about" data-scroll-index="1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">

                            <div className="about-img">
                                <img src={Kennedy} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">

                            <div className="about-content">
                                <div className="about-heading">
                                    <h2>About Me.</h2>
                                    <span>UI/UX Designer & Web Developer</span>
                                </div>
                                <p>I'm <b>Kennedy Makokha</b> a software developer with a Bachelor's degree in
                                    Computer Science and hands-on experience in Information Technology using Net
                                    languages ,React,React-native,Node,laravel,MongoDb,and a lot more frameworks to
                                    create and implement software applications.</p>
                                <p>I enjoy being challenged and engaging in projects that require me to work ouside
                                    my comfort and knowledge set,as continuing to learn new languages and developing
                                    my techniques are my priority.</p>

                                <div className="social-icons">
                                    <a href="https://www.facebook.com/kenmakokha" className="socioIcons" ><FontAwesomeIcon icon={faFacebook}   size="xs" /></a>
                                    <a href="https://twitter.com/kennatte" className="socioIcons" ><FontAwesomeIcon icon={faTwitter}  size="xs" /></a>
                                    <a href="https://dribbble.com/Kennate" className="socioIcons" ><FontAwesomeIcon icon={faDribbble}  size="xs" /></a>
                                    <a href="" className="socioIcons" ><FontAwesomeIcon icon={faGooglePlus}  size="xs" /></a>
                                    <a href="https://www.pinterest.com/katchibo1/" className="socioIcons" ><FontAwesomeIcon icon={faPinterest}  size="xs" /></a>
                                    {/*<a href="#"><i className="fa fa-twitter"></i></a>*/}
                                    {/*<a href="#"><i className="fa fa-dribbble"></i></a>*/}
                                    {/*<a href="#"><i className="fa fa-google-plus"></i></a>*/}
                                    {/*<a href="#"><i className="fa fa-pinterest"></i></a>*/}
                                </div>
                                <span className="about-button">
                                <a className="main-btn" href={Cv}>Download CV</a>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default about;