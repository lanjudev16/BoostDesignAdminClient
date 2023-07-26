import React from "react";
import { FaAngleLeft, FaAngleRight, FaDotCircle, FaEllipsisV, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderList = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between text-[#A7B7DD] customFonts">
        <h1>Orders</h1>
        <button className="bg-[#15F3FC] text-[#2A4178] rounded-md px-5 py-3">
          New Orders
        </button>
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

      <div className="overflow-x-auto w-full bg-[rgb(23,26,59)] rounded-2xl p-5">
        <table className="text-left table w-full  customFonts">
          <thead>
            <tr className="text-white border-b-[1px]">
              <th className="ps-5">Number</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Paid</th>
              <th>Status</th>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-white">
              <td className="py-3 ps-5">#3201</td>
              <td className="py-3">June 26, 2021</td>
              <td className="py-3">
                <Link>Jessica Moore</Link>
              </td>
              <td className="py-3">
                {" "}
                <button className="text-white bg-[#FEC400] uppercase px-5 rounded-md py-[3px] font-semibold text-[11px]">
                  Yes
                </button>
              </td>
              <td className="py-3">
                {" "}
                <button className="text-white bg-[#29CC97] uppercase px-5 rounded-md py-[3px] font-semibold text-[11px] customFonts">
                  New
                </button>
              </td>
              <td className="py-3">3 items</td>
              <td className="py-3">$200.00</td>
            </tr>
            <tr className="text-white">
              <td className="py-3 ps-5">#3201</td>
              <td className="py-3">June 26, 2021</td>
              <td className="py-3">
                <Link>Jessica Moore</Link>
              </td>
              <td className="py-3">
                {" "}
                <button className="text-white bg-[#FEC400] uppercase px-5 rounded-md py-[3px] font-semibold text-[11px]">
                  Yes
                </button>
              </td>
              <td className="py-3">
                {" "}
                <button className="text-white bg-[#29CC97] uppercase px-5 rounded-md py-[3px] font-semibold text-[11px] customFonts">
                  New
                </button>
              </td>
              <td className="py-3">3 items</td>
              <td className="py-3">$200.00</td>
            </tr>
            <tr className="text-white">
              <td className="py-3 ps-5">#3201</td>
              <td className="py-3">June 26, 2021</td>
              <td className="py-3">
                <Link>Jessica Moore</Link>
              </td>
              <td className="py-3">
                {" "}
                <button className="text-white bg-[#FEC400] uppercase px-5 rounded-md py-[3px] font-semibold text-[11px]">
                  Yes
                </button>
              </td>
              <td className="py-3">
                {" "}
                <button className="text-white bg-[#29CC97] uppercase px-5 rounded-md py-[3px] font-semibold text-[11px] customFonts">
                  New
                </button>
              </td>
              <td className="py-3">3 items</td>
              <td className="py-3">$200.00</td>
            </tr>
            <tr className="text-white">
              <td className="py-3 ps-5">#3201</td>
              <td className="py-3">June 26, 2021</td>
              <td className="py-3">
                <Link>Jessica Moore</Link>
              </td>
              <td className="py-3">
                {" "}
                <button className="text-white bg-[#FEC400] uppercase px-5 rounded-md py-[3px] font-semibold text-[11px]">
                  Yes
                </button>
              </td>
              <td className="py-3">
                {" "}
                <button className="text-white bg-[#29CC97] uppercase px-5 rounded-md py-[3px] font-semibold text-[11px] customFonts">
                  New
                </button>
              </td>
              <td className="py-3">3 items</td>
              <td className="py-3">$200.00</td>
            </tr>
            <tr className="text-white ">
              <td className="py-3 ps-5">#3201</td>
              <td className="py-3">June 26, 2021</td>
              <td className="py-3">
                <Link>Jessica Moore</Link>
              </td>
              <td className="py-3">
                {" "}
                <button className="text-white bg-[#FEC400] uppercase px-5 rounded-md py-[3px] font-semibold text-[11px]">
                  Yes
                </button>
              </td>
              <td className="py-3">
                {" "}
                <button className="text-white bg-[#29CC97] uppercase px-5 rounded-md py-[3px] font-semibold text-[11px] customFonts">
                  New
                </button>
              </td>
              <td className="py-3">3 items</td>
              <td className="py-3">$200.00</td>
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
          <div className="flex items-center gap-1">
            <button className="join-item btn"><FaAngleLeft></FaAngleLeft></button>
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn"><FaAngleRight></FaAngleRight></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
