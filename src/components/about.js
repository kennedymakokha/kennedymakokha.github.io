
import Layout from './Layout'
import React, { useState, useRef } from 'react'
import BreadCramp from './breadcramp'
import { bioData, bioData1 } from '../data'

function MeTab(props) {
    return (
        <div className='border-t border-b border-yellow-400 border-l border-r md:h-full h-full flex justify-center items-center'>
            <div>
                <h1 className='md:text-5xl text-2xl md:font-bold font-semibold text-italic text-center justify-center text-yellow-400'>{props.num}<sup>+</sup></h1>
                <h2 className='text-white md:font-semibold font-medium'>~{props.title}</h2>
            </div>
        </div>
    )
}

function MeEducation(props) {
    return (
        <div className='md:w-1/2 w-full mb-20'>
            <div className='w-1/10 border-l relative z-0 border-white'>
                <div className="absolute inset-0  -left-5 z-10 -top-1 h-10 w-10 bg-yellow-400 flex items-center justify-center rounded-full">
                    {props.icon}
                </div>
                <div className='px-10 pb-8 max-w-10'>
                    <div className='bg-gray-800 px-2 text-sm rounded-l-full rounded-r-full w-1/5  justify-center items-center flex'>{props.duration}</div>
                </div>
                <div className='px-10'>
                    <h4 className='text-1xl text-yellow-400 font-bold'>{props.role} -{props.campany} </h4>

                    <p className='text-white font-light'>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

function Meskills(props) {
    return (
        <div className=' md:w-1/4 mb-5 w-1/2 '>
            <div className='border-t border-b border-yellow-400 border-l border-r rounded-full md:h-48 h-32 md:w-48 w-32 flex-col flex justify-center items-center'>
                <div>
                    <h1 className='md:text-4xl text-2xl font-bold text-italic text-center justify-center text-yellow-400'>{props.num}<sup>%</sup></h1>
                </div>
                <h2 className='text-white text-xl  md:text-3xl '>{props.title}</h2>
            </div>
        </div>
    )
}


function BioData(props) {
    return (
        <div className='flex'><h5 className=' md:w-24 w-14 text-xs font-serif md:text-lg '>{props.name}: </h5><h6 className='  text-xs mx-1 md:text-lg md:w-36 w-16 ' >{props.value}</h6></div>
    )
}





function About() {
    const titleRef = useRef()
    const ExperRef = useRef()
    const HomeRef = useRef()
    const { page, changePage } = useState('about')

    function handleBackClick(funcRef) {

        funcRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className='w-screen'>
            <Layout>
                <div className='md:min-w-full min-w-full md:pr-24 pr-10  md:mt-0 mt-14  mb-96' ref={HomeRef}>
                    <BreadCramp name="Resume" b1="About" b4="-" b2="me" />

                    <h3 className='text-yellow-400  md:text-3xl text-xl not-italic font-bold md:flex hidden'>Personal Info</h3>
                    <div className="flex flex-wrap w-full md:pt-12  pt-2 text-white">
                        <div className='w-full md:w-2/4 flex flex-col'>
                            <div className='flex '>
                                <div>
                                    {bioData.map((bio, i) => (
                                        <BioData key={i} name={bio.key} value={bio.value} />
                                    ))}
                                </div>
                                <div className='border-l-2 md:border-l-0 mx-2 px-1 md:px-0 '>
                                    {bioData1.map((bio, i) => (
                                        <BioData key={i} name={bio.key} value={bio.value} />
                                    ))}
                                </div>

                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='border-t  mt-4 border border-yellow-400 rounded-l-full group group-hover:justify-between justify-center  p-2  rounded-r-full group-hover:w-40 flex  '>
                                    <svg className="w-6 h-6 group-hover:flex hidden " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
                                    <div className='group-hover:hidden flex'>Resume</div>

                                </div>

                                <button className="capitalize w-40   text-white focus:outline-none md:px-10 px-2 py-3  text-center flex flex-row ">
                                </button>
                            </div>

                        </div>
                        <div className='w-full md:w-2/4 md:mt-0 mt-4'>
                            <div className="grid grid-rows-2 grid-flow-col md:gap-x-2  gap-4  md:h-full h-full md:pl-10 pl-0">

                                <MeTab title="Years of experience" num="5" />


                                <MeTab title="COMPLETED PROJECTS" num="17" />


                                <MeTab title="HAPPY CUSTOMERS" num="166" />


                                <MeTab title="AWARDS WON" num="17" />


                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full  pt-10'>
                        {/* <button onClick={handleBackClick}>Back to the top</button> */}
                        <svg onClick={() => handleBackClick(titleRef)} className="w-10 h-10 animate-bounce  text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
                    </div>
                </div>


            </Layout >
            <div ref={titleRef} className='w-full overflow-hidden md:h-full h-full  bg-gradient-to-b to-gray-800 from-black px-10 py-0'>
                <div className='items-centre justify-center flex underline underline-offset-8 text-yellow-400 min-w-full py-10'>
                    <h3 className='text-white text-3xl'>My skills </h3>
                </div>

                <div className="flex flex-wrap  w-full pt-5 text-white  py-0">

                    <Meskills title="Typescript" num="69" />


                    <Meskills title="Laravel" num="57" />


                    <Meskills title="Electron Js" num="76" />


                    <Meskills title="React Js" num="77" />


                    <Meskills title="React Native" num="87" />




                </div>
                <div className='flex justify-center items-center pt-10'>
                    <svg onClick={() => handleBackClick(ExperRef)} className="w-10 h-10 animate-bounce   text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
                </div>

            </div>

            <div ref={ExperRef} className='w-full   bg-gradient-to-b from-gray-800 to-black px-10 py-0'>
                <div className='items-centre justify-center flex underline underline-offset-8 text-yellow-400 min-w-full py-10'>
                    <h3 className='text-white text-3xl'>My Experience </h3>
                </div>

                <div className="flex flex-wrap  w-full pt-5 text-white  py-0">

                    <MeEducation duration="2017-Present"
                        campany="Intelligent"
                        role="Senior Software Developer"
                        description="Responsible under the supervision of the project manager to design and Develop desktop web and mobile applications "
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
                    />

                    <MeEducation
                        duration="2012-2016"
                        description="Graduated with a Barchelors Degree in Computer Science. Having achieved a Second Class Upper Division"
                        campany="University Of Eldoret"
                        role="BSc Computer Science"
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>}
                    />



                </div>
                <div className='flex justify-center items-center pt-10'>
                    <svg onClick={() => handleBackClick(HomeRef)} className="w-10 h-10 animate-bounce text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
                    {/* <svg className="w-10 h-10 animate-bounce   " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg> */}
                </div>

            </div>

        </div>
    );
}

export default About;
