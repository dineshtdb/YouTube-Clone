import React, { useState } from "react";
import {Route,Routes} from 'react-router-dom'
import Navbar from "./Components/NavBar/Navbar";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video";

const App=()=>{

    const [sidebar,setsidebar]= useState(true);
    return(
        <div>
            <Navbar setsidebar={setsidebar} />
           
            <Routes>
                <Route path='/' element={<Home sidebar={sidebar}/>}/>
                <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
            </Routes>
        </div>
    )
}
export default App