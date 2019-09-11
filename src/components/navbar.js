import React, {Component} from "react";

import Logo from './images/kenslogo.png'

import './style.css'


export default class navbar extends Component {

    smoothScroll = (e) => {

        e.preventDefault();

        const EventId = e.currentTarget.getAttribute("href");
        window.scrollTo({
            top: document.querySelector(EventId).offsetTop,
            behavior: "smooth"

        })
    }
    render() {
        return (
            <div id="body" className="body" >
                <header>
                    {/*<div className="logo">*/}
                        {/*<img src={Logo} alt=""/>*/}
                    {/*</div>*/}

                    <h1 className="logo"><img src={Logo} alt="" style={{height:"30px", width:'auto'}}/> </h1>

                    <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
                    <nav className="nav_bar_ul">
                        <ul>
                            <li><a href="#home" onClick={this.smoothScroll}>Home</a></li>
                            <li><a href="#about" onClick={this.smoothScroll}>About</a></li>
                            <li><a href="#portfolio" onClick={this.smoothScroll}>Portfolio</a></li>
                            <li><a href="#contact" onClick={this.smoothScroll}>Contact</a></li>
                        </ul>

                    </nav>
                    <div className="contact">

                       {/*<span>Tel:07176017221</span>*/}
                        {/*<span>Tel:07176017221</span>*/}
                    </div>

                    <label htmlFor="nav-toggle" className="nav-toggle-label">
                        <span></span>
                    </label>
                </header>

               {/*<LandingFace/>*/}
            </div>


        )
    }
}
