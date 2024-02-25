import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser,profileUpdate } = useContext(AuthContext)
    const handleCreateUser = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        if (password.length < 6) {
            return toast("password must be 6 character")
        }
        if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
            return toast("Password must contain uppercase letters and special characters")
        }
        createUser(email, password)
            .then(result => {
                if (result.user) {
                    toast("Register Successfully!")
                    profileUpdate(name,photo)
                    .then(() => {
                    })
                    .catch(() => {
                    })
                }
            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (
        <div className="lg:w-3/4 mx-auto mb-10">
            <h1 className="text-2xl font-bold text-center">Register Now!</h1>
        {/* form */}
            <form onSubmit={handleCreateUser} className="w-3/4 md:w-3/5 lg:w-1/2 mx-auto mt-10">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Username" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    <p className="mt-5">Already have account? Please <Link className="text-blue-800" to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;