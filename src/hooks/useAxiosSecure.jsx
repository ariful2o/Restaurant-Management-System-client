import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401 ) {
        signOut(auth)
            .then(() => {
                console.log('logout user');
            })
    }
    return Promise.reject(error);
});

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;
