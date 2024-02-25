import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
const Root = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;