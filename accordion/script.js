let cardsGroup = document.getElementById("cards");

function hideAllCards(exceptCardId = null) {
    for (let card of cardsGroup.children) {
        let cardContent = document.getElementById(card.id + '-content');
        if (card.id !== exceptCardId) {
            cardContent.style.display = 'none';
        }
    }
}

hideAllCards();

cardsGroup.addEventListener('click', (event) => {
    let clickedCard = event.target.closest('.card');
    console.log("clicked " + clickedCard.id);

    let cardContent = document.getElementById(clickedCard.id + '-content');

    let cardEmoji = clickedCard.querySelector('.card-title span:last-child');

    if (cardContent.style.display === 'none') {
        hideAllCards(clickedCard.id);
        cardEmoji.textContent = '⬆️';
        cardContent.style.display = 'block';
    } else {
        cardContent.style.display = 'none';
        cardEmoji.textContent = '⬇️';
    }
})