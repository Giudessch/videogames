import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createVideogame, getGenres } from '../../store/actions';
import style from "./create.module.css";

export default function Create() {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.genres);

  const [game, setGame] = useState({
    name: '',
    description: '',
    image: '',
    released: '',
    rating: 0,
    genres: [],
    platforms: [],
  });

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const randomPlatforms = [
    'PC',
    'iOS',
    'Android',
    'macOS',
    'PlayStation 4',
    'PlayStation 5',
    'Xbox',
    'PS Vita',
  ];

  const ChangeInput = (e) => {
    if (e.target.name === 'genres' || e.target.name === 'platforms') {
      const arr = game[e.target.name];
      setGame({
        ...game,
        [e.target.name]: arr.concat(e.target.value),
      });
    } else {
      setGame({
        ...game,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      name: game.name,
      description: game.description,
      image: game.image,
      released: game.released,
      rating: game.rating,
      genres: game.genres,
      platforms: game.platforms,
    };

    // Validaciones

    if (!obj.name) {
      alert('Falta completar el nombre para terminar de crear!');
      return;

    }

    if (!obj.description) {
      alert('Falta completar la descripcion para terminar de crear!');
      return;
    }
    if (!obj.released) {
      alert('Falta completar la fecha de lanzamiento para terminar de crear!');
      return;
    }
    if (obj.rating > 5 || obj.rating < 0) {
      alert('Falta completar el rating para terminar de crear!');
      return;
    }

    dispatch(createVideogame(obj));
    e.target.reset();
    alert('Videogame creado correctamente !');


    setGame({
      name: '',
      description: '',
      image: '',
      released: '',
      rating: 0,
      genres: [],
      platforms: [],
    });
  };

  return (
    <div className={style.container}>
      <h1>ESTAS A PUNTO DE CREAR UN JUEGO!</h1>
      <h3>Rellena los siguientes campos</h3>
      <form
        id='survey-form'
        className='form'
        noValidate
        onChange={(e) => ChangeInput(e)}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <div className={style.form}>
            <div className={style.formGroup}>
              <label>-Name-</label>
              <input
                className='label'
                type='text'
                name='name'
                value={game.name}
              ></input>
            </div>
            <div className={style.formGroup}>
              <label>-Description-</label>
              <input
                className='label'
                type='text'
                name='description'
                value={game.description}
              ></input>
            </div>
            <div className={style.formGroup}>
              <label>-Released-</label>
              <input
                className='label'
                type='date'
                name='released'
                value={game.released}
              ></input>
            </div>
            <div className={style.formGroup}>
              <label>-Rating-</label>
              <input
                className='label'
                type='number'
                name='rating'
                value={game.rating}
              ></input>
            </div>
            <div className={style.formGroup}>
              <label>-Image URL-</label>
              <input
                className='imagein'
                type='text'
                name='image'
                value={game.image}
              ></input>
            </div>
            <div className={style.formGroup}>
              <label>-Genres-</label>
              <div className={style.genreOptions}>
                {genres.map((gen) => (
                  <div key={gen.name} className={style.option}>
                    <input
                      type='checkbox'
                      name='genres'
                      value={gen.name}
                    ></input>
                    <label name={gen}>{gen.name}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className={style.formGroup}>
              <label>-Platforms-</label>
              <div className={style.genreOptions}>
                {randomPlatforms.map((P) => (
                  <div key={P} className={style.option}>
                    <input type='checkbox' name='platforms' value={P}></input>
                    <label name={P}>{P}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className={style.buttonCreate} type='submit'>
            CREAR!
          </button>
        </div>
      </form>

    </div>

  );
}