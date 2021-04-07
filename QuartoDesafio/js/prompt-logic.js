var initGame = () => filterCards(howMany());

var howMany = () => prompt("With how many cards you wish to play with?");

var filterCards = number =>
    (number % 2 === 0 && (number > 4 && number < 14))
    ? createCards(number)
    : initGame();

let li = document.createElement('li');
var ul = querier('ul');

var querier = e => document.querySelector(e);
var populateWith = e => li => e.appendChild(li);

var populateLi = number => function(number){
    var values = ul;
    var accumulate = function (li){
        if (values.length < number){
            populateWith(values)(li);
            return values;
        }else{
            return values;
        }
        return accumulate;
    }; 
};
// for (var i = 0; i < number; i++) {
//     return populateWith(ul)(li);
// }

var createCards = number => populate(number);
