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

function GameStatus() {
	return (
		<Row>
			<Col>
				<h1>Choose your next Pokemon! Lvl 5</h1>
			</Col>
		</Row>
	);
}

export default GameStatus;
