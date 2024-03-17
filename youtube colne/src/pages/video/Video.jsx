import React from 'react';
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/recommended/Recommended'
import {useParams} from 'react-router-dom'
    function Video() {
        const{videoId,categoryId}=useParams();
        return (
            <div className='play-container'>
                <PlayVideo videoId={videoId}/>
                <Recommended/>
            </div>
        );
    }

export default Video;