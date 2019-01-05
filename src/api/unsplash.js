import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cc3afd6ac411f08cb5b3e8d5635f1443dce1772c8ea7275f921ebb439b70f9e9'
    }
});
