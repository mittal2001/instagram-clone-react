import React from 'react';
import './Post.css';

import Avatar from '@mui/material/Avatar';
// or
// import { Avatar } from '@mui/material';


function Post({username,caption,imageurl}) {
  return (
    <div className='post'>

      <div className='post_header'>
        <Avatar 
        className='post_avatar' alt ='Tanmay' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCBHSTexKEph5-j9D5NAt0Fyq4Re0Mhg6-w&usqp=CAU' />
        <h3>{username}</h3>
      </div>
        {/* avatar -> avatar + username */}

        <img className='post_image' src={imageurl} alt=''/>
        {/* image */}


        <h3 className='post_text'><strong>{username}:</strong> {caption} </h3>
        {/* username + caption */}
    </div>
  )
}

export default Post