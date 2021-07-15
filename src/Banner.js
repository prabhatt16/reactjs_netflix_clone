import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './request';

import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const request =await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ]);
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+'...':str;
     }
    return (
        <header className='banner'
        style={{
            backgroundSize:'cover',
            backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPositionL:'center center',
        }}>
            <div className='banner-contents'>
                <h1 className="banner-title">
                    {
                        movie?.title || movie?.name|| movie?.original_name
                    }
                </h1>
                <div>
                    <button type="btn" className='banner-button'>Play</button>
                    <button type="btn" className='banner-button'> My List</button>
                </div>
                <h1 className='banner-discription'>
                    {
                        truncate(movie?.overview,150) 
                    }
                </h1>
            </div>
            <div className='banner-fadeBottom'>
                
            </div>
        </header>
    )
}

export default Banner
