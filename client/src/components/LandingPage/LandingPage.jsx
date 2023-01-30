import React from 'react';
import { Link } from 'react-router-dom';
import style from "./landingpage.module.css"


export default function LandingPage() {
  return (
    <body>
    <div className={style.container}>
      <div>
        <h1>VideoGames</h1>
      </div>
      <div>
        <Link to="/home">
          <input type="submit" value="Go to Games" className={style.myButton} />
        </Link>
      </div>
    </div>
   
  </body>
  )
}