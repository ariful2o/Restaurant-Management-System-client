import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const { loginUser, githubSignin, googleSignin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)

    const handleLogin = (e) => {
        e.preventDefault()

        const from = e.currentTarget
        const email = from.email.value
        const password = from.password.value

        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location.state ? location.state : '/')
            })
            .catch(err => Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${err.message}`,
                showConfirmButton: false,
                timer: 1500
            }))
    }

    const handleGoogleSigin = () => {
        googleSignin()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Signin Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch(err => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(err)
            })
    }
    const handleGithubSigin = () => {
        githubSignin()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Signin Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch(err => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(err)
            })
    }


    return (
        <div className="w-full max-w-lg p-8 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-20">
            <form className="space-y-6" onSubmit={handleLogin}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                </div>
                <div className="relative">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    <div className="text-white absolute right-4 bottom-3" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                        }

                    </div>
                </div>
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered? <Link to='/register'><p className="text-blue-700 hover:underline dark:text-blue-500">Create account</p></Link>
                </div>
            </form>
            <div className="flex gap-4 justify-center mt-10">
                <button onClick={handleGithubSigin} type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/30 me-2 mb-2">
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                    </svg>
                    Sign in with Github
                </button>
                <button onClick={handleGoogleSigin} type="button" className="text-gray-800 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                    </svg>
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}
