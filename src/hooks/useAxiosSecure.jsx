import axios from "axios";
import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const AxiosSecure = axios.create({
    baseURL: '',
    withCredentials: true,

})
function useAxiosSecure() {
    useEffect(() => {
        AxiosSecure.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, function (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logoutttttttttttttt');
            }
        });
    }, [])
    return AxiosSecure;
}

export default useAxiosSecure
