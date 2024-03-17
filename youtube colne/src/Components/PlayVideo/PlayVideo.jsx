import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/like.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import {API_KEY,value_converter}from '../../data'
import moment from 'moment'
const PlayVideo=({videoId})=> {

    const[apidata,setapidata]=useState(null);
    const[channeldata,setchanneldata]=useState(null);
    const[commentdata,setcommentdata]=useState([]);

    const fetchvideodata =async()=>{
        const video_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(video_url).then(res=>res.json()).then(data=> setapidata(data.items[0]))
    }

    const fetchotherdata =async()=>{
        //data
        const channelurl=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelurl).then(res=>res.json()).then(data=> setchanneldata(data.items[0]))

        //comment
        const commenturl=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
        await fetch(commenturl).then(res=>res.json()).then(data=> setcommentdata(data.items))
    }
    

    useEffect(()=>{
    fetchvideodata();
    },[])
    useEffect(()=>{
        fetchotherdata();
    },[apidata])
    

    return (
        <div className='play-video'>
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <h3>{apidata?apidata.snippet.title:""}</h3>
          <div className="play-video-info">
            <p>{apidata?value_converter(apidata.statistics.viewCount):"0"} views,{apidata?moment(apidata.snippet.publishedAt).fromNow():"0"}</p>
            <div>
                <span><img src={like} />{apidata?value_converter(apidata.statistics.likeCount):"0"}</span>
                <span><img src={dislike} /></span>
                <span><img src={share} />share</span>
                <span><img src={save} />save</span>
            </div>
          </div>
          <hr/>
          <div className="publisher">
            <img src={channeldata?channeldata.snippet.thumbnails.default.url:""} />
            <div>
                <p>{apidata?apidata.snippet.channelTitle:"0"}</p>
                <span>{channeldata?value_converter(channeldata.statistics.subscriberCount):"" }Suscriber</span>
            </div>
            <button>Subscribe</button>
          </div>
          <div className="vid-description">
            <p>{apidata?apidata.snippet.description.slice(0,250):"0"}</p>
          
            <hr/>
            <h4>{apidata?value_converter(apidata.statistics.commentCount) :"0"}Comments</h4>
            
            {commentdata.map((item,index)=>(
                    <div key={index}  className="comments">
                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
                    <div>
                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                        <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                            <img src={dislike} alt="" />
    
                        </div>
                    </div>
                </div>
                
           ))} 
            
            
        </div>
        </div>
    );
}

export default PlayVideo;