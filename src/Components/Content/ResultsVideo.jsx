

function ResultsVideo() {
    return (
        <>
         <div className=' flex flex-col items-center font-[poppins] pb-20 bg-linear-gradient text-white '>
            <h1 className='text-2xl my-2 md:text-4xl  font-bolder text-center w-full'>Smooth And Clear Shooting Results</h1>
            <p className='text-xs tracking-wider mb-6 text-center'>These flagship technologies open a world of cinematic possibilities  by reducing corners shake and <br/>ensuring smooth ultra HD vides.</p>
            <video src="" className='bg-white w-[1000px] h-[400px] rounded-[50px] '></video>
            <div className="flex items-center gap-6 mt-8 mb-4 border-b-2 border-lime-800 pl-4  ">
                <p>RockeySteady 2.0</p>
                <div className="border-b-2 border-lime-400 py-2 pr-4 rounded-sm">
                    <p>HorizonSteady</p>
                </div>
            </div>
            <p>RockSteady actively reduce camera shake in real-time</p>
         </div>
        </>
    )
}

export default ResultsVideo
