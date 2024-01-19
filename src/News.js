import React, { Component, useEffect, useState } from 'react'
import NewsComponent from './NewsComponent'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'
import LoadingBar from 'react-top-loading-bar'
const News =(props)=> {
    const articles=[]
    const[arr,setArticle]=useState(articles)
    const[count,setCount]=useState(1)
    const[loading,setLoading]=useState(false)
    const[totalResults,setRes]=useState(0)
    
    const fetchMoreData=async ()=>
    {
        setCount(count+1);
        // this.setState({count:this.state["count"]+1});
       
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2f09b54b0fa649e282736ed336f1c1e1&page=${count}&pageSize=${props.pageSize}`;
        let data= await fetch(url);
        let parsedData= await data.json();
        console.log(parsedData);
        // this.setState({article:this.state.article.concat(parsedData.articles),totalResults:parsedData.totalResults});
        setArticle(arr.concat(parsedData.articles));
        setRes(parsedData.totalResults);

    }
    async function updateNews()
    {   
        
        setLoading(!loading)
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2f09b54b0fa649e282736ed336f1c1e1&page=${count}&pageSize=${props.pageSize}`;
        let data= await fetch(url);
        let parsedData= await data.json();
        console.log(parsedData);

        setArticle(parsedData["articles"]);
        setLoading(!loading)
    }
   useEffect(()=>{updateNews()},[])
   
     
  
    return (
      <div>
        <center>
        <h1 >NewsMonkey-Top Headlines on  category</h1>
        </center>
        <InfiniteScroll dataLength={arr.length} next={fetchMoreData} hasMore={arr.length!=totalResults} loader={<center><div className='center'><Spinner/></div></center>}>
        <div className='row' style={{display:'flex',flexDirection:'row',marginTop:"10px",alignItems:'center'}}>
        {arr.map((Element)=>{
                 return <div className='col-md-4' key={Element.url}>
                 <NewsComponent title={Element.title?Element.title.slice(0,45):""} description={Element.description?Element.description.slice(0,88):""} imageUrl={Element.urlToImage?Element.urlToImage:"https://c.ndtvimg.com/2023-12/5u8cqdqo_s-jaishankar-_625x300_27_December_23.jpeg"} author={Element.author} date={Element.publishedAt} source={Element.source.name}  />
                 </div>
        })}
           </div>

        </InfiniteScroll>
        
      </div>
    )
  }


export default News
