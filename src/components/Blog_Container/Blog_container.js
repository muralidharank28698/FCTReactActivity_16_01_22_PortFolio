import React from 'react';
import "./Blog_container.css"
const Blog_container = () => {
    return (
        <div className='blogcontainer'>
           <div className='blogcontainer__leftblog'>
            <h1>Amazon blog</h1>
              <p>
              "One thing I love about customers is that they are divinely discontent. Their expectations are never static – they go up. It's human nature. We didn't ascend from our hunter-gatherer days by being satisfied. People have a voracious appetite for a better way, and yesterday's 'wow' quickly becomes today's 'ordinary.'"
              </p>
           </div>
           <div className='blogcontainer__rightblog'>
               <img src={require('../../assets/blogimage.png')}></img>
           </div>
        </div>
    )   
};

export default Blog_container;

           