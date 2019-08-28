import React,{Component} from 'react';

import truncate from 'truncate-txt'

import ReactImage from  './images/logo/react.png';

import LaravelImage from  './images/logo/laravel.png';

import NodeImage from  './images/logo/node.png';

import IonicImage from  './images/logo/ionic.png';

import MongoImage from  './images/logo/mongo.png';

class services extends Component {
    render(){
        return(
            <section className="services bg-gray pt-100 pb-50" data-scroll-index="2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="heading text-center">
                                <h6>Skill level</h6>
                                <h2>What I Know</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">

                            <div className="service-item" >
                            <span className="icon" style={{backgroundColor:"black"}} >
                               <img src={ReactImage}  className="ImageIcon"/>
                            </span>
                                <h4>React</h4>
                                <p>{(truncate("React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",100))}</p>
                            </div>
                        </div>
                        <div className="col-md-3">

                            <div className="service-item">
                            <span className="icon" style={{backgroundColor:"#f84840"}}>
                               <img src={LaravelImage} className="ImageIcon"/>
                            </span>
                                <h4>Laravel</h4>
                                <p>{(truncate("Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, and caching.",100))}</p>
                            </div>
                        </div>
                        <div className="col-md-3">

                            <div className="service-item">
                            <span className="icon" style={{backgroundColor:"#f2f2f2"}}>
                                <img src={NodeImage} className="ImageIcon"/>
                            </span>
                                <h4>Node </h4>
                                <p>{(truncate("Node.js came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application.",100))}
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3">

                            <div className="service-item" >
                            <span className="icon"  >
                               <img src={IonicImage}  className="ImageIcon"/>
                            </span>
                                <h4>Ionic</h4>
                                <p>{(truncate("Ionic Framework is the free, open source mobile UI toolkit for developing high-quality cross-platform apps for native iOS, Android, and the web—all from a single codebase.",100))}</p>
                            </div>
                        </div>
                        <div className="col-md-3">

                            <div className="service-item">
                            <span className="icon" style={{backgroundColor:"#422f20"}}>
                               <img src={MongoImage} className="ImageIcon"/>
                            </span>
                                <h4>MongoDb</h4>
                                <p>{(truncate("MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.",100))}</p>
                            </div>
                        </div>
                        <div className="col-md-3">

                            <div className="service-item">
                            <span className="icon" style={{backgroundColor:"#f2f2f2"}}>
                                <img src={NodeImage} className="ImageIcon"/>
                            </span>
                                <h4>Node </h4>
                                <p>{(truncate("I have a Bachelor’s degree in Computer Science and have spent the past three years at Intelligent Technologies my main responsibilities revolved around building cutting-edge mobile applications and games, testing and debugging applications.",100))}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default services;