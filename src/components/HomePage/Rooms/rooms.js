import React from "react";
import { Carousel } from "antd";
import FacilitiesPart from "../Facilities/facilities";
import WhomWeAccomidate from "../Accomidation/accomidation";

const Rooms = () => {
  return (
    <div className="bg-gradient-to-r from-[#070707] via-[#041256] to-[#041256]">
      <div className="px-12">
      <h2 className="py-12 text-center font-bold text-4xl text-white">Rooms</h2>
      <div className="grid grid-cols-4 gap-8">
        <div className="space-y-4 col-span-2">
        <Carousel autoplay>
          <img
            src="/service_images/TwoSharingRoom.jpg"
            alt="Two Sharing Room"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
         <img
            src="/service_images/TwoSharingRoom.jpg"
            alt="Two Sharing Room"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
          <img
            src="/service_images/TwoSharingRoom.jpg"
            alt="Two Sharing Room"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
           <img
            src="/service_images/TwoSharingRoom.jpg"
            alt="Two Sharing Room"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
       </Carousel>
          <p className="text-center font-semibold text-white">Two Sharing Rooms - ₹13,000/bed</p>
        </div>
        <div className="space-y-4 col-span-2">
          <Carousel autoplay>
          <img
            src="/service_images/FourSharingRoom.jpg"
            alt="Three Sharing Room"
            className="w-full  h-80 object-cover rounded-lg shadow-md"
          />
          <img
            src="/service_images/FourSharingRoom.jpg"
            alt="Three Sharing Room"
            className="w-full  h-80 object-cover rounded-lg shadow-md"
          />
          <img
            src="/service_images/FourSharingRoom.jpg"
            alt="Three Sharing Room"
            className="w-full  h-80 object-cover rounded-lg shadow-md"
          />
          <img
            src="/service_images/FourSharingRoom.jpg"
            alt="Three Sharing Room"
            className="w-full  h-80 object-cover rounded-lg shadow-md"
          />
          </Carousel>
          <p className="text-center font-semibold text-white">Three Sharing Rooms - ₹9,000/bed</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-8">
        <div className="space-y-4 col-span-2">
          <Carousel autoplay>
          <img
            src="/service_images/ThreeSharingImage4.jpeg"
            alt="Three Sharing Room"
            className="w-full  h-80 object-cover rounded-lg shadow-md"
          />
          <img
            src="/service_images/ThreeSharingImage4.jpeg"
            alt="Three Sharing Room"
            className="w-full  h-80 object-cover rounded-lg shadow-md"
          />
          <img
            src="/service_images/ThreeSharingImage4.jpeg"
            alt="Three Sharing Room"
            className="w-full  h-80 object-cover rounded-lg shadow-md"
          />
          <img
            src="/service_images/ThreeSharingImage4.jpeg"
            alt="Three Sharing Room"
            className="w-full  h-80 object-cover rounded-lg shadow-md"
          />
          </Carousel>
          <p className="text-center font-semibold text-white">Four Sharing Rooms - ₹8,000/bed</p>
        </div>
        <div className="space-y-4 col-span-2">
            <Carousel autoplay>
            <img
            src="/service_images/FiveSharingRoom.jpeg"
            alt="Three Sharing Room"
            className="w-full  h-80 object-cover rounded-lg shadow-md"
          />
          <img
            src="/service_images/FourSharingRoom.jpg"
            alt="Three Sharing Room"
            className="w-full  h-80 object-cover rounded-lg shadow-md"
          />
          <img
            src="/service_images/FourSharingRoom.jpg"
            alt="Three Sharing Room"
            className="w-full  h-80 object-cover rounded-lg shadow-md"
          />
          <img
            src="/service_images/FourSharingRoom.jpg"
            alt="Three Sharing Room"
            className="w-full  h-80 object-cover rounded-lg shadow-md"
          />
            </Carousel>
          <p className="text-center font-semibold text-white">Five Sharing Rooms - ₹7,000/bed</p>
        </div>
      </div>
      </div>
      <FacilitiesPart/>
      <WhomWeAccomidate/>
    </div>
  );
};

export default Rooms;
