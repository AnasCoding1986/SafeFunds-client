import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <div className="p-5">
            <h2 className="text-center font-bold text-3xl">Create your Safefunds account</h2>
            <div className="hero bg-base-200 min-h-screen my-4">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Create account now</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" {...register("name", { required: true })} className="input input-bordered" required />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">5-digit PIN</span>
                                </label>
                                <input 
                                    type="number" 
                                    placeholder="5-digit PIN" 
                                    {...register("pin", { 
                                        required: true, 
                                        pattern: /^\d{5}$/, 
                                        minLength: 5, 
                                        maxLength: 5 
                                    })} 
                                    className="input input-bordered" 
                                    required 
                                />
                                {errors.pin && <span className="text-red-500">PIN must be a 5-digit number</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile Number</span>
                                </label>
                                <input type="number" placeholder="Your Mobile Number" {...register("mobileNumber", { required: true })} className="input input-bordered" required />
                                {errors.mobileNumber && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" {...register("email", { required: true })} className="input input-bordered" required />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                    type="password" 
                                    placeholder="Your Password" 
                                    {...register("password", { 
                                        required: true, 
                                        minLength: 6 
                                    })} 
                                    className="input input-bordered" 
                                    required 
                                />
                                {errors.password && <span className="text-red-500">Password must be at least 6 characters long</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Create account</button>
                            </div>
                        </form>
                        <p className="text-center">Already have an account? <Link to='/' className="text-sky-900">Please login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
