// -----------------------------------------------
//
// Components -> Header.js
// Desc: Header for web app
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React from 'react';

// Bootstrap
import Navbar from 'react-bootstrap/NavBar';
// -----------------------------------------------

function Header() {
	return (
		<Navbar className='purpleBackground'>
			<Navbar.Brand className='openSansText boldText'>
				The Odin Project: Memory Game with Pokemon!
			</Navbar.Brand>

			<Navbar.Toggle />

			<Navbar.Collapse className='justify-content-end'>
				<Navbar.Text className='lightGreyText openSansText'>
					Best 0 | High 0
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
