import React, { useEffect, useState } from 'react'
// import endpoints from '../services/movieSevices';
import endpoints from '../Services/movieServices';
import axios from "axios"
function Main() {

 const [movie,setMovie]=useState({});
 useEffect(()=>{
  axios.get(endpoints.popular).then((response)=>{
    const movies=response.data.results;
    const randomMovie=movies[Math.floor(Math.random()*movies.length)]
     setMovie(randomMovie)
  })
 },[]);

const truncate=(str,length)=>{
  if(!str) return "";
  return str.length>length?str.slice(0, length)+"...":str;

}


 if(!movie)
 return(<>

 <p>fetching movie...</p>

 </>)

 const {title,backdrop_path,release_date,overview}=movie
 return (
  <div className='w-full h-[600px] text-white'>
    <div className='w-full h-full'>
      <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
      <img     className='w-full h-full object-cover object-top'
     src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
    alt={title}/>
      
      <div className='absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{title}</h1>
        <div className='my-4'>
          <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
            Play
          </button>
          <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
            Watch Later
          </button>
        </div>
        <p className='text-gray-400 text-sm'>
          Released: {release_date}
        </p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
          { truncate (overview ,165)}
        </p>
      </div>
    </div>
  </div>
);
};
 

export default Main



