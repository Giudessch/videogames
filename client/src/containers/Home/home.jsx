import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, resetAll } from '../../store/actions';
import Videogames from '../../components/Videogames/VideoGames';
import { Pagination } from '../../components/Pagination/Pagination';
import { Filter } from '../Filter/Filter';
import style from './home.module.css';

export default function Home() {
  const dispatch = useDispatch();

  const filteredVideogames = useSelector((state) => state.filteredVideogames);
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.orderBy);
  const videogames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(resetAll());
    dispatch(getVideogames());
  }, []);

  // Filtrado y Ordenado
  let allVideogames;
  filterBy === 'All' && orderBy === 'Select'
    ? (allVideogames = videogames)
    : (allVideogames = filteredVideogames);

  // Paginacion
  const paginate = (e, num) => {
    e.preventDefault();
    setPage(num);

  }

  const prev = (e) => {
    e.preventDefault();
    if (page != 1) {
      setPage(page - 1);
    }
  }

  const next = (e) => {
    e.preventDefault();
    setPage(page + 1); 
  }

  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [videogamesPerPage] = useState(15);

  let lastCardPerPage = page * videogamesPerPage; 
  let firtsCardPerPage = lastCardPerPage - videogamesPerPage; 
  let currentPageGames = allVideogames.slice(firtsCardPerPage, lastCardPerPage);

  return (
    <div className='home'>
      <Filter paginate={paginate} />
      <Videogames videogames={currentPageGames} />
      <Pagination
        videogamesPerPage={videogamesPerPage}
        totalVideogames={allVideogames.length}
        currentPage={page}
        paginate={paginate}
        prev={prev}
        next={next}
      />
    </div>
  );
}
