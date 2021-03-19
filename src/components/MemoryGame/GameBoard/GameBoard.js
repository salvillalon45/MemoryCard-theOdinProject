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
	checkAdvanceLevel,
	updateCardsIndex,
	shuffleCards
} from '../MemoryGameUtil.js';

function GameBoard(props) {
	const { amountOfCards, level } = props;
	console.log({ amountOfCards });
	const [cardsIndex, _setCardsIndex] = useState(
		createCardsState(amountOfCards)
	);
	console.log({ cardsIndex });
	const [cards, setCards] = useState([]);
	const [gameCheck, setGameCheck] = useState(false);

	const cardsIndexRef = useRef(cardsIndex);
	const setCardsIndex = (cardName, value) => {
		console.log({ cardName, value });
		console.table(cardsIndexRef);
		cardsIndexRef.current[cardName] = value;
		console.log('AFTER');
		console.table(cardsIndexRef);
		_setCardsIndex({ ...cardsIndexRef.current });
	};

	function resetCardsIndex(resetValue) {
		console.log('resetCardsIndex');
		console.log(resetValue);
		_setCardsIndex(resetValue);
	}

	function handleCardClicked(cardName, id) {
		const gameCheck = determineGameOver(id);
		setGameCheck(gameCheck);
		setCardsIndex(cardName, 1);
	}

	function renderCards() {
		const totalCards = Array.from(Array(amountOfCards).keys());
		const cardsArray = totalCards.map(index => {
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

		const shuffledCards = shuffleCards(cardsArray);
		setCards(shuffledCards);
	}

	// This effect depends on the amountOfCards changing. Needed so that we update the state
	// for cardsIndex
	useEffect(() => {
		console.log('FIRST');
		console.log('what is amountofCards:: ' + amountOfCards);
		updateCardsIndex(amountOfCards, setCardsIndex);
		// const newCardsState = createCardsState(amountOfCards);
		// for (const cardName in newCardsState) {
		// 	console.log({ cardName });
		// 	setCardsIndex(cardName, 0);
		// }
	}, [amountOfCards]);

	useEffect(() => {
		console.log('SECOND');
		renderCards();
	}, [cardsIndex]);

	// determine next step. This effect depends on whether the user clicks on all the correct cards
	useEffect(() => {
		console.log('THIRD');
		if (gameCheck === false && checkAdvanceLevel(cardsIndex)) {
			props.handleSetAmountOfCards(amountOfCards * 2);
			props.handleSetLevel(level + 1);
			setCards([]);
		}
	}, [checkAdvanceLevel(cardsIndex)]);

	// Used to reset the game
	useEffect(() => {
		console.log('FOURTH');
		if (gameCheck) {
			console.log('GOING TO RESET');
			props.handleSetAmountOfCards(4);
			props.handleSetLevel(1);
			// updateCardsIndex(4, setCardsIndex);
			const newCardsState = createCardsState(4);
			for (const cardName in newCardsState) {
				console.log({ cardName });
				setCardsIndex(cardName, 0);
			}
			resetCardsIndex(newCardsState);

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
