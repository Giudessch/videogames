import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getGenres, filterByGenre, orderByCreator, orderAsc, orderDesc} from '../../store/actions';
import style from './filter.module.css';


export function Filter({ paginate }) {
	const dispatch = useDispatch();
	const genres = useSelector((store) => store.genres);

	useEffect(() => {
		dispatch(getGenres());
	}, []);

	// Filtrado por genre
	const handleFilter = (e) => {
		dispatch(filterByGenre(e.target.value));
		paginate(e, 1);
	};

	// Ordenado
	const handleOrder = (e) => {
		if (e.target.value === 'asc_name' || e.target.value === 'asc_rating') {
			dispatch(orderAsc(e.target.value));
		} else if (
			e.target.value === 'desc_name' ||
			e.target.value === 'desc_rating'
		) {
			dispatch(orderDesc(e.target.value));
		} else {
			dispatch(filterByGenre(e.target.value));
		}
	};

	// Filtrado por API/DB
	const handleCreator = (e) => {
		if (e.target.value === 'Api' || e.target.value === 'Created') {
			dispatch(orderByCreator(e.target.value));
			paginate(e, 1);
		} else {
			dispatch(filterByGenre(e.target.value));
			paginate(e, 1);
		}
	};

	return (
		<div className={style.conteiner}>
			<div>
				<div>Genero</div>
				<select onChange={(e) => handleFilter(e)}>
					<option default> Todos</option>
					{genres.map((G) => (
						<option key={G.id} value={G.name}>{G.name}</option>
					))}
				</select>
			</div>
			<div>
				<div>Ordenar</div>
				<select onChange={(e) => handleOrder(e)}>
					<option value='All' default> Todos</option>
					<option value='asc_name'>Alfabeticamente (A-Z)</option>
					<option value='desc_name'>Alfabeticamente (Z-A)</option>
					<option value='asc_rating'>Clasificación (Bajo - Alto)</option>
					<option value='desc_rating'>Clasificación (Alto - Bajo)</option>
				</select>
			</div>
			<div>
				<div> Filtrado Api / Db </div>
				<select onChange={(e) => handleCreator(e)}>
					<option default> Todos </option>
					<option value='Api'> Api VideoGames </option>
					<option value='Created'>User VideoGames</option>
				</select>
			</div>
		</div>
	);
}

export default Filter;
