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
	const [cards, setCards] = useState([]);
	const [cardsIndex, _setCardsIndex] = useState({
		card0: 0,
		card1: 0,
		card2: 0,
		card3: 0
	});
	const cardsIndexRef = useRef(cardsIndex);
	const setCardsIndex = cardName => {
		console.log('Inside setCardsIndex()');
		console.log('What is cardName:: ');
		console.log(cardName);
		console.log('What is cardIndexRefCurrent');
		console.log(cardsIndexRef);
		console.log(cardsIndexRef.current[cardName]);
		// shipsRef.current[shipName][1] = shipAvailability;
		cardsIndexRef.current[cardName] = 1;
		_setCardsIndex({ ...cardsIndexRef.current });
	};

	function handleCardClicked(cardName, id) {
		console.log('Inside handleCardClicke()');

		console.log({ cardName });
		// console.log(cardsIndex);
		console.log(id);
		// IF ID IS 1 then end game!
		// console.log(cardsIndex[cardName]);
		// console.table(cardsIndex);
		// setCardsIndex({
		// 	...cardsIndex,
		// 	[cardName]: 1
		// });
		setCardsIndex(
			cardName
			// [cardName]: 1
		);
	}

	function determineFlag(cardName) {
		console.log('Insider determineFlag()');
		if (cardsIndexRef.current[cardName] === 1) {
			console.log('CliCKED');
			return 'clicked';
		}
		console.log('NONE');
		return '';
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
					<Card.Img src='https://cdn.bulbagarden.net/upload/thumb/4/44/701Hawlucha.png/600px-701Hawlucha.png' />

					<Card.Body>
						<Card.Title>Hawlucha</Card.Title>
					</Card.Body>
				</Card>
			);
		});

		setCards(result);
	}

	useEffect(() => {
		renderCards();
	}, [cardsIndex]);

	// function setUpEventListeners() {
	// 	const gameCellArray = Array.from(document.querySelectorAll('.card'));

	// 	for (let i = 0; i < gameCellArray.length; i++) {
	// 		const cell = gameCellArray[i];

	// 		cell.addEventListener('click', function (event) {
	// 			event.stopImmediatePropagation();
	// 			console.log('hi');
	// 			console.log(cell.classList[0]);
	// 			// cell.classList.remove('notClicked');
	// 			handleCardClicked(cell.classList[0]);
	// 		});
	// 	}
	// }

	// // // This helps us re-render the component so that I can add the event listeners
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
