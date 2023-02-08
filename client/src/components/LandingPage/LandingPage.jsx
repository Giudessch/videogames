import React from 'react';
import { Link } from 'react-router-dom';
import style from "./landingpage.module.css"


export default function LandingPage() {
  return (
    <div className={style.container}>
      <h1 className={style.bienvenidos}>BIENVENIDOS AL PROYECTO INDIVIUAL VIDEOGAMES</h1>
        <Link to="/home">
          <input type="submit" value="Ir a Juegos" className={style.myButton} />
        </Link>
    </div>
)}