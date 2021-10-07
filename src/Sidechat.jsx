import React from 'react';
import './Sidechat.css';
import {Avatar} from '@mui/material';
import { useState,useEffect } from 'react';
function Sidechat() {
    const [seed,setseed]=useState('');
    useEffect(() => {
      setseed(Math.floor(Math.random()*5000));
    }, []);
    return (
        <>
            <div className="sidechatcontainer">
           <div className="sidechatavatar"> <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} /></div>
           <div className="info">
               <h5>Name</h5>
               <p>last seen ....</p>
           </div>
            </div>
        </>
    )
}

export default Sidechat
