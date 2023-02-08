import React from "react";
import style from "./pagination.module.css";

export const Pagination = ({ videogamesPerPage, totalVideogames, currentPage, paginate, prev, next }) => {
  const pageNumbers = [];
  const numOfPages = Math.ceil(totalVideogames / videogamesPerPage)

  for (let i = 1; i <= numOfPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={style.pagination}>
      <div className={style.item}>
        <button onClick={(e) => prev(e)}>
          Anterior
        </button>
      </div>
      {pageNumbers.map((num) => (
        <div key={num} className={`${style.item} ${currentPage === num ? style.active :  ''+ currentPage}`}>
          <button onClick={(e) => paginate(e, num)}>
            {num}
          </button>
        </div>
      ))}
      <div className={style.item}>
        <button onClick={(e) => next(e)}>
          Siguiente
        </button>
      </div>
    </nav>
  );
};