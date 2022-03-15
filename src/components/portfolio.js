import Layout from './Layout'
import BreadCramp from './breadcramp'
import { projectArray } from '../data'
import { useEffect, useRef, useState } from 'react'

function About() {
    const [mobile, setMobile] = useState(false)
    const [web, setWeb] = useState([])
    const [api, setApi] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [project, setProject] = useState({});
    const [all, setAll] = useState([])
    const [data, setData] = useState([])




    const changeStack = (name) => {
        const newdata = data.filter(project => project.category === name)
        setData(newdata)
    }

    const modelShow = (data) => {
        setProject(data)
        setShowModal(true)
    }

    const Meprojects = (props) => (

        <div class="md:w-2/6 w-full  h-full" onClick={() => modelShow(props.project)}>
            <div class="md:h-52 h-1/2 rounded-l-sm group rounded-r-sm m-1  relative z-0">
                <img src={props.project.image} alt='' className=' h-60 object-contain ' />
                <div class="absolute inset-0 md:h-52 h-1/2 max-h-52 mt-8 text-gray-50  hidden group-hover:flex justify-center items-center z-10 bg-black opacity-90">
                    <p class="text-2xl font-bold px-5 ">{props.project.name}</p>
                </div>
            </div>
        </div>

    )
    useEffect(() => {
        // const data = 
        setData(projectArray)

    }, [])

    return (
        <div className='w-screen'>
            <Layout>
                <div className='md:min-w-full md:pr-24 pr-10 min-w-full md:mt-0 mt-14 mb-96'>
                    <BreadCramp name="Portfolio" b1="My" b4="-" b2="Portfolio" />

                    <div className='w-full flex flex-col  my-10'>
                        <div className=' gap-x-1 flex text-white justify-center items-center font-sans font-bold text-md '>
                            <button className='shadow-lg px-4 py-1 rounded-sm w-28 bg-gray-700' onClick={() => changeStack("all")}>All</button>
                            <button className='shadow-lg px-4 py-1 rounded-sm w-28 bg-gray-700' onClick={() => changeStack("api")}>Api</button>
                            <button className='shadow-lg px-4 py-1 rounded-sm w-28 bg-gray-700' onClick={() => changeStack("mobile")}>Mobile</button>
                            <button className='shadow-lg px-4 py-1 rounded-sm w-28 bg-gray-700' onClick={() => changeStack("web")}>Web</button>
                            <button className='shadow-lg px-4 py-1 rounded-sm w-28 bg-gray-700' onClick={() => changeStack("desk")}>Desktop</button>
                        </div>
                        <div className='w-full flex flex-wrap md:h-full h-auto '>
                            {data.map((project, i) => (
                                <Meprojects project={project} key={i} />
                            ))}
                        </div>

                    </div>

                </div>

                {showModal ? (
                    <>
                        <div
                            className=" overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-5xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <div className='flex justify-center items-center w-full'>
                                            <h3 className="text-2xl font-semibold text-center">
                                                {project.name}
                                            </h3>
                                        </div>

                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">

                                        <div className="flex flex-wrap pr-16 w-screen">
                                            <div className="flex flex-wrap  w-3/4 "  >
                                                <p className='text-black font-bold font-thing'>{project.desc}</p>
                                            </div>
                                        </div>

                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200   rounded-b">
                                        <button
                                            className="text-white background-transparent bg-gradient-to-b   font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <a
                                            href={project.url} target='_blank' rel="noreferrer"
                                            className="text-yellow-500 background-transparent  bg-gradient-to-b  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"

                                        onClick={() => setShowModal(false)}
                                        >
                                            View app
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </Layout >
            <div className='w-full overflow-hidden md:h-full min-h-screen  bg-gradient-to-b to-gray-800 from-black px-20 py-0'>




            </div>
        </div>
    );
}

export default About;
