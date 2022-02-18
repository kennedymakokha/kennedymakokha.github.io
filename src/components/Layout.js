import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'

function ButtonApp(props) {
    return (
        <div className="justify-end items-center flex group pt-8">
            <Link to={props.link ? props.link : '/'}>  <button className="capitalize text-center justify-center text-white  invisible w-20 group-hover:visible bg-yellow-400   py-2   rounded-l-full   items-center flex flex-row">
                {props.title}
            </button></Link>
            <Link to={props.link ? props.link : '/'}>  <div className='w-10 h-10 justify-center text-black group-hover:text-white  bg-yellow-400  items-center group-hover:rounded-l-none flex rounded-full'>
                {props.icon}
            </div></Link>

        </div>
    )
}

function MenuItem(props) {
    return (
        <div className="px-1 py-1 ">
            <Menu.Item>
                {({ active }) => (
                    <button

                        className={`${active ? ' flex justify-between text-xl text-white' : 'text-yellow-400 flex justify-between'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >

                        <Link to={props.url ? props.url : "/"} className="hover:text-yellow-400 text-white  font-serif hover:no-underline text"> {props.name}</Link>
                        {props.icon}
                    </button>
                )}
            </Menu.Item>
        </div>

    )
}
function Home(props) {
    return (
        <div className='h-screen w-screen bg-black '>
            <div className="  bg-transparent flex md:hidden fixed text-white px-10 pt-5 ">

                <Menu as="div" className=" inline-block relative  text-left">
                    <div>

                        <Menu.Button className="inline-flex justify-between w-full px-4 py-2 font-medium text-white  bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <svg class="w-10 h-10 bg-gray-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute w-40 mt-2 origin-top-right bg-black divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <MenuItem name="Home" icon={<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>} />
                            <MenuItem name="About Me" url="/about" icon={<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>} />
                            <MenuItem name="Portfolio" url="/portfolio" icon={<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>} />
                            <MenuItem name="Contact me" url="/contact-me" icon={<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clip-rule="evenodd"></path></svg>} />

                        </Menu.Items>

                    </Transition>
                </Menu>
            </div>
            <div className="w-full md:h-full h-auto  bg-gradient-to-b from-gray-800 to-black  pl-10 flex flex-row" >
                <div className='flex w-full md:p-10 p-2' >

                    {props.children}
                    <div className="  relative z-0 right-40  md:flex hidden pt-40  flex-col ">
                        <ButtonApp title="Home" link="/" icon={<svg className="w-6 h-6   text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>} />
                        <ButtonApp title="About" link="/about" icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>} />
                        <ButtonApp title="Portfolio" link="/portfolio" icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>} />
                        <ButtonApp title="Contact" link="/contact-me" icon={<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"></path></svg>} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
