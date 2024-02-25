import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../../assets/logo4.svg"
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navLinks = <div id="liCollection" className="md:flex gap-5">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/addProduct"><li>Add Products</li></NavLink>
        <NavLink to="/cart"><li>My Cart</li></NavLink>
        {/* <NavLink to="/login"><li>Login</li></NavLink> */}
        <NavLink to="/register"><li>Register</li></NavLink>
    </div>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast("Logout Successfully!")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="w-11/12 mx-auto mb-3">
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start">
                        <div className="dropdown md:hidden">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <div className="flex items-center ">
                            <img className="w-[100px]" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="navbar-center hidden md:flex md:ml-[-50px]  lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 border-2 border-gray-300 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 border z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user?.displayName}
                                        </a>
                                    </li>
                                    <li onClick={handleLogOut}><a>Logout</a></li>
                                </ul>
                            </div> :
                                <NavLink to="/login">
                                    <button>Login</button>
                                </NavLink>
                        }
                    </div>
                </div>
        </div>
    );
};

export default Navbar;