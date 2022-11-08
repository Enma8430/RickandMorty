import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import Url from './Url'

const ConsuemerApi = () => {

    const[actualLocalitation, setActualLocalitation] = useState({})
    const [search, setSearch] = useState('')

    useEffect(() => {
        const ramdom = Math.floor(Math.random() *125)+1
        axios.get(`https://rickandmortyapi.com/api/location/${ramdom}`)
        .then(res=> setActualLocalitation(res.data))
    },[])

    const serachLocalitation = ()=> {
        
        axios.get(`https://rickandmortyapi.com/api/location/${search}`)
        .then(res=> setActualLocalitation(res.data))

    }

    console.log(actualLocalitation);
    return (
        <div style={{backgroundImage:('https://images6.alphacoders.com/909/909641.png'), background:'red'}}>
            
            <h1>{actualLocalitation.name}</h1>

            <div>
                <b>Type:</b>{' '}{actualLocalitation.type}{'   '}
                <b>Dimension</b>{' '}{actualLocalitation.dimension}{'   '}
                <b>Population</b>{' '}  {}
            </div>
            
            <input 
            type="text"
            value={search}
            onChange={e=> setSearch(e.target.value)}/>

            <button onClick={serachLocalitation}>Search</button>


            <ul>
            {actualLocalitation.residents?.map((url) => (

                <Url url={url} key={url}/>
            ))
            }
            </ul>

        </div>
    );
};

export default ConsuemerApi;