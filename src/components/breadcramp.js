

function BreadCramp(props) {


    return (
        <div class="w-full md:h-1/3 h-30 pb-0  flex justify-center items-center ">
            <div class=" w-full h-full relative z-0 justify-center items-center">
                <div className="flex justify-center items-center ">
                    <p class="text-gray-700 text-bold bd-red-100 font-bold md:text-7xl text-3xl uppercase ">{props.name}</p>
                </div>

                <div class="absolute inset-0 md:top-14  top-4  flex justify-center items-center z-10">
                    <p class="md:text-2xl font-bold text-yellow-400 uppercase">{props.b1} <span className="text-white">{props.b2}</span> {props.b3}</p>
                </div>
            </div>
        </div>
    );
}

export default BreadCramp;