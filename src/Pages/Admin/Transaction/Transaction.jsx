import React from "react";
import {
  FaEdit,
  FaLock,
  FaSearch,
  FaTrash,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import person from "../../../../public/person.jpeg";
const Transaction = () => {
  return (
    <div>
      <div className="p-5">
        <div className="flex items-center justify-between text-[#A7B7DD] customFonts">
          <h1>Customers</h1>
        </div>
        <div className="bg-[#16193A]  my-5 rounded-2xl py-3 customFonts">
          <div className="relative">
            <span className="absolute top-1/2 translate-y-[-50%] left-[40px] text-white">
              <FaSearch></FaSearch>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="mx-[2%] bg-[#323862] outline-none  w-[96%] px-10 py-2 rounded-md text-white text-[18px] customFont lg:pe-60"
            />
          </div>
        </div>

        <div className="overflow-x-auto bg-[#16193A] rounded-xl">
          <table className="table  w-full text-white customFonts">
            {/* head */}
            <thead>
              <tr className="border-b-2">
                <th>Id</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Method</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#5089</td>
                <td>Joseph Wheeler</td>
                <td>6 April, 2023</td>
                <td>$2,564</td>
                <td>CC</td>
                <td className="text-[#FFCF00] font-semibold">Pending</td>
                <td>
                  <button className="text-white bg-[#29CC97] uppercase px-5 rounded-md py-[10px] font-semibold text-[11px] customFonts">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td>#5089</td>
                <td>Joseph Wheeler</td>
                <td>6 April, 2023</td>
                <td>$2,564</td>
                <td>CC</td>
                <td className="text-[#FFCF00] font-semibold">Pending</td>
                <td>
                  <button className="text-white bg-[#29CC97] uppercase px-5 rounded-md py-[10px] font-semibold text-[11px] customFonts">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td>#5089</td>
                <td>Joseph Wheeler</td>
                <td>6 April, 2023</td>
                <td>$2,564</td>
                <td>CC</td>
                <td className="text-[#FFCF00] font-semibold">Pending</td>
                <td>
                  <button className="text-white bg-[#29CC97] uppercase px-5 rounded-md py-[10px] font-semibold text-[11px] customFonts">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td>#5089</td>
                <td>Joseph Wheeler</td>
                <td>6 April, 2023</td>
                <td>$2,564</td>
                <td>CC</td>
                <td className="text-[#FFCF00] font-semibold">Pending</td>
                <td>
                  <button className="text-white bg-[#29CC97] uppercase px-5 rounded-md py-[10px] font-semibold text-[11px] customFonts">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td>#5089</td>
                <td>Joseph Wheeler</td>
                <td>6 April, 2023</td>
                <td>$2,564</td>
                <td>CC</td>
                <td className="text-[#FFCF00] font-semibold">Pending</td>
                <td>
                  <button className="text-white bg-[#29CC97] uppercase px-5 rounded-md py-[10px] font-semibold text-[11px] customFonts">
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between w-full">
            <div className="flex  items-center  gap-5 ps-3 my-5">
              <h2 className="text-white">Showing</h2>
              <select className="text-back rounded-md outline-none">
                <option className="text-black" value="10" selected>
                  10
                </option>
                <option className="text-black" value="15">
                  15
                </option>
                <option className="text-black" value="20">
                  20
                </option>
                <option className="text-black" value="25">
                  25
                </option>
                <option className="text-black" value="30">
                  30
                </option>
              </select>
              <p className="text-white">of 50</p>
            </div>
            <div className="flex items-center gap-1 pe-3">
              <button className="join-item btn">
                <FaAngleLeft></FaAngleLeft>
              </button>
              <button className="join-item btn">1</button>
              <button className="join-item btn btn-active">2</button>
              <button className="join-item btn">
                <FaAngleRight></FaAngleRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
