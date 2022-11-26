// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}
wrapGifts(gifts);

const name = ["Charlie","Snoopy","Poppy"];

function writeCards(name, event) {
  let cards = [];
    for (let i = 0; i < name.length; i++) {
        cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}


function countDown () {
    let i = 10;
    while (i > -1) {
        console.log(i--);
    }
}
