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

	