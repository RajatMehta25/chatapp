import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import './Chat.css';
import { useState,useEffect } from 'react';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';




function Chat() {

    const [seed,setseed]=useState('');
    useEffect(() => {
      setseed(Math.floor(Math.random()*5000));
    }, []);

    return (
        <>
            <div className="chatcontainer">
                <div className="chatheader">
                    <div className="chatheaderavatar"><Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} /></div>
               <div className="chatheaderinfo">
                   <h5>BABU RAO</h5>
                   <p>last seen with raju and shyam at 6:00pm</p>
               </div>
               <div className="chatheaderright">
                   <IconButton><SearchOutlined/></IconButton>
                   <IconButton><AttachFile/></IconButton>
                   <IconButton><MoreVert/></IconButton>
               </div>
                </div>
                <div className="chatbody">
                    <p className="chatmessage">nha dho k sunday ko ana mast ekdum <span className="chatname">Babu Bhaiya</span><span className="timestamp">12:00pm</span></p></div>
                <div className="chatfooter">wwww</div>
            </div>
        </>
    )
}

export default Chat
