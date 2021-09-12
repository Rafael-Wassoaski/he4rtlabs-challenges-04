import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001'
})

export const search = async (url)=>{
    const response = await axios.get(url);
    return response.data;
}
