import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { searchVideogames } from '../../store/actions';
import Videogames from "../../components/Videogames/VideoGames";
import { Pagination } from "../../components/Pagination/Pagination";
import NotFound from "../../components/NotFound/NotFound";
import style from "./SearchBar.module.css";

export default function Search() {
  const dispatch = useDispatch();
  const { name } = useParams()

  const searchVideogame = useSelector((state) => state.searchVideogameByName);

  useEffect(() => {
    console.log(name);
    dispatch(searchVideogames(name));
  }, [name]);

  // Paginacion
  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(10);

  let lastCardPerPage = page * videogamesPerPage;
  let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
  let currentPageGames = searchVideogame.slice(firtsCardPerPage, lastCardPerPage);

  return (
    <div className="search">
      {searchVideogame.length > 0 ?
        <>
          <h1>Results with {name}!</h1>
          <Videogames videogames={currentPageGames} />
          <Pagination
            videogamesPerPage={videogamesPerPage}
            totalVideogames={searchVideogame.length}
            paginate={paginate}
          />
        </>
        : <NotFound image={"nogames"} />
      }

    </div>
  )
};