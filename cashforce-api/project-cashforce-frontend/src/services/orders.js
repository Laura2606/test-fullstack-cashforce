import axios from 'axios';

const API_URL = 'http://localhost:3000/api/orders';

export default {
    list() {
        return axios.get(API_URL);
    }
};
