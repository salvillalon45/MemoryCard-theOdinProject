// -----------------------------------------------
//
// MemoryGame -> GameBoard.js
// Desc: Component to hold the cards of the game
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Components

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
// -----------------------------------------------

// -----------------------------------------------
// Imports
import { createCardsState } from '../MemoryGameUtil.js';

function GameBoard(props) {
	const { level } = props;
	// const [cardsIndex, setCardsIndex] = useState(createCardsState(level));
	const [cardsIndex, _setCardsIndex] = useState({
		card0: 0,
		card1: 0,
		card2: 0,
		card3: 0
	});
	const [cards, setCards] = useState([]);
	const cardsIndexRef = useRef(cardsIndex);
	const setCardsIndex = cardName => {
		console.log(cardsIndexRef);
		// shipsRef.current[shipName][1] = shipAvailability;
		cardsIndexRef.current[cardName] = 1;
		_setCardsIndex({ ...cardsIndexRef.current });
	};

	useEffect(() => {
		// createCardsState();
		generateCards();
	}, []);

	function handleCardClicked(cardName) {
		console.log({ cardName });
		// console.log(cardsIndexRef.current[cardName]);
		console.log(cardsIndex);
		console.log(cardsIndex[cardName]);
		setCardsIndex({
			...cardsIndex,
			[cardName]: 1
		});
	}

	function generateCards() {
		console.log('Inside generateCards');
		// const cardsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const cardsArr = Array.from(Array(level).keys());
		console.log(cardsArr);
		const result = cardsArr.map((card, index) => {
			const cardName = 'card' + index;

			return (
				<Card
					onClick={() => {
						// console.log(cardsIndex);
						handleCardClicked(cardName);
					}}
					key={index}
					className={cardName}
					// id={cardsIndex[index]}
				>
					<Card.Img src='https://cdn.bulbagarden.net/upload/thumb/4/44/701Hawlucha.png/600px-701Hawlucha.png' />

					<Card.Body>
						<Card.Title>Hawlucha</Card.Title>
					</Card.Body>
				</Card>
			);
		});

		setCards(result);
	}

	// function setUpEventListeners() {
	// 	const gameCellArray = Array.from(document.querySelectorAll('.card'));

	// 	for (let i = 0; i < gameCellArray.length; i++) {
	// 		const cell = gameCellArray[i];

	// 		cell.addEventListener('click', function (event) {
	// 			event.stopImmediatePropagation();
	// 			console.log('hi');
	// 			console.log(cell);
	// 			cell.classList.remove('notClicked');
	// 		});
	// 	}
	// }

	// // This helps us re-render the component so that I can add the event listeners
	// useLayoutEffect(() => {
	// 	setUpEventListeners();
	// });
	// console.table(cardsIndex);
	return (
		<Row>
			<Col>
				<CardColumns>{cards}</CardColumns>
			</Col>
		</Row>
	);
}

export default GameBoard;
