import React from 'react';
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sport from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar=({sidebar,category,setcategory})=> {
    return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="shortcut-links" >
                <div className={`side-link ${category===0?"active":""}`} onClick={()=>setcategory(0)}>
                    <img src={home}/><p>Home</p>
                </div>
                <div className={`side-link ${category===20?"active":""}`} onClick={()=>setcategory(20)}>
                    <img src={game_icon}/><p>Game</p>
                </div>
                <div className={`side-link ${category===2?"active":""}`} onClick={()=>setcategory(2)}>
                    <img src={automobiles}/><p>automobiles</p>
                </div>
                <div className={`side-link ${category===17?"active":""}`} onClick={()=>setcategory(17)}>
                    <img src={sport}/><p>sport</p>
                </div>
                <div className={`side-link ${category===24?"active":""}`} onClick={()=>setcategory(24)}>
                    <img src={entertainment}/><p>entertainment</p>
                </div>
                <div className={`side-link ${category===28?"active":""}`} onClick={()=>setcategory(28)}>
                    <img src={tech}/><p>tech</p>
                </div>
                <div className={`side-link ${category===10?"active":""}`} onClick={()=>setcategory(10)}>
                    <img src={music}/><p>music</p>
                </div>
                <div className={`side-link ${category===22?"active":""}`} onClick={()=>setcategory(22)}>
                    <img src={blogs}/><p>blogs</p>
                </div>
                <div className={`side-link ${category===25?"active":""}`} onClick={()=>setcategory(25)}>
                    <img src={news}/><p>news</p>
                </div>
                <hr/>
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={jack} alt="" /><p>Pewdiepie</p>
                </div>
                <div className="side-link">
                    <img src={simon} alt="" /><p>mrbean</p>
                </div>
                <div className="side-link">
                    <img src={tom} alt="" /><p>justin bieber</p>
                </div>
                <div className="side-link">
                    <img src={megan} alt="" /><p>5-min</p>
                </div>
                <div className="side-link">
                    <img src={cameron} alt="" /><p>nas daily</p>
                </div>
            </div>

        </div>
    );
}

export default Sidebar;