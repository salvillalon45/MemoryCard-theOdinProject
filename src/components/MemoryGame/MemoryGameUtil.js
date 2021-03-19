function createCardsState(level) {
	const cardObj = {};

	for (let i = 0; i < level; i++) {
		let cardName = 'card' + i;
		cardObj[cardName] = 0;
	}
	console.log({ cardObj });
	return cardObj;
}

function determineGameOver(id) {
	if (id === 1) {
		return true;
	}

	return false;
}

function checkAdvanceLevel(cardsIndex) {
	let total = 0;

	for (const cardName in cardsIndex) {
		const cardAvailability = cardsIndex[cardName];

		if (cardAvailability === 1) {
			total += 1;
		}
	}

	if (total === Object.entries(cardsIndex).length) {
		return true;
	}

	return false;
}

function updateCardsIndex(amountOfCards, setCardsIndex) {
	const newCardsState = createCardsState(amountOfCards);
	for (const cardName in newCardsState) {
		console.log({ cardName });
		setCardsIndex(cardName, 0);
	}
}

/*
1. We put each element in the array in an object, and give it a random sort key
2. We sort using the random key
3 . We unmap to get the original objects
You can shuffle polymorphic arrays, and the sort is as random as Math.random, which is good enough for most purposes.

Since the elements are sorted against consistent keys that are not regenerated each iteration, and each comparison pulls from the same distribution, any non-randomness in the distribution of Math.random is canceled out.

Speed

Time complexity is O(N log N), same as quick sort. Space complexity is O(N). 
This is not as efficient as a Fischer Yates shuffle but, in my opinion, 
the code is significantly shorter and more functional. If you have a 
large array you should certainly use Fischer Yates. 
If you have a small array with a few hundred items, you might do this.

FROM: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
function shuffleCards(unshuffledCards) {
	const shuffledCards = unshuffledCards
		.map(a => ({ sort: Math.random(), value: a }))
		.sort((a, b) => a.sort - b.sort)
		.map(a => a.value);

	return shuffledCards;
}

export {
	createCardsState,
	determineGameOver,
	checkAdvanceLevel,
	updateCardsIndex,
	shuffleCards
};
