import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
const NewsComponent =(props)=> {
 
  
    let {title,description,url,imageUrl,author,date}=props;
    return (
      <div style={{display:'flex',justifyContent:'space-evenly',display:'flex',flexDirection:'column'}}>
       <div className="card" style={{width: "18rem",}}>
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:0}}>
       <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:"90px",zIndex:1}}>
    {author}</span>
    </div>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p class="card-text"><small class="text-body-secondary">By {author} on {new Date(date).toUTCString()} </small></p>
         <a href={url} className="btn btn-sm btn-primary">Read More</a>
         
         </div>
  
</div>
      </div>
    )
  }


export default NewsComponent
