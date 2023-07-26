import React from "react";
import {
  FaSearch,
  FaAngleLeft,
  FaAngleRight,
  FaTrash,
  FaEdit,
  FaLock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import person from "../../../../public/person.jpeg";
const CustomerManage = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between text-[#A7B7DD] customFonts">
        <h1>Customers</h1>
      </div>
      <div className="bg-[#16193A]  my-5 rounded-2xl py-3 customFonts ">
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
              <th>Name</th>
              <th>Phone Number</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={person} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>+8801629977308</td>
              <td>7/26/2023</td>
              <td className="flex items-center gap-3">
                <button className="bg-[#15F3FC] text-[#214178] px-2 py-3 text-2xl rounded-md">
                  <FaEdit></FaEdit>
                </button>
                <button className="bg-[#BE29F8] text-[#2A4178] px-2 py-3 text-2xl rounded-md">
                  <FaLock></FaLock>
                </button>
                <button className="bg-[#FFCF00] text-[#2A4178] px-2 py-3 text-2xl rounded-md">
                  <FaTrash></FaTrash>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={person} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>+8801629977308</td>
              <td>7/26/2023</td>
              <td className="flex items-center gap-3">
                <button className="bg-[#15F3FC] text-[#214178] px-2 py-3 text-2xl rounded-md">
                  <FaEdit></FaEdit>
                </button>
                <button className="bg-[#BE29F8] text-[#2A4178] px-2 py-3 text-2xl rounded-md">
                  <FaLock></FaLock>
                </button>
                <button className="bg-[#FFCF00] text-[#2A4178] px-2 py-3 text-2xl rounded-md">
                  <FaTrash></FaTrash>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={person} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>+8801629977308</td>
              <td>7/26/2023</td>
              <td className="flex items-center gap-3">
                <button className="bg-[#15F3FC] text-[#214178] px-2 py-3 text-2xl rounded-md">
                  <FaEdit></FaEdit>
                </button>
                <button className="bg-[#BE29F8] text-[#2A4178] px-2 py-3 text-2xl rounded-md">
                  <FaLock></FaLock>
                </button>
                <button className="bg-[#FFCF00] text-[#2A4178] px-2 py-3 text-2xl rounded-md">
                  <FaTrash></FaTrash>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={person} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>+8801629977308</td>
              <td>7/26/2023</td>
              <td className="flex items-center gap-3">
                <button className="bg-[#15F3FC] text-[#214178] px-2 py-3 text-2xl rounded-md">
                  <FaEdit></FaEdit>
                </button>
                <button className="bg-[#BE29F8] text-[#2A4178] px-2 py-3 text-2xl rounded-md">
                  <FaLock></FaLock>
                </button>
                <button className="bg-[#FFCF00] text-[#2A4178] px-2 py-3 text-2xl rounded-md">
                  <FaTrash></FaTrash>
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
  );
};

export default CustomerManage;
