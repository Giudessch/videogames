import React from 'react';
import style from './loading.module.css';


export default function loading() {
	return (
		<div className={style.loading}>
			<img
				className='loading'
				src='https://c.tenor.com/XK37GfbV0g8AAAAi/loading-cargando.gif'
				alt='Link caido'
			/>
		</div>
	);
}