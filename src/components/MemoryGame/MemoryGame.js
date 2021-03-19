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
	const [level, setLevel] = useState(1);
	const [amountOfCards, setAmountOfCards] = useState(4);
	const [resetFlag, setResetFlag] = useState(2);

	function handleReset(value) {
		console.log('Inside handleReset()');
		console.log({ value });
		setResetFlag(value);
	}

	return (
		<main>
			<section>
				<Container>
					{/* GAME STATUS */}
					<GameStatus level={level} />

					{/* GAME BOARD */}
					{resetFlag && (
						<GameBoard
							amountOfCards={amountOfCards}
							handleSetAmountOfCards={setAmountOfCards}
							level={level}
							handleSetLevel={setLevel}
							handleReset={handleReset}
						/>
					)}
				</Container>
			</section>
		</main>
	);
}

export default MemoryGame;
