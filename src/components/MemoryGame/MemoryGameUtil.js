function createCardsState(level) {
	console.log('Inside createCardsState');
	const cardObj = {};

	for (let i = 0; i < level; i++) {
		let cardName = 'card' + i;
		cardObj[cardName] = 0;
	}

	return cardObj;
}

function determineGameOver(id) {
	if (id === 1) {
		return true;
	}

	return false;
}

function checkAdvanceLevel(cardsIndex) {
	let total = 1;

	for (const cardName in cardsIndex) {
		console.log(cardsIndex[cardName]);
		const cardAvailability = cardsIndex[cardName];

		if (cardAvailability === 1) {
			total += 1;
		}
	}

	if (total === Object.entries(cardsIndex).length) {
		console.log({ total });
		console.log(Object.entries(cardsIndex).length);
		return true;
	}

	return false;
}

export { createCardsState, determineGameOver, checkAdvanceLevel };
