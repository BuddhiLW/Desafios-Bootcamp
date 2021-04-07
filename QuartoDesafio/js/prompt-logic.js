var initGame = () => filterCards(howMany());

var howMany = () => prompt("With how many cards you wish to play with?");

var filterCards = number =>
    (number % 2 === 0 && (number > 4 && number < 14))
    ? createCards(number)
    : initGame();

var querier = (e) => document.querySelector(e);
var populateWith = (e) => (li) => e.appendChild(li.cloneNode(true));

var ul = querier('ul');
let li = document.createElement('li');

var populate = (number) => {
  console.log(number);
  for (var i = 0; i < number; i++) {
    populateWith(ul)(li);
  }
};

var createCards = (number) => populate(number);

initGame();
