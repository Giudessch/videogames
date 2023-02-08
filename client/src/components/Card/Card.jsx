import React from 'react';
import {Link} from 'react-router-dom';
import NotFound from '../NotFound/NotFound.jsx';
import style from './card.module.css';

function Card({data}) {
	return (
		<div className={style.card}>
			<Link to={`/videogames/${data.id}`}>
				{data.image === null || !data.image ? (
					<NotFound image={'noimage'} style={style}/>
				) : (
					<img className={style.img} src={data.image} alt={data.name} />
				)}
			</Link>
			<div className={style.cardText}>
				<div className='nameGenres'>
					<div className='name'>{data.name}</div>
					<div className='genres'>{data.genres}</div>
				</div>
				<div className='divRating'>
					<div className='rating'>{data.rating}</div>
				</div>
			</div>
		</div>
	);
}

export default Card;