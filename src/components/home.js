import logo from './../img/logo.JPG';
import Layout from './Layout'

function Home() {
    return (
        <Layout>
            <div className='min-w-full flex  flex-wrap md:flex-nowrap md:pr-24 pr-10 '>
                <div className='md:w-2/5 h-96 md:h-auto   w-full justify-center items-center  hidden md:flex '>
                    <img src={logo} alt="" className='rounded-md h-3/4 w-full object-cover relative z-0 ' />
                </div>
                <div className='flex md:hidden  justify-center items-center w-full pt-20 pb-4 '>
                    <div className=' rounded-full w-22 h-22 border-4 border-yellow-400'>
                        <img src={logo} alt="" className='rounded-full h-20 w-20 object-cover  ' />
                    </div>
                </div>
                <div className=' flex flex-row w-full'>
                    <div className="flex text-white h-full justify-center items-center text-center ">
                        <div>
                            <p className=' md:text-5xl text-2xl font-bold text-yellow-400 '>I'M KENNEDY MAKOKHA</p>
                            <p className='text-italic md:py-5 py-2'><i>Creative Designer & Developer located in Nairobi-Kenya </i></p>

                            <p className='text-justify md:mx-10 mx-2'>I'm a Kenyan based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me</p>
                            <div className='justify-center items-center self-center flex pt-10'>
                                <button className="capitalize  hover:bg-yellow-400 text-white focus:outline-none px-10 py-3 my-2 border border-yellow-400 order-l rounded-l-full border-r rounded-r-full flex flex-row">
                                    More About Me
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
