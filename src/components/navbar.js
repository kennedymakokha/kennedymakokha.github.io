import React, {Component} from "react";

// import './custom.css'

import './style.css'

// import LandingFace from './landingFace';


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
                    <h1 className="logo">Kennedy </h1>
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
