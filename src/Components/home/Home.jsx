import React from 'react'
import Achievements from './components/achievements/Achievements'
import GameIndustry from './components/game industry/GameIndustry'
import Hero from './components/hero/Hero'
import OurClub from './components/our club/OurClub'
import OurGames from './components/our games/OurGames'
import OurRenders from './components/our renders/OurRenders'

export default function Home() {
    return (
        <div>
            home
            <Hero />
            <OurClub />
            <GameIndustry />
            <Achievements />
            <OurGames />
            <OurRenders />
        </div>
    )
}
