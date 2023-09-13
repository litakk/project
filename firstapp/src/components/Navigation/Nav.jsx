import style from './header.scss'
import audioFile from '../../Assets/Sounds/click.mp3'
import linkAudioFile from '../../Assets/Sounds/link_click.mp3'

import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'


function Nav() {
    const [theme, setTheme] = useState(false)
    function playAudio() {
        const audio = new Audio(linkAudioFile)
        audio.play()
    }
    function changeTheme() {
        const audio = new Audio(audioFile)
        audio.play()
    }


    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollHeihgt = window.scrollY
            if (scrollHeihgt < 300) {
                document.querySelector('nav').style.backgroundColor = '#ffffff30'
            } else {
                document.querySelector('nav').style.backgroundColor = '#1f1f1f'
            }
        })
    }, [window.scrollY])

    return (
        <div>
                <Link to="/" onClick={playAudio}>Home</Link>
                <Link to="/about" onClick={playAudio}>About</Link>


            <div id='outlet'>
                <Outlet />
            </div>

         
        </div>
    );
}

export default Nav;