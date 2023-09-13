import style from './header.scss'
import audioFile from '../../Assets/Sounds/click.mp3'
import linkAudioFile from '../../Assets/Sounds/link_click.mp3'
import Home from './Home.jsx'


import { Outlet, Link } from 'react-router-dom'


function Nav() {

    function playAudio() {
        const audio = new Audio(linkAudioFile)
        audio.play()
    }
    function changeTheme() {
        const audio = new Audio(audioFile)
        audio.play()
    }

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