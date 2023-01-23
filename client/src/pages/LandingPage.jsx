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
          <input type="submit" value="Ir a Juegos" className={style.myButton} />
        </Link>
        <h3 className={style.love}>Hecho con &hearts; para henry</h3>
      </div>
    </div>
   
  </body>
  )
}