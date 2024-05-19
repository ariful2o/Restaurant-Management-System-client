import { useContext, useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import auth from "../../firebase/firebase.init";
import { AuthContext } from "../../provider/AuthProvider";
import HelmetTitle from "../../components/HelmetTitle";


export default function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setConfirmShowPassword] = useState(false)
    const [passWordError, serPassWordError] = useState(null)
    const { registerUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z@$!%*?&]{8,}$/;

        const from = e.currentTarget
        const first_name = from.first_name.value
        const last_name = from.last_name.value
        const email = from.email.value
        const photo = from.photo.value
        const password = from.password.value
        const confirm_password = from.confirm_password.value

        if (!passwordRegex.test(password)) {
            serPassWordError(`Password must at least one uppercase, lowercase, special character (@$!%*?&) and 8 characters long`)
            return
        }
        if (password !== confirm_password) {
            serPassWordError(`Confirm Password dosen't match`)
            return
        }

        serPassWordError('')

        registerUser(email, password)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registion Successfull",
                    showConfirmButton: false,
                    timer: 1500
                  });
                updateProfile(auth?.currentUser, {
                    displayName: `${first_name} ${last_name}`, photoURL: photo
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch(() => {
                    // An error occurred
                    // ...
                });
            })
            .catch(err => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
    }

    return (
        <div className="w-full max-w-2xl p-8 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-10 md:my-20">
            <HelmetTitle text={'Register'}></HelmetTitle>
            <form onSubmit={handleRegister}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-7">Sign up to our platform</h5>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input name="first_name" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input name="last_name" type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                    </div>

                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                    <input name="photo" type="text" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://profile_photo.jpg" required />
                </div>
                <div className={!passWordError ? "mb-6 relative" : "relative mb-14"}>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input name="password" type={showPassword ? "text" : "password"} id="password" className={passWordError ? "bg-gray-50 border border-red-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-500" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="•••••••••" required />
                    {passWordError && <p className="text-red-600 absolute text-sm">{passWordError}</p>}
                    <div className="text-white absolute right-4 bottom-3" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                        }

                    </div>
                </div>
                <div className="mb-6 relative">
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                    <input name="confirm_password" type={showConfirmPassword ? "text" : "password"} id="confirm_password" className={passWordError ? "bg-gray-50 border border-red-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-500" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="•••••••••" required />

                    <div className="text-white absolute right-4 bottom-3" onClick={() => setConfirmShowPassword(!showConfirmPassword)}>
                        {
                            showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />
                        }

                    </div>
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}
