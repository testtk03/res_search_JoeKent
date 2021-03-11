import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async(searchTerm) => {
        //Error handling
        try{
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: "Helsinki",
                    limit: 50
                }
            })       
            setResult(response.data.businesses)      
        }
        catch(err){
            setErrorMessage('Somthing went wrong!');
        }
        
    }

    useEffect(()=>{
        searchAPI('')
    },[ ])

    return [searchAPI, results, errorMessage]
}