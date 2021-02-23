function createCardsState(level) {
	console.log('Inside createCardsState');
	const cardObj = {};

	for (let i = 0; i < level; i++) {
		let cardName = 'card' + i;
		cardObj[cardName] = 0;
	}

	return cardObj;
}

export { createCardsState };
