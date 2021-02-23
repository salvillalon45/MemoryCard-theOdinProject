// -----------------------------------------------
//
// MemoryGame -> MemoryGame.js
// Desc: Component to hold logic for the game
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import GameBoard from './GameBoard';
import GameStatus from './GameStatus';

// Bootstrap
import Container from 'react-bootstrap/Container';
// -----------------------------------------------

function MemoryGame() {
	const [level, setLevel] = useState(4);

	return (
		<main>
			<section>
				<Container>
					{/* GAME STATUS */}
					<GameStatus />

					{/* GAME BOARD */}
					<GameBoard level={level} />
				</Container>
			</section>
		</main>
	);
}

export default MemoryGame;
