//get readlineSync
var readlineSync = require('readline-sync');

//variables
var score=0;
var highScores=[
  {
    name:'Rohit',
    score:'4'
  },
    {
    name:'Loukik',
    score:'3'
  },
  {
    name:'Ajit',
    score:'2'
  }
]

//get username and welcome the user
var userName = readlineSync.question('May I know your name? ');
console.log("Welcome "+userName+"!, Lets play DO YOU KNOW YOGESH? ");
console.log('------------------------');


//Defining play function

function play(question,answer){

  var userAnswer=readlineSync.question(question);

  if (userAnswer===answer){
    console.log('Right Answer.');
    score = score+1;
  }
  else{
    console.log('Wrong Answer.');
  }
  console.log('Current score is '+score);
  console.log('------------------------');
}

// question array
var questions=[
  {
    question: 'Where do I live? ',
    answer: 'Kolhapur'
  },
  {
    question: 'Where do I work? ',
    answer: 'ADCET'
  },
  {
    question: 'What is my hobby? ',
    answer: 'Reading'
  },
  {
    question: 'Do I like to code? ',
    answer: 'Yes'
  },
  {
    question: 'Am I older than 25? ',
    answer: 'Yes'
  }
]

//calling play() function

for (i=0; i<questions.length;i++){
  currentQuestion=questions[i];

  play(currentQuestion.question,currentQuestion.answer);
}

//Final score 
console.log('Yay, You finished the game.');
console.log('Your score is '+score);
console.log('------------------------');

//Display High scorers 
console.log('High scorers')
for(i=0;i<highScores.length;i++){
  currentHighScorer=highScores[i];
  console.log(currentHighScorer.name+':'+currentHighScorer.score);
}
console.log('------------------------');

//check wheather user ghas beaten high score
for (i=0;i<highScores.length;i++){
  currentHighScorer=highScores[i];

  if(score>currentHighScorer.score){
    console.log('Congratualations!, You have beaten '+currentHighScorer.name);
    console.log('Please send me screenshot of this to add your name to High Scorers');
    break;
  }
}
