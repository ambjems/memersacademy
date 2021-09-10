import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';

export default function About() {
    return (
    <div style={{width:'100vw', height:'90vh', backgroundColor:'#e5e3e3', paddingTop:'7vh'}}>

        <div style={{width:'100%', height:'20%', textAlign:'center',
                    paddingTop:'1%', boxSizing:'border-box'}}>
            <Typography variant='h4' style={{fontWeight:'bold'}}>About us</Typography>
            <Typography variant='h6'>Don't try to know more about us. Just remember we are memers.</Typography>
        </div>
        <Typography style={{paddingLeft:'1%', paddingBottom:'0.5%', fontWeight:'bold', fontSize:'1.2rem'}}>Message from Founders</Typography>
        <div style={{width:'100%', height:'60%', display:'flex',justifyContent:'space-evenly'}}>
            <Card style={{width:'30%', height:'100%'}}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    memer Kamalesh
                  </Typography>
                  <img src='https://myalbum.com/photo/RhEaPmSPWxQ9/540.jpg' alt='kams' height='200px' width='200px' style={{borderRadius:'50%'}}/>
                  <Typography variant="body2" color="textSecondary" component="p">
                      Being memer is not an easy task, sometimes you have to make others smile with pain inside you.
                  </Typography>
                </CardContent>
            </Card>

            <Card style={{width:'30%', height:'100%'}}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    memer Rishav
                  </Typography>
                  <img src='https://myalbum.com/photo/rWP9zmeGEeRX/540.jpg' alt='kams' height='200px' width='200px' style={{borderRadius:'50%'}}/>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Every pic or vdo has some meme, you just need eye to see it. Thats how a memers should be like.
                  </Typography>
                </CardContent>
            </Card>

            <Card style={{width:'30%', height:'100%'}}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    memer Jems
                  </Typography>
                  <img src='https://myalbum.com/photo/wu4AqMF2UXgA/1k0.jpg' alt='kams' height='200px' width='200px' style={{borderRadius:'50%'}}/>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Everyone can't be a memer. If you are the one, think god has given you some extra potential and energy.
                  </Typography>
                </CardContent>
            </Card>

        </div>

        <div style={{width:'100%', height:'15%', textAlign:'center', paddingTop:'0.5%'}}>
            <Typography variant='h6' style={{fontWeight:'bold'}}>Contact us</Typography>
            <Typography>Only one place, memers academy</Typography>
        </div>
            
        </div>
    )
}
