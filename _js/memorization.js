// sources
// https://codepen.io/jstarnate/pen/QoagLr

// Memory game to find the two same animals
class MemoryGame {

    // The contrustor comes in place
	constructor() {
		this.duration = 1000;
		this.cardsContainer = document.querySelector('.js-cards');
		this.cards = Array.from(this.cardsContainer.children);
	}

    // The cards are mixed up so everything is random
	shuffleCards() {
		this.cards.forEach(card => {
			const randomNumber = Math.floor(Math.random() * this.cards.length) + 1;

			card.classList.remove('has-match');

			setTimeout(() => {
				card.style.order = `${randomNumber}`;
			}, 400);
		})
	}
	// Shuffling and checking the cards
	checkAllCards() {
		if (!this.cards.every(card => card.classList.contains('has-match'))) return;
		
		setTimeout(() => {
			this.shuffleCards();
		}, this.duration);
	}

    // The class list is added and removed
	stopEvent() {
		this.cardsContainer.classList.add('no-event');

		setTimeout(() => {
			this.cardsContainer.classList.remove('no-event');
		}, this.duration);
	}
	// Detetcts if cards are the same or not by using a class
	checkIfMatched(firstCard, secondCard) {
		if (firstCard.dataset.animal === secondCard.dataset.animal) {
			firstCard.classList.remove('flipped');
			secondCard.classList.remove('flipped');

			firstCard.classList.add('has-match');
			secondCard.classList.add('has-match');
			
			this.checkAllCards();
		}
		else {
			setTimeout(() => {
				firstCard.classList.remove('flipped');
				secondCard.classList.remove('flipped');
			}, this.duration);
		}
	}
	// If statement to decide whether or not the cards match
	flip(selectedCard) {
		selectedCard.classList.add('flipped');

		const flippedCards = this.cards.filter(card => card.classList.contains('flipped'));

		if (flippedCards.length === 2) {
			this.stopEvent();
			this.checkIfMatched(flippedCards[0], flippedCards[1]);
		}
	}

}

const game = new MemoryGame;

game.cards.forEach(card => {
	card.addEventListener('click', game.flip.bind(game, card));
})