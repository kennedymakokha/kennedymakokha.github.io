import Layout from './Layout'
import Larn from './../img/projects/learnnia.png'
import Vig from './../img/projects/viglant.png'
import Inv from './../img/projects/Invent.png'
import Inv2 from './../img/projects/invent2.png'
import BreadCramp from './breadcramp'
function Meprojects(props) {
    return (
        <div className=' md:w-2/6 w-full  h-full '>
            <div className='md:h-52 h-1/2 rounded-l-sm  rounded-r-sm m-1 '>
                <img src={props.Larn} alt='' className=' object-contain' />
            </div>


        </div>
    )
}
function About() {


    return (
        <div className='w-screen'>
            <Layout>
                <div className='md:min-w-full md:pr-24 pr-10 min-w-full md:mt-0 mt-14 mb-96'>
                    <BreadCramp name="Portfolio" b1="My" b4="-" b2="Portfolio" />
                
                    <div className='w-full flex flex-wrap md:h-full h-auto my-10'>
                        <Meprojects Larn={Larn} />

                        <Meprojects Larn={Vig} />
                        <Meprojects Larn={Inv2} />
                        <Meprojects Larn={Inv} />


                    </div>
                </div>

            </Layout >

        </div>
    );
}

export default About;
