import React from "react";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import style from "./videoGames.module.css"

export default function Videogames ({videogames}) {
  return (
    <div className={style.videogames}>
      {videogames.length > 0 ?
      videogames.map((data) => (<Card key={data.id} data={data} />))
      : <Loading />
      }
    </div>
  );
};
