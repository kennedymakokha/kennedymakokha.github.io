import React, {Component} from "react";

import Nav from "./navbar";

import About from "./about";

import Services from "./services";

import Portfolio from "./portfolio";

import Contact from "./contact";

import Footer from "./footer";

import "./custom.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCoffee, faChevronDown } from '@fortawesome/free-solid-svg-icons'


class landing extends Component {

    // navbarToggler = () => {
    //
    //     const bannerCaption = document.querySelector('#navbarCollapse');
    //
    //     if(bannerCaption.classList.contains('open-menu')) {
    //
    //         bannerCaption.classList.remove('open-menu');
    //
    //     }else{
    //
    //         bannerCaption.classList.add('open-menu');
    //
    //     }
    //
    // }

    smoothScroll = (e) => {

        e.preventDefault();

        const EventId = e.currentTarget.getAttribute("href");
        window.scrollTo({
            top: document.querySelector(EventId).offsetTop,
            behavior: "smooth"

        })
    }

    componentDidMount() {


        const header = document.querySelector("header");

        const sectionOne = document.querySelector("#home");

        const sectionOneOptions = {
            rootMargin: "-200px 0px 0px 0px"
        };

        const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    header.classList.add("nav-scrolled");
                } else {
                    header.classList.remove("nav-scrolled")
                }
            })

        }, sectionOneOptions);

        sectionOneObserver.observe(sectionOne);

        const fader = document.querySelector(".fade-in");

        const appearOptions = {};

        const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add("appear");
                    appearOnScroll.unobserve(entry.target);
                }
            })
        }, appearOptions);


            appearOnScroll.observe(fader);

    }


    render() {


        return (

            <div>


                <Nav />

                <section id="home" className="banner"
                    // style="background-image: url('images/background/home-banner-bg.jpg')" data-stellar-background-ratio=".7" data-scroll-index="0"
                >
                    <div className="container">

                        <div className="banner-caption">
                            <h1>Hi! I'm Ken.</h1>
                            <p className="cd-headline clip mt-30">
                                <span>Creative Designer & Developer located in Nairobi-Kenya .</span><br/>
                                <span className="blc">Specialized in</span>
                                <span className="cd-words-wrapper">
                                    <b className="typewriter-text is-visible"> &ensp;Designing UI/UX, Designing Logo, Designing Mobile App.</b>
                        </span>
                            </p>
                        </div>
                        <div className="arrow bounce">

                            <a href="#about" onClick={this.smoothScroll} data-scroll-nav="1"><FontAwesomeIcon icon={faChevronDown} size="5x" /></a>

                        </div>
                    </div>


                </section>


                <About/>


                <Services/>

                <Portfolio />

                <Contact />

                <Footer/>

            </div>

        )

    }
}

export default landing;