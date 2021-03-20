// -----------------------------------------------
//
// MemoryGame -> GameStatus.js
// Desc: Component to hold what level the user is in
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React from 'react';
import PropTypes from 'prop-types';

// Components

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// -----------------------------------------------

function GameStatus(props) {
	const { level } = props;

	return (
		<Row>
			<Col>
				<h1 className='whiteText textCenter'>
					Choose your next card! Lvl {level}
				</h1>
			</Col>
		</Row>
	);
}

export default GameStatus;
