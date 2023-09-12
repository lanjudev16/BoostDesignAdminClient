import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaCog,
  FaMicrosoft,
  FaPaypal,
  FaPowerOff,
  FaProductHunt,
  FaShippingFast,
  FaShoppingCart,
} from "react-icons/fa";
import "./Main.css";
import female from "../../public/female.png";
import AOS from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Main = () => {
  AOS.init();
  const style = {
    darkSidebarBgColor: {
      backgroundColor: "#171A3B",
    },
    darkContentBgColor: {
      backgroundColor: "#030C1B",
    },
    darkDashboardLayout: {
      backgroundColor: "#192A46",
    },
  };

  return (
    <div className="fixed w-full h-full " style={style.darkDashboardLayout}>
      <div className="drawer drawer-mobile  rounded-2xl ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content " style={style.darkContentBgColor}>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary bg-transparent mt-3 ms-3 drawer-button lg:hidden"
          >
            <FaBars></FaBars>
          </label>
          <Outlet></Outlet>
        </div>
        <div
          className="drawer-side  scroll-container"
          style={style.darkSidebarBgColor}
        >
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 lg:w-[250px] w-3/4">
            <div className="text-center mx-auto">
             <Link to="/"> <FaPowerOff className="text-white text-center text-3xl mb-5"></FaPowerOff></Link>
            </div>
            <button className="bg-[#FFCF00] px-3 rounded-lg py-2 flex items-center justify-between text-[#2A4178]">
              <span>
                <FaMicrosoft className="text-xl font-bold"></FaMicrosoft>
              </span>{" "}
              <span>Dashboard</span>
            </button>

            <li>
              <NavLink className="text-[#A7B7DD] bg-transparent text-[14px] font-medium customFonts "></NavLink>
            </li>
            <li>
              <NavLink className="text-[#A7B7DD] bg-transparent text-[14px] font-medium customFonts " to='/orderList'>
                <span>
                  <FaShoppingCart></FaShoppingCart>
                </span>{" "}
                <span>Order Management</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[#A7B7DD] bg-transparent text-[14px] font-medium customFonts" to="/customerManage">
                <span>
                  <FaProductHunt></FaProductHunt>
                </span>{" "}
                <span>Customer Manage</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[#A7B7DD] bg-transparent text-[14px] font-medium customFonts " to="/transaction">
                <span>
                  <FaShippingFast></FaShippingFast>
                </span>{" "}
                <span>Transaction</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[#A7B7DD] bg-transparent text-[14px] font-medium customFonts " to="/payment">
                <span>
                  <FaPaypal></FaPaypal>
                </span>{" "}
                <span>Payments</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="text-[#A7B7DD] bg-transparent text-[14px] font-medium customFonts " to="/settings">
                <span>
                  <FaCog></FaCog>
                </span>{" "}
                <span>Settings</span>
              </NavLink>
            </li>
            <h2 className="text-white bg-transparent text-[14px] font-medium customFonts ">
              Customer Support
            </h2>
            <p className="text-xs text-[#A7B7DD] py-3 font-medium customFonts ">
              Ask you query , place requests or important issues. Our support
              team will contact 24/7 to you.{" "}
            </p>
            <button className="bg-[#15F3FC] px-3 rounded-lg py-2 flex items-center justify-between text-[#2A4178]">
              <span>
                <img src={female} alt="" />
              </span>
              <span>Connect Now</span>
            </button>
            <p className="text-xs text-[#A7B7DD] py-3 font-medium customFonts mt-5 ">
              Terms & Services <br /> Privacy Policy
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
