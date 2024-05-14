import axios from "axios"
import { useEffect } from "react";

const AxiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,

})
function useAxiosSecure() {
    useEffect(() => {
        AxiosSecure.interceptors.response.use(res => {
            return res
        }), error => {
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logoutttttttttttttt');
            }
        }
    }, [])
    return AxiosSecure;
}

export default useAxiosSecure
