// on final question, on form submit find the winner of the object and append/.text/.html to the finish page.
// listen for 'a' click and go to beginning.

// Element App
const app = {};

// Element Object
app.elements = [];

// Questions
app.questions = {
  questionOne: "If you could move to your dream home would you rather. . .",
  questionTwo: "You've got a selection of yummy meals, would you prefer to eat. . .",
  questionThree: "In the morning you can't live without. . .",
  questionFour: "Your favourite creature is. . .",
  questionFive: "When you disagree with something you. . ."
}

// Answers
app.answers = {
  questionOne: [],
  questionTwo: [
    {
      answer: "Puff pastry with whipped cream",
      value: "air"
    },
    {
      answer: "Oysters with lemon and horseradish",
      value: "water"
    },
    {
      answer: "Mushroom pasta with whole wheat noodles",
      value: "earth"
    },
    {
      answer: "Indian Curry, extra-hot please!",
      value: "fire"
    }
  ],
  questionThree: [],
  questionFour: [],
  questionFive: []
}

// Initialize
app.init = () => {
app.start()
}

// listen for 'start' click and transition to question page
app.start = () => {
  $('.headerButton').on('click', () => {
    $('.questionTemplate').slideDown();
    $('header').slideUp();
  })
  
  app.formEvent();
}

// listen for form submit, store selected input in object, transition to next question, repeat 4 times

app.formEvent = () => {
  $('button').on('click', (e) => {
    e.preventDefault();
    const radioValue = $('input[type="radio"]:checked').val();

    app.elements.push(radioValue);
    app.quizPageTwo();
  })
}

// Make a next page function that is populated by information each button click



app.quizPageTwo = () => {
  const questionTwo = app.questions.questionTwo;
  const answerTwo = app.answers.questionTwo;

  $('h2').text(questionTwo);

  $('[for="optionOne"]').html(`
  ${answerTwo[0].answer}
  <input type="radio" checked="" name="choices" id="optionOne" value="${answerTwo[0].value}">
  <span class="selected"></span>
  `);

  $('[for="optionTwo"]').html(`
  ${answerTwo[1].answer}
  <input type="radio" checked="" name="choices" id="optionTwo" value="${answerTwo[1].value}">
  <span class="selected"></span>
  `);

  $('[for="optionThree"]').html(`
  <input type="radio" checked="" name="choices" id="optionThree" value="${answerTwo[2].value}">
  <span class="selected"></span>
  ${answerTwo[2].answer}
  `);

  $('[for="optionFour"]').html(`
  <input type="radio" checked="" name="choices" id="optionFour" value="${answerTwo[3].value}">
  <span class="selected"></span>
  ${answerTwo[3].answer}
  `);

}









// push all the answers onto the array. sort the array and compare the amount of strings













// Document Ready
$(document).ready(() => {
  app.init();
})








// Loop through 5 possible outcomes to determine quiz answer
    // If a category has the highest score 

// consider using an array instead to store scores!!!


// for (let element in outcomes) {
//   console.log(outcomes[element]);
// }

// .val()


// determine which category has the highest score

// outcooomes.sort();
// console.log(outcooomes);


// const messy = outcomes.messy;


// if (messy >= tidy & messy >= gourmet && messy >= basic)


// for (let i = 0; i < 5; i++) {



// }



// Stretch Goals:
// Timer counting down for each question, no point if it reaches 0