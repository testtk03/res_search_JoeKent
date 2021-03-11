import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer MyD9dsONXc0WA3BVK3v9EkDgWoCwNTwRJ_pQh20YdC_ntTovZuTU2DAiGFOhdUYpg1I8HkTzsAmOmCj6StqGj8xmoo7_LKpDccA2x-griQEVBIOC27D9R00Wi7tIYHYx'
    }
});
