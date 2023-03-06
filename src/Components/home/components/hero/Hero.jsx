import React, { useEffect, useState } from 'react'
import './Hero.css'
import videobg from './assets/GDUbg.mp4'

export default function Hero() {

    const strings = ['“Gamers can feel when developers are passionate about their games. They can smell it like a dog smells fear. Dont be afraid to hold onto your unique vision: just be aware that it may not turn out exactly how you envisioned.”― Scott Rogers',
     '“People who know how to make games need to start focusing on the task of making real life better for as many people as possible.”― Jane McGonigal',
     '“There is only One Man Playing your Game, You!”― Vineet Raj Kapoor',
     '"Nobody in this industry knows what they’re doing, we just have a gut assumption."- Cliff Bleszinski',
     '"You can make an amazing game, but you cant make a success. Your players make the success."- Irme Jele',
     '"Lets optimize for player experience rather than what we think will make more money."- Ron Carmel',
     '"The successful free to play games are selling positive emotions. Not content."- Nicholas Lovell',
     '"It should be the experience, that is touching. What I strive for is to make the person playing the game the director."- Shigeru Miyamoto',
     '"A lot of indie developers who became Overnight Successes were working at it for ten years."- Dan Adelman',
     '"Golden rule of level design - Finish your first level last."- John Romero'];

    // const [quote, setquote] = useState(data[0]);
    const [index, setIndex] = useState(0);
    const [showOutput, setShowOutput] = useState(false);
    const [output, setOutput] = useState(strings[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const string = strings[index];
            setOutput(string);
            setShowOutput(true);
            setTimeout(() => {
                setShowOutput(false);
            }, 4000);
            setIndex((index + 1) % strings.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [index]);


    return (
        <div className='allcomp'>
            <div className='logvideo'>
                <div className='overlay'></div>
                <video src={videobg} autoPlay loop type="video/mp4" muted></video>
                <h3>GAMEDEV UTOPIA</h3>
            </div>
            <div className='quotes'>
                <p style={{ opacity: showOutput ? 1 : 0, transition: "opacity 1s ease-in-out" }}>
                    {output}
                </p>
            </div>
        </div>
    )
}
