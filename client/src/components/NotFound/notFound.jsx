import React from "react";

export default function NotFound({ image, style }) {
  return (
    image === "noimage" ?
      <img className={style.img} src="https://acortar.link/e4iUP" alt="Link caido" />
      : <img className="notfound" src="https://acortar.link/xjEvD" alt="Link caido" />
  );
}; 