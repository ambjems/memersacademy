import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
       <div style={{width:'100vw', height:'7vh', 
                    backgroundColor:'orange', paddingTop:'1vh', paddingBottom:'4vh',
                    boxSizing:'border-box',position:'fixed', top:'0'}}>
           <nav>
           <div style={{display:'flex', justifyContent:'space-around'}}>
           <NavLink exact to='/home' style={{textDecoration:'none'}} activeStyle={{textDecoration:'none', fontWeight:'bold', fontSize:'1.3rem'}}>
         Home</NavLink>
           <NavLink to='/anthem' style={{textDecoration:'none'}} activeStyle={{textDecoration:'none', fontWeight:'bold', fontSize:'1.3rem'}}>Anthem</NavLink>
           <NavLink to='/memes' style={{textDecoration:'none'}} activeStyle={{textDecoration:'none', fontWeight:'bold', fontSize:'1.3rem'}}>
           Memes</NavLink>
           <NavLink to='/about' style={{textDecoration:'none'}} activeStyle={{textDecoration:'none', fontWeight:'bold', fontSize:'1.3rem'}}>About</NavLink>
           </div>
           </nav>
       </div>
    )
}
