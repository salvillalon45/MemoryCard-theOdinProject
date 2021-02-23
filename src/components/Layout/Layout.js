// -----------------------------------------------
//
// Layout -> Layout.js
// Desc: Layout component that queries for data
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../Header';
import Footer from '../Footer';
import MemoryGame from '../MemoryGame';
// -----------------------------------------------

function Layout({ children }) {
	return (
		<>
			<Header />

			{/* <main>{children}</main> */}
			<MemoryGame />

			<Footer />
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
