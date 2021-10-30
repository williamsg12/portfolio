import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
			<div>
				<ul class='nav'>
					<li>
						<Link to='/'>
							<i class='fas fa-home fa-3x home'>
								<div class='circle'>G</div>
							</i>
							<div class='title'>Home</div>
						</Link>
					</li>

					<li>
						<Link to='/aboutme'>
							<i class='fab fa-twitter fa-3x twitter'>
								<div class='circle'>A</div>
							</i>
							<div class='title'>About ME</div>
						</Link>
					</li>

					<li>
						<Link to='/projects'>
							<i class='fab fa-codepen fa-3x codepen'>
								<div class='circle'>R</div>
							</i>
							<div class='title'>Projects</div>
						</Link>
					</li>

					<li>
						<Link to='/resume'>
							<i class='fab fa-github fa-3x github'>
								<div class='circle'>Y</div>
							</i>
							<div class='title'>Resume</div>
						</Link>
					</li>
					<li>
						<Link to='/Contact'>
							<i class='fab fa-github fa-3x github'>
								<div class='circle'>.W</div>
							</i>
							<div class='title'>Contact Me</div>
						</Link>
					</li>
					<div class='background'></div>
				</ul>
			</div>
		);
};

export default Home;