import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Url = ({url}) => {

    const [location, setLocation] = useState({})
    
    useEffect(()=>{
        axios.get(url)
        .then(res => setLocation(res.data) )
    }, [])
    
    console.log(location);

    return (
    
        <li>
            {location.name} {''}
            <br />
            <img src={location?.image} alt="" />
        </li>
    );
};

export default Url;