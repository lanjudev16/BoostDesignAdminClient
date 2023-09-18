import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-base-100 shadow-md">
            <div className="navbar lg:w-[1140px] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Product</a></li>
                            <li><Link to="/admin">Admin</Link></li>
                        </ul>
                    </div>
                    <a className=" normal-case text-xl">
                        <img className="h-[70px] w-[70px] object-contain" src="https://bsfmstu.ac.bd/wp-content/uploads/2019/08/logo.png" alt="" />
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Product</a></li>
                        <li><Link to="/admin">Admin</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;