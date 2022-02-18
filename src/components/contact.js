import React, { useState } from 'react'
import Layout from './Layout'
import FB from './../img/sociomedia/fb.png'
import Watasp from './../img/sociomedia/whatsap.jpg'
import Bit from './../img/sociomedia/bit.jpg'
import Link from './../img/sociomedia/link.jpg'
import Git from './../img/sociomedia/git.png'
import BreadCramp from './breadcramp'
function MysocialContainer(props) {
    return (
        <div className='rounded-full  w-1/4 md:p-2 p-1'>
            <a target="blank" href={props.url} >
                <img src={`${props.icon}`} alt="" className='h-10 w-10 rounded-full ' />
            </a>
        </div>
    )
}

function AddressContainer(props) {
    return (
        <div className='flex md:pb-5 pb-2'>
            {props.icon}
            <div className='md:pl-4 pl-1'>
                <h2 className='font-serif'>{props.title}</h2>
                <h3>{props.value}</h3>
            </div>
        </div>
    )

}

const Socialapps = [
    {
        url: 'https://www.facebook.com/kenmakokha/',
        icon: FB,

    },
    {
        url: 'https://www.linkedin.com/in/kennedy-makokha-903875119/',
        icon: Link,

    },
    {
        url: 'https://bitbucket.org/Kenate/',
        icon: Bit,

    },
    {
        url: 'https://github.com/kennedymakokha',
        icon: Git,

    },
]

const Address =
    [
        {
            title: "Address point",
            value: "Patwin Apartments Ruiru(Ke)",
            icon: <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>

        },
        {
            title: "Mail Me",
            value: "katchibo2@gmail.com",
            icon: <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clip-rule="evenodd"></path></svg>

        },
        {
            title: "Call me",
            value: "+254720141534",
            icon: <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
        },
        {
            title: "",
            value: "",
            icon: ""
        }

    ]
function Contact() {

    const [name, changeName] = useState('')
    const [email, changeEmail] = useState('')
    const [subject, changeSubject] = useState('')
    const [message, changeMessage] = useState('')

    function submit() {

        const data = { name, email, subject, message }
        console.log(data)
    }
    return (
        <div className='w-screen bg-black'>
            <Layout>
                <div className='md:min-w-full  flex flex-wrap md:pr-24 pr-10 min-w-screen md:mt-0 mt-14  mb-96'>
                    <BreadCramp name="contact me" b1="get" b2="in" b3="touch" />
                    <div className='md:w-1/3 w-full md:h-full h-auto pt-2 md:px-10 px-2 text-white'>
                        <h3 className='md:text-3xl text-2xl text-yellow-500 font-bold md:py-6 py-1'>Dont <span className='text-white'>Be </span>shy</h3>
                        <p className='text-white md:pb-5 pb-1 font-sans'>
                            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>


                        {Address.map((add, i) => (
                            <AddressContainer key={i} title={add.title} icon={add.icon} value={add.value} />
                        ))}

                        <div className='flex w-full border-t border-yellow-500 md:pt-2 pt-1 '>
                            {Socialapps.map((soc, i) => (
                                <MysocialContainer key={i} url={soc.url} icon={soc.icon} />
                            ))}
                        </div>

                    </div>
                    <div className='md:w-2/3 w-full h-full md:pt-8 pt-2 '>
                        <div className=' flex'>
                            <div className='w-1/2 flex '>
                                <input type="text" name="name" onChange={(e) => changeName(e.target.value)} placeholder='YOUR NAME' className="text-white  md:font-mono  placeholder-white  px-4 bg-gray-500 w-full md:p-2 p-1 rounded-3xl" />
                            </div>

                            <div className='w-1/2 flex md:ml-4 ml-1 '>
                                <input type="email" placeholder='YOUR EMAIL' onChange={(e) => changeEmail(e.target.value)} className="text-white  md:font-mono  placeholder-white  px-4 bg-gray-500 w-full md:p-2 p-1 rounded-3xl" />
                            </div>
                        </div>

                        <div className='w-full  md:my-6 my-2'>
                            <input type="text" placeholder='SUBJECT' onChange={(e) => changeSubject(e.target.value)} className="text-white  md:font-mono  placeholder-white  px-4 bg-gray-500 w-full md:p-2 p-1 rounded-3xl" />
                        </div>

                        <div className='w-full  md:my-6 my-2'>
                            <textarea type="text" onChange={(e) => changeMessage(e.target.value)} rows="10" cols="50" placeholder='MESSAGE' className="text-white  md:font-mono  placeholder-white  px-4 bg-gray-500 w-full md:p-2 p-1 rounded-3xl h-3/4" />
                        </div>
                        <div className='justify-center items-center self-center flex pt-0'>
                            <button onClick={submit} className="capitalize font-serif hover:bg-yellow-400 hover:text-black text-white focus:outline-none md:px-10 px-2 md:py-3 py-1  border border-yellow-400  rounded-l-full  rounded-r-full flex flex-row">
                                Submit
                            </button>
                        </div>

                    </div>


                </div>

            </Layout >

        </div>
    );
}

export default Contact;
