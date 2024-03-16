import React from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/like.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
const PlayVideo=()=> {
    return (
        <div className='play-video'>
          <video src={video1} controls autoPlay muted></video>
          <h3>Title</h3>
          <div className="play-video-info">
            <p>0 views,2days ago</p>
            <div>
                <span><img src={like} />0</span>
                <span><img src={dislike} />0</span>
                <span><img src={share} />share</span>
                <span><img src={save} />save</span>
            </div>
          </div>
          <hr/>
          <div className="publisher">
            <img src={jack} />
            <div>
                <p>Channel Name</p>
                <span>0 Subscriber</span>
            </div>
            <button>Subscribe</button>
          </div>
          <div className="vid-description">
            <p>Write anything</p>
            <p>here also write anything</p>
            <hr/>
            <h4>0 Comments</h4>
            <div className="comments">
                <img src={user_profile}/>
                <div>
                    <h3>Ramesh<span>1 day ago</span></h3>
                    <p>ena soldrathu therila </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>0</span>
                        <img src={dislike} alt="" />

                    </div>
                </div>
            </div>
            <div className="comments">
                <img src={user_profile}/>
                <div>
                    <h3>Ramesh<span>1 day ago</span></h3>
                    <p>ena soldrathu therila </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>0</span>
                        <img src={dislike} alt="" />
                        
                    </div>
                </div>
            </div>
          <div className="comments">
                <img src={user_profile}/>
                <div>
                    <h3>Ramesh<span>1 day ago</span></h3>
                    <p>ena soldrathu therila </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>0</span>
                        <img src={dislike} alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default PlayVideo;