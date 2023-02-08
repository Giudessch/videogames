import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameById } from '../../store/actions';
import NotFound from '../../components/NotFound/NotFound.jsx';
import style from './details.module.css'

function GameDetail({ id }) {
  const dispatch = useDispatch();
  const videogame = useSelector((store) => store.searchVideogameById);

  useEffect(() => {
    dispatch(getVideogameById(id));
  }, []); 
  
  return (
    <div className={style.container}>
      <div className="info">
        <div className={style.image}>
          {videogame.image === null || !videogame.image ?
            <NotFound image={"noimage"} style={style}/>
            : <img src={videogame.image} alt={videogame.name} />}
          <div>
            <h1>{videogame.name} </h1>
            <h5>({videogame.released})</h5>
          </div>
        </div>
        <div className="details">
          <div className="text">
            <h2> Descripcion:</h2>
            <p>{videogame.description}</p>
          </div>
          <div className="Genres">
            <div className="genres">
              It's an {videogame.genres} game ranked at {videogame.rating} points.
            </div>
          </div>
          <div className="Platforms">
            <div className="platforms">
              <p>Play it at {videogame.platforms}.</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/home">
        <button className="button" type="submit">🡸</button>
      </Link>
    </div>
  );
}

export default GameDetail;