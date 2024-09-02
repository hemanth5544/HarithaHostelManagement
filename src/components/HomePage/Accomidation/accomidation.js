
import React from "react";

const WhomWeAccomidate = () => {
    return(
        <div className="py-5    ">
            <h2 className="text-4xl font-bold py-6 text-center text-white mb-8 pt-12">We Accomidate</h2>
            <div className="flex flex-row justify-around">
                 <div className="space-y-4 items-center flex flex-col">
                    <img src="/service_images/icons/WorkingWomen.png"alt="working women" className="h-[90px] w-[100px]"/>
                    <p className="text-md mt-2 text-white">Working Women</p>
                 </div>
                 <div className="space-y-4 items-center flex flex-col">
                    <img src="/service_images/icons/Sudents.png"alt="working women" className="h-[90px] w-[100px]"/>
                    <p className="text-md mt-2 text-white">Students</p>
                 </div>
                 <div className="space-y-4 items-center flex flex-col">
                    <img src="/service_images/icons/Travellers.png"alt="working women" className="h-[90px] w-[100px]"/>
                    <p className="text-md mt-2 text-white">Travellers</p>
                 </div> 
                 <div className="space-y-4 items-center flex flex-col">
                    <img src="/service_images/icons/JobSeekers.png"alt="working women" className="h-[90px] w-[100px]"/>
                    <p className="text-md mt-2 text-white">JobSeekers</p>
                 </div>
            </div>        
        </div>
    )
}

export default WhomWeAccomidate;