import React, { Component } from 'react';

import Fraudvigilance from './images/portfolio/fv.PNG'

import Cebic from './images/portfolio/cebic.PNG'

import Arkmed from './images/portfolio/arkmed.PNG'

import Fvold from './images/portfolio/fraudVigOLd.jpg'

import FvNew from './images/portfolio/fvmobile.jpg'

import Mtalii from './images/portfolio/mtalii.jpg'

import RedAntA from './images/portfolio/redanta.jpg'

import RedAntD from './images/portfolio/redantD.jpg'



var mobile = [
    {
        title: 'Mtalii Care',

        url: '#',

        image: `${Mtalii}`,

        desc: ''

    },

    {
        title: 'fraud vigillance Mobile App',

        url: 'https://play.google.com/store/apps/details?id=com.fraudVigilanceApp.ke&hl=en',

        image: `${FvNew}`,

        desc: ''

    },
    {
        title: 'RedAnt Agent Mobile App V1 ',

        url: 'https://play.google.com/store/apps/details?id=com.ionicframework.redantcustomer154978&hl=en',

        image: `${RedAntA}`,

        desc: ''

    },

    {
        title: 'fraud vigillance Mobile App V1 ',

        url: 'https://play.google.com/store/apps/details?id=com.fraudVigilanceApp.ke&hl=en',

        image: `${Fvold}`,

        desc: ''

    },

    {
        title: 'Redant DirectoryMobile App V1 ',

        url: 'https://play.google.com/store/apps/details?id=com.ionicframework.redantcustomer154978&hl=en',

        image: `${RedAntD}`,

        desc: ''

    }

    


]


var pack = [



]

var desk = [



]
var web = [
    {
        title: 'Arkmed Medical Services',

        url: 'arkmed.co.ke',

        image: `${Arkmed}`,

        desc: ''

    },

    {
        title: 'fraud vigillance Medical Services',

        url: 'https://fraudvigilance.com/fv_ke/',

        image: `${Fraudvigilance}`,

        desc: ''

    },

    {
        title: 'Cebic ',

        url: 'https://cebic.intelligent.co.ke/',

        image: `${Cebic}`,

        desc: ''

    }


]

class portfolio extends Component {



    state = {
        web: false,
        mobile: false,
        desktop: false,
        packages: false,
        all: true,
        activeIndex: 0
    }


    enableAll = () => {

        this.setState({
            web: false,
            mobile: false,
            desktop: false,
            packages: false,
            all: true,
            activeIndex: 0,
        })
    }


    enableAndroid = () => {

        this.setState({
            web: false,
            mobile: true,
            desktop: false,
            packages: false,
            all: false,
            activeIndex: 1 ,
        })
    }

    enableWeb = () => {

        this.setState({
            web: true,
            mobile: false,
            desktop: false,
            packages: false,
            all: false,
            activeIndex: 2,
        })
    }

    enablepackages = () => {

        this.setState({
            web: false,
            mobile: false,
            desktop: false,
            packages: true,
            all: false,
            activeIndex: 3,

         })
    }

    enableDesktop = () => {

        this.setState({
            web: false,
            mobile: false,
            desktop: true,
            packages: false,
            all: false,
            activeIndex: 4,
        })
    }

    render() {

        var everything = web.concat(mobile).concat(pack);
        // const [web, mobile, desktop, all] = this.state
        return (
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

                                    
                                    <li className={ this.state.activeIndex === 0 ?"sel-item":null} index={0} isActive={this.state.activeIndex === 0}  data-filter="*" onClick={() => this.enableAll()}>All</li>
                                    <li   className={ this.state.activeIndex === 1 ?"sel-item":null} data-filter=".design" index={1} isActive={this.state.activeIndex === 1}  onClick={() => this.enableAndroid()}>Mobile(android/ios)</li>
                                    <li  className={ this.state.activeIndex === 2 ?"sel-item":null}  data-filter=".application" index={2} isActive={this.state.activeIndex === 2}  index={0} isActive={this.state.activeIndex === 0}  onClick={() => this.enableWeb()}>Web applications</li>
                                    <li  className={ this.state.activeIndex === 3 ?"sel-item":null}  data-filter=".development" index={3} isActive={this.state.activeIndex === 3}  onClick={() => this.enablepackages()}>packages</li>
                                    <li  className={ this.state.activeIndex === 4 ?"sel-item":null}  data-filter=".development" index={4} isActive={this.state.activeIndex === 4}  onClick={() => this.enableDesktop()}>Desktop applications</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {this.state.all ? <div className="row portfolio-items">{everything.map((web) => (
                        <div className="col-lg-4 col-md-6 item application">
                            <div className="item-content">
                                <img src={web.image} alt="" />
                                <div className="item-overlay">
                                    <h6>{web.title}</h6>
                                    <div className="icons">
                                        <span className="icon link">
                                            <a href={web.url} target='__blank'>
                                                <i className="fa fa-search"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}</div> : null
                    }

                    {this.state.web ? <div className="row portfolio-items">{web.map((web) => (
                        <div className="col-lg-4 col-md-6 item application">
                            <div className="item-content">
                                <img src={web.image} alt="" />
                                <div className="item-overlay">
                                    <h6>{web.title}</h6>
                                    <div className="icons">
                                        <span className="icon link">
                                            <a href={web.url} target='__blank'>
                                                <i className="fa fa-search"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}</div> : null
                    }


                    {this.state.mobile ? <div className="row portfolio-items">{mobile.map((mob) => (
                        <div className="col-lg-3 col-md-6 item application">
                            <div className="item-content">
                                <img src={mob.image} alt="" />
                                <div className="item-overlay">
                                    <h6>{mob.title}</h6>
                                    <div className="icons">
                                        <span className="icon link">
                                            <a href={mob.url} target='__blank'>
                                                <i className="fa fa-search"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}</div> : null
                    }

                    {this.state.packages && pack.length != 0 ? <div className="row portfolio-items">{mobile.map((mob) => (
                        <div className="col-lg-3 col-md-6 item application">
                            <div className="item-content">
                                <img src={mob.image} alt="" />
                                <div className="item-overlay">
                                    <h6>{mob.title}</h6>
                                    <div className="icons">
                                        <span className="icon link">
                                            <a href={mob.url} target='__blank'>
                                                <i className="fa fa-search"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}</div> : <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}><div>No packages Yet</div></div>
                    }




                </div>

            </section >
        )
    }
}

export default portfolio;


