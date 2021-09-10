import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getNewsRequest } from "../redux/actions/newsActions";

import { CircularProgress } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import {Card, CardContent, Typography, Button} from '@material-ui/core';


export default function Memes() {


  const loading = useSelector((state) => state.news.loading);
  const news = useSelector((state) => state.news.news);
  let i = -1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsRequest())
  });

    return (
        <div style={{backgroundColor:'#e5e3e3',paddingTop:'7vh',
        display:"flex", flexWrap:'wrap', justifyContent:"flex-start"}}>

          {news.map(news => (
                
                <div key={i++} style={{backgroundColor:'white', padding:'5px', margin:'5px', 
                width:'25%', height:'30%', borderRadius:'20px', marginTop:'25px', marginBottom:'25px',
                marginRight:'50px', marginLeft:'50px',
                boxSizing:'border-box', display:'flex', flexDirection:'column', justifyContent:'center',
                alignItems:'center'}}>
                      <h3>{news.title}</h3>
                      <img src={news.imgUrl} alt='news' height='200px' width='200px' />
                      <br/>
                      <a href={news.imgUrl} target='_blank' rel="noreferrer" style={{textDecoration:'none'}}>
                      <Button variant="contained" color="secondary">View full image</Button></a>
                      <h5>Author: {news.creator}</h5>
                </div>
             ))  }              
        </div>
    )
}
