const card = document.querySelectorAll('.card');
const cardArray = Array.from(card);
const icon = document.querySelectorAll('.icon');
const iconArray = Array.from(icon);
const container = document.querySelector('.card_container');
// let playerNumber = document.querySelector('.player_number select').selectedOptions;
// const colorSelector = document.querySelectorAll('.color');
// const nickInput = document.querySelectorAll('.nick');
// const score = document.querySelectorAll('.player_form span');

const playerForm = document.querySelectorAll('.player_form');
// const playerFormArray = Array.from(playerForm);

let altArray = [];
let targetArray = [];
let activeCardArray = [];

// random number from all cards
const randomNumber = function(){
    let randomFromCards = Math.random() * (cardArray.length - 1) + 1;
    let floorNumber = Math.floor(randomFromCards);
    return floorNumber;
};


// this works but I don't fully understand it
for (var i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
}

const check = function() {
     if (altArray.length === 1) {
        activeCardArray.forEach(actv_card => actv_card.classList.add('unableCard'));
     }
     if (altArray.length === 2) {
                const wrongItems = targetArray.flat();
                const emptyArrays = () => { 
                    altArray.length = 0;
                    activeCardArray.length = 0;
                    targetArray.length = 0;
                }
            if (altArray[0] === altArray[1]) {
                activeCardArray.forEach(actv_card => actv_card.classList.add('unableCardPermanent'));
                emptyArrays();
                const activePlayer = document.querySelector('.active_player');
                // change score
                let scoreBoard = activePlayer.children[1].innerHTML;
                newScore = parseFloat(scoreBoard) +1;
                activePlayer.children[1].innerHTML = newScore;
            } else {
                card.forEach(e => e.classList.add('unableCard'));
                setTimeout(function() {
                    wrongItems.forEach(f => f.classList.toggle('hidden'));
                    activeCardArray.forEach(f => f.classList.toggle('activeCard'));
                    emptyArrays();
                    wrongItems.length = 0;
                    card.forEach(e => e.classList.remove('unableCard'));
                }, 500);
                // switch active player
                playerForm.forEach(e=>e.classList.toggle('active_player'));
            }
        }
}

const turnCard = function(){
    const target = event.currentTarget;
    const targetChildrenArray = Array.from(target.children);
    targetChildrenArray.forEach(e => e.classList.toggle('hidden'));
    target.classList.toggle('activeCard');
    let alt = targetChildrenArray[0].getAttribute('alt');
    let pushed = altArray.push(alt);
    targetArray.push(targetChildrenArray);
    activeCardArray.push(target);
    check();
}

cardArray.forEach(card_elem => card_elem.addEventListener('click', turnCard))


// const setColor = function(value) {
//     let idNumber = this.parentElement.id;
//     playerForm[idNumber - 1].style.background = this.value;
// }

// colorSelector.forEach(colorIn => colorIn.addEventListener('input', setColor));
// playerNumber.addEventListener('input', showPlayers());

// function showPlayers(value)


// jQuery or vanilla?
// $(function(){
// 	$('#box').click(function(){
// 		$(this).toggleClass('on');
// 	});
// });