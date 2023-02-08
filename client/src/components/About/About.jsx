import React from 'react';
import style from'./about.module.css';

function About() {
	return (
		<div className={style.about}>
			<h1>About Videogames!</h1>
			<div>
				<h4>
					This project use information and images from the{' '}
					{<a href='https://rawg.io/apidocs'>RAWG</a>} API.
				</h4>
				<h4>
				Videogames web project developed by Giuliana Desiree Schiebelbein for Soy Henry's BOTCAMP.
				</h4>
			</div>
		</div>
	);
}

export default About;