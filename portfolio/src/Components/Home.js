import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';

const Home = () => {
	return (
		<div className='content'>
			<Navbar bg='light' expand={false}>
				<Container fluid>
					<Navbar.Toggle aria-controls='offcanvasNavbar' />
					<Navbar.Offcanvas
						id='offcanvasNavbar'
						aria-labelledby='offcanvasNavbarLabel'
						placement='end'>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id='offcanvasNavbarLabel'>
								Navigation
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='justify-content-end flex-grow-1 pe-3'>
								<Link to='/'>Home</Link>
								<Link to='/about'>About Me</Link>
								<Link to='/contact'>Contact</Link>
								<Link to='/resume'>Resume</Link>
								<Link to='/projects'>Projects</Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</div>
	);
};

export default Home;
