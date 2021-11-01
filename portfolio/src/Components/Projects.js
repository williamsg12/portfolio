import React from 'react';
import './media/image1.jpeg'

const Projects = () => {
	return (
		<div>
			<h1 className='title'>Projects</h1>
			<div className='card'>
				<h2>TouRingApp</h2>
				<img src='./media/image1.jpeg' alt='project1' />
			</div>
			<div className='card'>
				<h2>CurrentNewsApp</h2>
				<img src='https://imgur.com/gnfjBrQ' alt='project1' />
			</div>
		</div>
	);
};

export default Projects;
