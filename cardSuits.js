const Suit =
    { SPADES: "spades", HEARTS: "hearts", DIAMONDS: "diamonds", CLUBS: "clubs" };

const values = {
    1: "Ace",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "Jack",
    12: "Queen",
    13: "King"
};

function generateCard() {
    var card = [];
    for (let k in Suit) {
        for (let v in values) {
            let aCard = values[v] + ' of ' + Suit[k];
            card.push(aCard);
        }
    }
    return card;
}

function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;
    let indeArr = [];

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);

        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    //console.log('index list:',indeArr);
    return arra1;
}
function displayCards() {
    document.getElementById('cards').hidden = false;
    let arr = generateCard();
    let shuffledCard = shuffle(arr);
    document.getElementById('cards').innerHTML = '';
    for (let j = 0; j < shuffledCard.length; j++) {
        let x = j + 1 + ':' + shuffledCard[j] + '<br>';
        document.getElementById('cards').innerHTML += x;
        //  document.write(x);
    }
}

function getCard() {
    document.getElementById('cards').hidden = true;
    let arr = generateCard();
    let shuffledCard = shuffle(arr);
    let draw1 = shuffledCard.pop();
    let cardValue = getValue(draw1);

    //console.log(draw1);
    document.getElementById('yourReslut').innerHTML = draw1;
}



displayCards();
//console.log(shffledCard);


//This method give the symmetric difference of arrays
//console.log("length:",arrayCheck([1,1, 2, 5], [2,2, 3, 5], [3, 4, 5,5])); 
function arrayCheck(...arg) {
    let len = arg.length;
    let arrA = [];
    for (let i = 0; i < arg.length; i++) {
        let arrB = arg[i];
        let intersection = arrA.filter(x => !arrB.includes(x)).concat(arrB.filter(x => !arrA.includes(x)));
        arrA = [... new Set(intersection)];
    }
    return arrA;
}

//function to return update inventory
function updateInventory(curInv,newInv) {
    for (let i in newInv) {
        let x = newInv[i];
        let found = false;
        for (let j in curInv) {
            if ((curInv[j])[1] == x[1]) {
                curInv[j][0] = x[0]+curInv[j][0];
                found = true
                break;
            }
        }
        if (!found) {
            curInv.push(newInv[i]);
        }

    }
  curInv=curInv.sort(compare);
  function compare(a,b){
      const itemA=a[1];
      const itemB=b[1];
      let comparison=0;
      if(itemA>itemB) return comparison=1;
      else if(itemA<itemB) return comparison=-1;
      return comparison;
  }
 return curInv;

}
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
 let updatedInv=updateInventory(curInv,newInv);
 let update2=updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
                             [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

 console.log(updatedInv);
//find elements in an array
/* const data = [2, 31, 45, 2, 577, 233, 10];
let found = data.find(e => e == 10);
if (found != undefined)
    console.log('i found it');
else
    console.log('Not found');

const arrA = [2, 3, 6];
const arrB = [5, 6, 7, 2, 10];
let intersection = arrA.filter(x => !arrB.includes(x)).concat(arrB.filter(x => !arrA.includes(x)));
console.log(intersection);  */


// Permutaitons
/* function permAlone(str){

let arr=str.split('');
let totalP=1;
let arrLength=arr.length;
for(let i=0; i<arrLength;i++){
  totalP*=(arrLength-i);
}
console.log('arr:',totalP);

};

permAlone('aabb'); */