import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

function Header(props) {
    return (
        <header style={{'background': props.colour, 'display': props.display}}>
            <Link className="title" to="/">Physics Playground</Link>
            <div className="link-container">
                <Link className="link-style" to='/'>Simulator</Link>
                <Link className="link-style" to='/about'>About</Link>
                
            </div>

        </header>
        
    )
} 

export default Header
