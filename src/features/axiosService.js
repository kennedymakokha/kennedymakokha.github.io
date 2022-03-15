import axios from 'axios';

export const base = 'http://localhost:2000';
const axiosService = axios.create({
    baseURL: `${base}`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const setAuthToken = instance => {
    const token = localStorage.getItem('inventory_tkn');
    if (token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete instance.defaults.headers.common['Authorization'];
    }
};

// singleton instance
export default axiosService;