// on final question, on form submit find the winner of the object and append/.text/.html to the finish page.
// listen for 'a' click and go to beginning.

// Element App
const app = {};

// Element Object
app.elements = [];

// Questions
app.questions = {
  questionTwo: "You've got a selection of yummy meals, would you prefer to eat. . .",
  questionThree: "What personality traits best describes you?",
  questionFour: "What creature do you relate to most?",
  questionFive: "Which music do you prefer?"
}

// Answers
app.answers = {
  questionTwo: [
    {
      answer: "Oysters with lemon and horseradish",
      value: "water"
    },
    {
      answer: "Puff pastry with whipped cream",
      value: "air"
    },
    {
      answer: "Indian Curry, extra-hot please!",
      value: "fire"
    },
    {
      answer: "Mushroom pasta with whole wheat noodles",
      value: "earth"
    }
  ],
  questionThree: [
    {
      answer: "Practical, focused, and disiplined",
      value: "earth"
    },
    {
      answer: "Curious, observant and restless",
      value: "air"
    },
    {
      answer: "Impulsive, humourous and dramatic",
      value: "fire"
    },
    {
      answer: "Emotional, empathetic and creative",
      value: "water"
    }
  ],
  questionFour: [
    {
      answer: "I like Turtles!",
      value: "water"
    },
    {
      answer: "Meerkats really vibe with me",
      value: "earth"
    },
    {
      answer: "Id rather fly like an Eagle",
      value: "air"
    },
    {
      answer: "Scorpions!!",
      value: "fire"
    }
  ],
  questionFive: [
    {
      answer: "Punk Rock!",
      value: "fire"
    },
    {
      answer: "Enya to the end of time",
      value: "earth"
    },
    {
      answer: "Anything that plays in a coffee shop",
      value: "air"
    },
    {
      answer: "Whale Song",
      value: "water"
    }
  ]
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

  // next question to call after hard-coded question one
  const question = 'questionTwo'; 
  app.formSubmit(question);
}

// listen for form submit, store selected input in object
app.formSubmit = (num) => {
  $('form').on('submit', (e) => {
    e.preventDefault();
    const radioValue = $('input[type="radio"]:checked').val();

    app.elements.push(radioValue);
    console.log(app.elements);

    app.questionInit(num);
  })
}
// The form submit is remembering all the preivious run throughs and doubling them


// Checks what question to call next
app.questionInit = (num) => {
  if (num === 'questionTwo') {
    app.populateQuestion('questionTwo');
    console.log('q2')
  } else if (num === 'questionThree') {
    app.populateQuestion('questionThree');
    console.log('q3');
  } else if (num === 'questionFour') {
    app.populateQuestion('questionFour');
    console.log('q4');
  } else if (num === 'questionFive') {
    app.populateQuestion('questionFive');
    console.log('q5');
  }
}

// Inserts the question number into notation
app.populateQuestion = (num) => {
  const questionNumber = num;
  const question = app.questions[num];

  const optionOneAnswer = app.answers[num][0].answer;  
  const optionOneValue = app.answers[num][0].value; 

  const optionTwoAnswer = app.answers[num][1].answer;
  const optionTwoValue = app.answers[num][1].value;  

  const optionThreeAnswer = app.answers[num][2].answer;
  const optionThreeValue = app.answers[num][2].value;  

  const optionFourAnswer = app.answers[num][3].answer;
  const optionFourValue = app.answers[num][3].value;  

  app.nextQuestion(questionNumber, question, optionOneAnswer, optionOneValue, optionTwoAnswer, optionTwoValue, optionThreeAnswer, optionThreeValue, optionFourAnswer, optionFourValue);

}

// Holds HTML markup and populates each new question page
app.nextQuestion = (num, q, aOne, vOne, aTwo, vTwo, aThree, vThree, aFour, vFour) => {
  $('h2').text(q);

  $('[for="optionOne"]').html(`
  ${aOne}
  <input type="radio" checked="" name="choices" id="optionOne" value="${vOne}">
  <span class="selected"></span>
  `);

  $('[for="optionTwo"]').html(`
  ${aTwo}
  <input type="radio" checked="" name="choices" id="optionTwo" value="${vTwo}">
  <span class="selected"></span>
  `);

  $('[for="optionThree"]').html(`
  ${aThree}
  <input type="radio" checked="" name="choices" id="optionThree" value="${vThree}">
  <span class="selected"></span>
  `);

  $('[for="optionFour"]').html(`
  ${aFour}
  <input type="radio" checked="" name="choices" id="optionFour" value="${vFour}">
  <span class="selected"></span>
  `);

  // Check what question just ran and queue the next one
  if (num === 'questionTwo') {
    nextNum = 'questionThree'
  } else if (num === 'questionThree') {
    nextNum = 'questionFour'
  } else if (num === 'questionFour') {
    nextNum = 'questionFive'
  }
  app.formSubmit(nextNum);
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