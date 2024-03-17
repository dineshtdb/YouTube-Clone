import React, { useState,useEffect } from 'react';
import './Recommended.css'
import {API_KEY,value_converter}from '../../data'
import {Link} from 'react-router-dom'
const Recommended=({categoryId})=>{


  const[apiData,setapiData]=useState([]);

      const fetchdata =async ()=>{
        const videolist_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(videolist_url).then(res=>res.json().then(data=>setapiData(data.items)))
      }
      useEffect(()=>{
        fetchdata();
      },[])


  return (
    <div className='recommended'>
     {apiData.map((item,index)=>{ 
      return(
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index}className="side-video-list">
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <div>
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)}</p>
          </div>
        </Link>
      )
      
      })} 
         
          
    </div>
  )
}
export default Recommended