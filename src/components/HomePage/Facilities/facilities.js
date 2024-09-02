import React from "react";

const ServiceCard = ({ imgSrc, title, description }) => (
    <div className="text-center flex flex-col justify-center items-center  p-6 rounded-xl shadow-lg">
        <div className="w-6/7 h-5/6">
            <img src={imgSrc} alt={title} className="w-full h-full object-cover rounded-lg"/>
        </div>
        <h2 className="text-xl font-bold mt-4 text-white">{title}</h2>
        <p className="text-md mt-2 text-gray-300">{description}</p>
    </div>
);

const FacilitiesPart = () => {
    const services = [
        {
            imgSrc: "/service_images/Wifi.jpg",
            title: "Wifi",
            description: "We provide the best wifi facility with 200Mbps speed"
        },
        {
            imgSrc: "/service_images/Geyser.png",
            title: "Geaser",
            description: "We provide the best Geaser facility anytime you can use."
        },
        {
            imgSrc: "/service_images/Locker.png",
            title: "Locker Facility",
            description: "Each person will get different cuboards with the key lock facility."
        },
        {
            imgSrc: "/service_images/Refrigirator.png",
            title: "Refrigirator",
            description: "We provide the best Refrigirator facility in each floor."
        },
        {
            imgSrc: "/service_images/WaterFacility.jpeg",
            title: "Water Facility",
            description: "We provode purifirs drinking water and bathing 24/7 hot and cold water"
        },  
        {
            imgSrc: "/service_images/WashingMachine.avif",
            title: "Washing Maching",
            description: "We provide the best Washing Machine facility You can at any time."
        },
        {
            imgSrc: "/service_images/Cleaning.png",
            title: "Daily Cleaning",
            description: "Daily Cleaning will be there one day washrooms and one day floor cleaning"
        },
        {
            imgSrc: "/service_images/CCTV.png",
            title: "Security",
            description: "There are 12 cctv cameras and security guard"
        },
    ];

    return (
        <div className="mx-auto container px-4">
            <h2 className="text-4xl font-bold pb-6 pt-16 text-center text-white">Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        imgSrc={service.imgSrc}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default FacilitiesPart;
