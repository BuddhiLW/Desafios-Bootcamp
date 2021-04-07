var initGame = () => filterCards(howMany());

var howMany = () => prompt("With how many cards you wish to play with?");

var filterCards = number =>
    (number % 2 === 0 && (number > 4 && number < 14))
    ? createCards(number)
    : initGame();

var createCards = x => x;
