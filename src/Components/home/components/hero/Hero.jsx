import React from 'react'
import './Hero.css'
import videobg from './assets/GDUbg.mp4'

export default function Hero() {
    return (
        <div className='allcomp'>
            <div className='logvideo'>
                <div className='overlay'></div>
                <video src={videobg} autoPlay loop type="video/mp4" muted></video>
                <h3>GAMEDEV UTOPIA</h3>
            </div>

            <div className='quotes'>
                <p>
                    
                </p>
            </div>
        </div>
    )
}
