$(function(){

//make sure your app.js is connected, then set the tiles to flip
console.log("i'm connected");

  //define array on pageload for "cardvalues" var for when flipped
var cardvalues = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];  //simplified array
//shuffle the array on page load using Yates-Fisher (defined below)
cardvalues = shuffle(cardvalues);

$.each(cardvalues, function(index, element) {  //printing values to console for me to see during testing
  console.log(index, element);
});

$("#zero").text(cardvalues[0])
$("#one").text(cardvalues[1])
$("#two").text(cardvalues[2])
$("#three").text(cardvalues[3])
$("#four").text(cardvalues[4])
$("#five").text(cardvalues[5])
$("#six").text(cardvalues[6])
$("#seven").text(cardvalues[7])
$("#eight").text(cardvalues[8])
$("#nine").text(cardvalues[9])
$("#ten").text(cardvalues[10])
$("#eleven").text(cardvalues[11])
$("#twelve").text(cardvalues[12])
$("#thirteen").text(cardvalues[13])
$("#fourteen").text(cardvalues[14])
$("#fifteen").text(cardvalues[15])

var cardsFlipped = 0;
var firstFlip;
var secondFlip;

//$(this).off(".flip");


$(".tile").flip({    //test flip handler
  axis:'y',
  trigger: 'manual'
});

$("body").on("click", ".active-tile", keepTrack);

function keepTrack(){  //checking to see how many cards have been flipped and if comparison is needed
     console.log(cardsFlipped = cardsFlipped + 1);
     
     
  if (cardsFlipped === 1) {
      $(this).flip(true); //added
      $(this).addClass('flipped');
      $(this).removeClass('active-tile');
      // $(this).off("click");

      firstFlip = $(this).find('p').html();

      console.log('firstFlip', firstFlip);

      console.log("First Click registered_" + firstFlip);
  } else if (cardsFlipped === 2) {
      $(this).flip(true);  //added
      $(this).addClass('flipped');
      $(this).removeClass('active-tile');
      // $(this).off("click");
      secondFlip = $(this).find('p').html();

      console.log('secondFlip', secondFlip);

      console.log("Second Click registered_" + firstFlip +"_" + secondFlip);
      compare();
  }

  else{} 
  
  
};

function compare(){  //if-then statement to compare two card values and reset cardsFlipped value
  console.log("comparing now!")
  if (cardsFlipped === 2){
    decide();
    console.log(cardsFlipped = 0);    //returning cardsFlipped value to zero

  
  }
  else{ //do nothing

  }

};

var cardsMatched = 0;

function decide(){
  console.log("Comparing the two cards for Decide function");
  if (firstFlip !== undefined && secondFlip !== undefined && (firstFlip) === secondFlip){
    console.log("The Cards Match!")

    $(".flipped > div").addClass("grayedOut"); //gray out the matching cards
    $(".flipped").removeClass("tile"); //attempt to turn off handler on matched cards - doesn't work!!!!
    $(".flipped").removeClass("flipped"); //remove the "flipped" class so they aren't looped in again
    cardsMatched = cardsMatched +1
    sendAlert(); 
      }

  else {
    console.log("The Cards DO NOT Match!")
    cardsFlipped = 0;
    firstFlip = undefined;
    secondFlip = undefined;

    setTimeout(function(){  //so this doesn't happen too quickly to see both cards
      $(".flipped").flip(false); //flip the non-matching cards back over
      // $("body").on("click", ".tile", keepTrack);
      $(".flipped").addClass('active-tile');
      $(".flipped").removeClass("flipped"); //remove the "flipped" class so they aren't looped in again
    },1000);
  }
};


function sendAlert(){
  if (cardsMatched === 8){
    alert("You've won!")
  }

  else{}

};

//use span for the thing to match
//how to end the game with an alert?
//how to target the parent div of a specific selector

//Define Shuffle Function using Fisher-Yates Shuffle
function shuffle(cardvalues) {      
  var c = cardvalues.length, t, r;


  // While there remain elements to shuffle...
  while (0 !== c) {

    // Pick a remaining element...
    r = Math.floor(Math.random() * c);
    c -= 1;

    // And swap it with the current element.
    t = cardvalues[c];
    cardvalues[c] = cardvalues[r];
    cardvalues[r] = t;
  }

  return cardvalues;
}
// define array
// arr = shuffle(arr);
// console.log(arr);

//end Fisher-Yates Shuffle Definition

  });