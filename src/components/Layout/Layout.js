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
// -----------------------------------------------

function Layout({ children }) {
	// const [level, setLevel] = useState(1);
	const [currentScore, setCurrentScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	return (
		<>
			<Header currentScore={currentScore} bestScore={bestScore} />

			{/* <main>{children}</main> */}
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
