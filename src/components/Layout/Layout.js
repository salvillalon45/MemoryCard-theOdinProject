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

// Gatsby
// import { useStaticQuery, graphql } from 'gatsby';

// Styling
// import './Layout.css';

// Components
import Header from '../Header';
import Footer from '../Footer';
// -----------------------------------------------

function Layout({ children }) {
	console.table(children);
	return (
		<>
			<Header />

			<main>{children}</main>

			<Footer />
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
