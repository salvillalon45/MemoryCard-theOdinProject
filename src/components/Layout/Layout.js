// -----------------------------------------------
//
// Layout -> Layout.js
// Desc: Layout component that queries for data
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../Header';
import Footer from '../Footer';
import MemoryGame from '../MemoryGame';
import SEO from '../Seo/Seo';
// -----------------------------------------------

function Layout({ children }) {
	const [currentScore, setCurrentScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	return (
		<>
			<SEO title='The Odin Project: Memory Card' />

			<Header currentScore={currentScore} bestScore={bestScore} />

			<MemoryGame
				currentScore={currentScore}
				setCurrentScore={setCurrentScore}
				bestScore={bestScore}
				setBestScore={setBestScore}
			/>

			<Footer />
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
