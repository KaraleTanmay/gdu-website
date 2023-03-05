import React, { useEffect, useState } from 'react'
import './Hero.css'
import videobg from './assets/GDUbg.mp4'

export default function Hero() {

    const data = ['a', 'b', 'c', 'd'];

    const [quote, setquote] = useState(data[0]);

    useEffect(() => {
        const intervalid = setInterval(() => {
            const num = Math.floor(Math.random() * data.length);
            const element = data[num];
            setquote(element);
        }, 5000)

        return () => clearInterval(intervalid);
    }, []);


    return (
        <div className='allcomp'>
            <div className='logvideo'>
                <div className='overlay'></div>
                <video src={videobg} autoPlay loop type="video/mp4" muted></video>
                <h3>GAMEDEV UTOPIA</h3>
            </div>

            <div className='quotes'>
                <p>
                    {quote}
                </p>
            </div>
        </div>
    )
}
