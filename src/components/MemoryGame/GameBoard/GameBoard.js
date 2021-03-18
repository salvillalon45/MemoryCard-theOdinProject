// -----------------------------------------------
//
// MemoryGame -> GameBoard.js
// Desc: Component to hold the cards of the game
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import PopUp from '../../PopUp';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
// -----------------------------------------------

// -----------------------------------------------
// Imports
import {
	createCardsState,
	determineGameOver,
	checkAdvanceLevel
} from '../MemoryGameUtil.js';

function GameBoard(props) {
	const { level } = props;
	const [cardsIndex, _setCardsIndex] = useState(createCardsState(level));
	const [cards, setCards] = useState([]);
	const [gameCheck, setGameCheck] = useState(false);
	const cardsIndexRef = useRef(cardsIndex);
	const setCardsIndex = (cardName, value) => {
		cardsIndexRef.current[cardName] = value;
		_setCardsIndex({ ...cardsIndexRef.current });
	};

	function handleCardClicked(cardName, id) {
		const gameCheck = determineGameOver(id);
		console.log({ gameCheck });
		setGameCheck(gameCheck);
		setCardsIndex(cardName, 1);
	}

	function renderCards() {
		const cardsArr = Array.from(Array(level).keys());
		const result = cardsArr.map((card, index) => {
			const cardName = 'card' + index;
			const id = cardsIndex[cardName];

			return (
				<Card
					onClick={() => {
						handleCardClicked(cardName, id);
					}}
					key={index}
					className={cardName}
					id={id}
				>
					{/* <Card.Img src='https://cdn.bulbagarden.net/upload/thumb/4/44/701Hawlucha.png/600px-701Hawlucha.png' /> */}
					{/* <Card.Img src='https://cdn.bulbagarden.net/upload/thumb/4/44/701Hawlucha.png/600px-701Hawlucha.pn /> */}

					<Card.Body>
						<Card.Title>Hawlucha</Card.Title>
						<Card.Title>{index}</Card.Title>
					</Card.Body>
				</Card>
			);
		});

		setCards(result);
	}

	useEffect(() => {
		renderCards();
	}, [cardsIndex]);

	// determine next step
	useEffect(() => {
		// Determine all cards have id of 1
		if (gameCheck === false && checkAdvanceLevel(cardsIndex)) {
			console.log('Ready');
		}
	});

	// Used to reset the game
	useEffect(() => {
		if (gameCheck) {
			const newCardsState = createCardsState(level);
			for (const cardName in newCardsState) {
				setCardsIndex(cardName, 0);
			}

			setCards([]);
		}
	}, [gameCheck]);

	return (
		<Row>
			<Col>
				{gameCheck && (
					<PopUp
						text='Game Over!'
						nextStepText='Play Again?'
						step={1}
						handleReset={props.handleReset}
						handleGameCheck={setGameCheck}
					/>
				)}
				<CardColumns>{cards}</CardColumns>
			</Col>
		</Row>
	);
}

export default GameBoard;
