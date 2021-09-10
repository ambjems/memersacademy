import React from 'react';
import {Typography,Box,Button} from '@material-ui/core';

export default function Home() {
    return (
        <div style={{width:'100vw', height:'90vh', backgroundColor:'#e5e3e3', display:'flex', paddingTop:'7vh',
        flexDirection:'column',
        justifyContent:'center', alignItems:'center'}}>

            <Typography variant='h4'>Welcome to memers academy</Typography>

            <Box boxShadow={10} style={{width:'80%', height:'80%', backgroundColor:'white',
                                        borderRadius:'2vh', display:'flex'}}>

                <Box style={{height:'100%', width:'60%', backgroundColor:'#ffffff',  
                margin:'auto', padding:'1vh', boxSizing:'border-box', borderRadius:'2vh',
                display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Box style={{width:'75%', paddingLeft:'1%'}}>
                    <Typography variant='h5' style={{fontWeight:'bold'}}>Who is a memer ?</Typography>
                    <Typography variant='h6'>One who make memes ? NO! You are wrong.</Typography>
                    </Box>
                    <Box boxShadow={3} borderRadius={8} style={{width:'85%', padding:'5%',  borderRadius:'2vh',
                                                    backgroundColor:'#eae8e8', marginBottom:'3%',marginTop:'3%'}}>
                    <Typography variant='h6'>                       
                        Being memer is not only about making meme, 
                        its about your sacrifice for smile of others.
                        Making meme will bring smile on others face, 
                        not money in your pocket. 
                        You have to work for smile, not for money.
                        <Typography variant='h6' style={{fontWeight:'bold'}}>
                                                Now ask yourself are you a memer ? <br/>
                                                If you are ready for the sacrifice. <br/>
                                                Then you are a memer.</Typography>
                    </Typography>
                    </Box>
                    <Button variant='contained' color='secondary'>Join our academy</Button>

                </Box>

                <Box style={{height:'100%', width:'40%', backgroundColor:'white', borderRadius:'2vh'}}>
                    <img src='https://myalbum.com/photo/vWyowj6yrxiX/1k0.jpg' alt='logo' height='100%' width='100%'
                        style={{ borderRadius:'2vh'}}
                    />
                </Box>

            </Box>
           
        </div>
    )
}
