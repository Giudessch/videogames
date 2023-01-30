import React from 'react';
import './About.module.css';

function About() {
	return (
		<div className='about'>
			<h1>About Videogames!</h1>
			<div>
				<h4>
					This project use information and images from the{' '}
					{<a href='https://rawg.io/apidocs'>RAWG</a>} API.
				</h4>
				<h4>
					Develop Hevert David Gelis Diaz for individual project for Henry
					Bootcamp.
				</h4>
			</div>
			<div className='logos'>
				<img className='img1' src={reactlogo} alt='Link caido' />
				
			</div>
		</div>
	);
}

export default About;