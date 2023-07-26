import React from "react";
import { FaCaretDown, FaCaretUp, FaSearch } from "react-icons/fa";
import image1 from "../../../../../public/TopNav/notification.png";
import image2 from "../../../../../public/TopNav/message.png";
import image3 from "../../../../../public/TopNav/user.png";
const TopNav = () => {
  return (
    <div className="grid lg:grid-cols-5 justify-between  items-center" data-aos="fade-down"
    data-aos-duration="3000">
      <div className="col-span-4 flex lg:flex-row flex-col items-center">
        <h2 className="text-[28px] font-semibold text-white">$ 45,365.00</h2>
        <h2 className="text-[#FF4588] flex items-center text-xs font-medium ps-2">
          <span>
            <FaCaretDown></FaCaretDown>
          </span>{" "}
          <span>$1,294</span>
        </h2>
        <h2 className="text-[#17B831] flex items-center text-xs font-medium ps-2">
          <span>
            <FaCaretUp></FaCaretUp>
          </span>{" "}
          <span>$1,294</span>
        </h2>
        <div className="relative">
          <span className="absolute top-1/2 translate-y-[-50%] left-[40px] text-white">
            <FaSearch></FaSearch>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="ms-5 bg-[#323862] outline-none lg:px-12 ps-10 py-2 rounded-md text-white text-[18px] customFont lg:pe-60"
          />
        </div>
      </div>
      <div className="flex items-center gap-5  flex-row-reverse lg:mx-0 ms-[110px]">
        <img src={image3} alt="" />
        <img src={image1} alt="" />
        <img src={image2} alt="" />
      </div>
    </div>
  );
};

export default TopNav;
