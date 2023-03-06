import React from 'react'
import Achievements from './components/achievements/Achievements'
import Hero from './components/hero/Hero'
import OurClub from './components/our club/OurClub'
import OurGames from './components/our games/OurGames'
import OurRenders from './components/our renders/OurRenders'
import './Home.css'
import clubbg from './clubback.jpg'

export default function Home() {
    return (
        <div>
             <Hero />
            <OurClub />
            { /*<Achievements />
            <OurGames />
            <OurRenders /> */}
            <img className='movimg' src='https://cdn.shopify.com/s/files/1/0636/8837/6542/products/pro-bfg-modularity.webp'></img>
        </div>
    )
}
