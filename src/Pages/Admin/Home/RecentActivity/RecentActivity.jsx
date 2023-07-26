import React from "react";
import { FaCheck } from "react-icons/fa";
import './RecentActivity.css'
const RecentActivity = () => {
  return (
    <div data-aos="fade-right"
    data-aos-duration="3000">

      <div className="bg-[#16193A]  mt-5 rounded-2xl py-3 customFonts">
        
        <h1 className="font-bold text-[18px] text-white px-5 mb-10">Recent Activity</h1>
        <div className="flex justify-between items-center py-1 px-5">
          <h2 className="text-[14px] text-[#9FA2B4] flex items-center gap-2"><span className= "rounded-full px-1 py-1 bg-[#3751FF]"><FaCheck className="text-white"></FaCheck></span><span className="text-white">Confirm order update</span></h2>
          <button className="text-white bg-[#FEC400] uppercase px-5 rounded-md py-[3px] font-semibold text-[11px]">
          Urgent
          </button>
        </div>
        <hr className="h-[1px] bg-white w-full my-3" />
        <div className="flex justify-between items-center py-1 px-5">
          <h2 className="text-[14px] text-[#9FA2B4] flex items-center gap-2"><span className= "rounded-full px-1 py-1 bg-[#FF0303]"><FaCheck className="text-transparent"></FaCheck></span><span className="text-white customFonts">Finish shipping update</span></h2>
          <button className="text-white bg-[#FEC400] uppercase px-5 rounded-md py-[3px] font-semibold text-[11px] customFonts">
          Urgent
          </button>
        </div>
        <hr className="h-[1px] bg-white w-full my-3" />
        <div className="flex justify-between items-center py-1 px-5">
          <h2 className="text-[14px] text-[#9FA2B4] flex items-center gap-2"><span className= "rounded-full px-1 py-1 border-2 border-[#ddd]"><FaCheck className="text-transparent"></FaCheck></span><span className="text-white customFonts">Create new order</span></h2>
          <button className="text-white bg-[#29CC97] uppercase px-5 rounded-md py-[3px] font-semibold text-[11px] customFonts">
          New
          </button>
        </div>
        <hr className="h-[1px] bg-white w-full my-3" />
        <div className="flex justify-between items-center py-1 px-5">
          <h2 className="text-[14px] text-[#9FA2B4] flex items-center gap-2"><span className= "rounded-full px-1 py-1 bg-[#3751FF]"><FaCheck className="text-white"></FaCheck></span><span className="text-white">Update payment report</span></h2>
          <button className="text-[#9FA2B4] bg-[#fff] uppercase px-5 rounded-md py-[3px] font-semibold text-[11px]">
          Default
          </button>
        </div>

      </div>
    </div>
  );
};

export default RecentActivity;
