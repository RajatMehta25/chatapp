import React from 'react'
import './Main.css'
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import Sidechat from './Sidechat';
import Chat from './Chat';


function Main() {


    return (
        <>
           <div className="container">
           <div className="sidebar">
               <div className="one">
               <div className="sidebar_header">
               <IconButton><Avatar /></IconButton></div>
              <div className="sidebar_headerright">
                  <IconButton> <DonutLargeIcon /> </IconButton>
                  <IconButton> <ChatIcon /></IconButton>
                  <IconButton><MoreVertIcon/></IconButton>
                  
                   </div>
               </div>
               <div className="search_container">
                   <IconButton > <SearchOutlined  /></IconButton>
                   <input type="text" name="search" id="search" placeholder="Search Chat Here" />
               </div>
               <div className="addnewchat" ><a href="https://www.instagram.com/thatsuaveboy/">RAJAT MEHTA</a></div>
               <div className="chat_heads">
                   <Sidechat/>
                   <Sidechat/>
                   <Sidechat/>
                   <Sidechat/>
               </div>
               
           </div>
           <div className="chatwindow">
               <Chat/>
           </div>
           </div>
        </>
    )
}

export default Main;