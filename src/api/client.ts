import axios from "axios";

export const apiclient=axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    headers:{
        'Content-Type':'application/json',
    }

});
