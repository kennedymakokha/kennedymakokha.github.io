import React,{Component} from 'react';

import Ionsadnrois from  './images/portfolio/androidios.jpg'

import Fraudvigilance from  './images/portfolio/fraudicon.png'


class portfolio extends Component {
    render(){
        return(
            <section className="portfolio pt-100 pb-70" id="portfolio" data-scroll-index="3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="heading text-center">
                                <h6>Portfolio</h6>
                                <h2>Work I Have Done</h2>
                            </div>
                            <div className="portfolio-filter text-center">
                                <ul>
                                    <li className="sel-item" data-filter="*">All</li>
                                    <li data-filter=".design">Mobile(android/ios)</li>
                                    <li data-filter=".application">Web applications</li>
                                    <li data-filter=".development">packages</li>
                                    <li data-filter=".development">Desktop applications</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row portfolio-items">

                        <div className="col-lg-4 col-md-6 item application">
                            <div className="item-content">
                                <img src={Ionsadnrois} alt=""/>
                                <div className="item-overlay">
                                    <h6>Application</h6>
                                    <div className="icons">
                                    <span className="icon link">
                                        <a href="images/portfolio/img-1.jpg">
                                            <i className="fa fa-search"></i>
                                        </a>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 item design">
                            <div className="item-content">
                                <img src="images/portfolio/img-2.jpg" alt=""/>
                                <div className="item-overlay">
                                    <h6>Web Design</h6>
                                    <div className="icons">
                                    <span className="icon link">
                                        <a href="images/portfolio/img-2.jpg">
                                            <i className="fa fa-search"></i>
                                        </a>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 item development">
                            <div className="item-content">
                                <img src="images/portfolio/img-3.jpg" alt=""/>
                                <div className="item-overlay">
                                    <h6>Application</h6>
                                    <div className="icons">
                                    <span className="icon link">
                                        <a href="images/portfolio/img-3.jpg">
                                            <i className="fa fa-search"></i>
                                        </a>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 item design development">
                            <div className="item-content">
                                <img src="images/portfolio/img-4.jpg" alt=""/>
                                <div className="item-overlay">
                                    <h6>Development</h6>
                                    <div className="icons">
                                    <span className="icon link">
                                        <a href="images/portfolio/img-4.jpg">
                                            <i className="fa fa-search"></i>
                                        </a>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 item development application">
                            <div className="item-content">
                                <img src="images/portfolio/img-5.jpg" alt=""/>
                                <div className="item-overlay">
                                    <h6>Web Design</h6>
                                    <div className="icons">
                                    <span className="icon link">
                                        <a href="images/portfolio/img-5.jpg">
                                            <i className="fa fa-search"></i>
                                        </a>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 item application development">
                            <div className="item-content">
                                <img src="images/portfolio/img-6.jpg" alt=""/>
                                <div className="item-overlay">
                                    <h6>Web Design</h6>
                                    <div className="icons">
                                    <span className="icon link">
                                        <a href="images/portfolio/img-6.jpg">
                                            <i className="fa fa-search"></i>
                                        </a>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default portfolio;


