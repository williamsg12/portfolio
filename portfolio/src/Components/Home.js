import React from 'react';

const Home = () => {
    return (
			<div>
				<ul class='nav'>
					<li>
						<a href='google.com' target='_blank'>
							<i class='fas fa-home fa-3x home'>
								<div class='circle'>G</div>
							</i>
							<div class='title'>Home</div>
						</a>
					</li>

					<li>
						<a href='google.com' target='_blank'>
							<i class='fab fa-twitter fa-3x twitter'>
								<div class='circle'>A</div>
							</i>
							<div class='title'>About ME</div>
						</a>
					</li>

					<li>
						<a href='google.com' target='_blank'>
							<i class='fab fa-codepen fa-3x codepen'>
								<div class='circle'>R</div>
							</i>
							<div class='title'>Recent Projects</div>
						</a>
					</li>

					<li>
						<a href='google.com' target='_blank'>
							<i class='fab fa-github fa-3x github'>
								<div class='circle'>Y</div>
							</i>
							<div class='title'>Gary's Resume</div>
						</a>
					</li>
					<div class='background'></div>
				</ul>
			</div>
		);
};

export default Home;