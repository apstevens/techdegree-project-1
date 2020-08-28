// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
    ['What is the largest country in the world?',
    'Russia'],
    ['Name the composer behind the soundtracks of The Lion King, Inception and Pirates of the Caribbean?',
    'Hanz Zimmer'],
    ['How many elements are in the periodic table?',
    '118'],
    ['At which venue is the British Grand Prix held?',
    'Silverstone'],
    ['Which film was the first to be recognised as part of the Marvel Cinematic Universe?',
    'Iron Man']
];
// 2. Store the number of questions answered correctly
const correct = [];
const incorrect = [];
let correctAnswers = 0;

/*
    3. Use a loop to cycle through each question
    - Present each question to the user
    - Compare the user's response to answer in the array
    - If the response matches the answer, the number of correctly answered questions increments by 1
 */

for ( let i = 0; i < questions.length; i++){
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);

    if (response === answer){
        correctAnswers++;
        correct.push(question);
    } else {
        incorrect.push(question);
    }
}

function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    }
    return items;
}


// 4. Display the correct answers to the user
let html = `<h1>You got ${correctAnswers} question(s) correct!</h1>
<h2>You got these questions right:</h2>
<ol>${ createListItems(correct) }</ol>

<h2>You got these questions wrong:</h2>
<ol>${createListItems(incorrect)}</ol>
`;
document.querySelector('main').innerHTML = html;