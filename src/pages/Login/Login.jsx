import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsGoogle,BsGithub } from "react-icons/bs";

const Login = () => {
    const {login,googleLogIn,githubLogIn} = useContext(AuthContext)
    const { state } = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const handleLoginUser = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                if (result.user) {
                    toast("Login Successfully!")
                    navigate(state)
                }
            })
            .catch(error => {
                toast(error.message)
            })
    }
    const socialLogin = media => {
        media()
        .then(result =>{
            if(result.user){
                toast("Login Successfully")
                navigate(state)
            }
        })
        .catch(error => {
            toast(error.message)
        })
    }
    return (
        <div className="lg:w-3/4 mx-auto mb-10">
            {/* login form */}
            <h1 className="text-2xl font-bold text-center">Login Now!</h1>
            <form onSubmit={handleLoginUser} className="w-3/4 md:w-3/5 lg:w-1/2 mx-auto mt-10">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    <p className="mt-5">Don't have account? please <Link className="text-blue-800" to="/register">Register</Link></p>
                </div>
                {/* social login */}
                <div>
                    <div className="flex items-center gap-2 justify-center mt-3">
                        <div className="w-full h-[1px] bg-gray-500"></div>
                        <p>Or</p>
                        <div className="w-full h-[1px] bg-gray-500"></div>
                    </div>
                    <div className="mt-5 lg:flex gap-5">
                        <div className="flex flex-1 justify-center">
                            <button onClick={() => socialLogin(googleLogIn)} className="btn w-full btn-outline normal-case mb-3">
                               <BsGoogle></BsGoogle>
                                Google
                            </button>
                        </div>
                        <div className="flex flex-1 justify-center">
                            <button onClick={() => socialLogin(githubLogIn) } className="btn w-full normal-case  btn-outline">
                                <BsGithub></BsGithub>
                                Github
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;