import { Link } from "react-router-dom";
import errorLogo from "../../assets/error5.png"

const ErrorPage = () => {
    return (
        <div className="  md:flex justify-around h-[100vh] items-center w-11/12 mx-auto gap-5">
            <div className="flex-1 text-center mt-10 mb-10 md:mb-0 md:mt-0">
                <h1 className="text-5xl font-bold text-center mb-2">404</h1>
                <p className="text-base font-bold">We couldn't find the page you are looking for.</p>
                <Link to="/">
                    <button className="normal-case btn mt-2 btn-outline">Go back to homepage</button>
                </Link>
            </div>
            <div className="flex-1">
                <img className=" w-3/5 md:w-4/5 lg:w-3/5 mx-auto" src={errorLogo} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;