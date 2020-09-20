import React from 'react';
import {Fragment} from 'react';
import './styles/Main.css'
import tournament from './images/tournament.jpg'
import tutorial from './images/tutorial.jpg'
import guide from './images/guide.jpg'
import {Link} from 'react-router-dom';
import Unity, { UnityContent } from "react-unity-webgl";


function Index() {

    return (
        <Fragment>
        <div className="welcome-container">
          <h1>Physics Playground</h1>
        </div>
        

        <div className="container">
            <h1>What is physics playground?</h1>
            <p>
                Physics lab simulation tool built with Unity

            </p>
            
            <h3> Press F to unlock camera</h3>
            <h3> Press E to switch to block view</h3>
            <h3> WASD to move</h3>
            <iframe src="https://i.simmer.io/@l3noire/physicsplaygroundu" style={{width:"960px", height:"600px",border:"0", textAlign:"center"}}></iframe>

            
        </div>

        


      </Fragment>
    )
}
export default Index;
