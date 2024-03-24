import axios from 'axios'

const BASE_URL = 'https://greenmentor-2.onrender.com'

export const axiosUtils = (url, method, data = null, headers = null) => {
    const option = {
        credentials: 'include'
    };
    return axios({
        url: `${BASE_URL}${url}`,
        method: method,
        data: data,
        headers: headers,
        withCredentials: true,
        ...option
    })
}


