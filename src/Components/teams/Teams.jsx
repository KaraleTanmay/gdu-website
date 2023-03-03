import React from 'react'
import Blender from './components/blender/Blender'
import Love2d from './components/love 2d/Love2d'
import Unity from './components/unity/Unity'
import WebTeam from './components/web team/WebTeam'

export default function Teams() {
    return (
        <div>
            teams
            <Love2d />
            <Unity />
            <Blender />
            <WebTeam />
        </div>
    )
}
