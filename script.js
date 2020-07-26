// on final question, on form submit find the winner of the object and append/.text/.html to the finish page.
// listen for 'a' click and go to beginning.

// Element App
const app = {};

// Element Array
app.elements = [];

// Questions Object
app.questions = {
  questionOne: "If you could move to your dream home would you rather. . .",
  questionTwo: "You've got a selection of yummy meals, would you prefer to eat. . .",
  questionThree: "What personality traits best describes you?",
  questionFour: "What creature do you relate to most?",
  questionFive: "Which music do you prefer?"
}

// Answers Object
app.answers = {
  questionOne: [
    {
      answer: "Live in a condo in a big city",
      value: "air"
    },
    {
      answer: "Have a beach house and watch the waves everyday",
      value: "water"
    },
    {
      answer: "Hide away in a cabin in the woods",
      value: "earth"
    },
    {
      answer: "Move to mars and start the colony",
      value: "fire"
    },
    {
      src: "./assets/earth2.svg",
      name: "earth"
    },
  ],
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
      answer: "Indian curry, extra-hot please!",
      value: "fire"
    },
    {
      answer: "Mushroom pasta with whole wheat noodles",
      value: "earth"
    },
    {
      src: "./assets/air2.svg",
      name: "air"
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
    },
    {
      src: "./assets/fire2.svg",
      name: "fire"
    }
  ],
  questionFour: [
    {
      answer: "I like turtles",
      value: "water"
    },
    {
      answer: "Meerkats are my friends",
      value: "earth"
    },
    {
      answer: "I'd rather fly like an eagle",
      value: "air"
    },
    {
      answer: "Scorpions",
      value: "fire"
    },
    {
      src: "./assets/water2.svg",
      name: "water"
    }

  ],
  questionFive: [
    {
      answer: "Punk Rock",
      value: "fire"
    },
    {
      answer: "Enya, obviously",
      value: "earth"
    },
    {
      answer: "Anything that plays in a coffee shop",
      value: "air"
    },
    {
      answer: "Whale Song",
      value: "water"
    },
    {
      src: "./assets/earthWater.svg",
      name: "earth and water"
    }
  ]
  // End of Answers Object 
}

// Initialize
app.init = () => {
app.startButton()
}

// listen for 'start' button click and transition to question page
app.startButton = () => {
  $('.headerButton').on('click', () => {
    app.questionInit();
    $('.questionTemplate').slideDown();
    $('header').slideUp();
  })
  app.formSubmit();
}

// listen for form submit, store selected input in object
app.formSubmit = (num) => {
  $('form').on('submit', (e) => {
    e.preventDefault();
    const radioValue = $('input[type="radio"]:checked').val();

    app.elements.push(radioValue);
    console.log(app.elements);

    if (num === 'finished') {
      app.results();
    } else {
      app.questionInit(num);
    }
  })
}

// Checks what question to call next
app.questionInit = (num) => {
  if (num === 'questionTwo') {
    app.populateQuestion('questionTwo');
  } else if (num === 'questionThree') {
    app.populateQuestion('questionThree');
  } else if (num === 'questionFour') {
    app.populateQuestion('questionFour');
  } else if (num === 'questionFive') {
    app.populateQuestion('questionFive');
  } else {
    app.populateQuestion('questionOne');
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

  const image = app.answers[num][4];

  app.nextQuestion(questionNumber, question, optionOneAnswer, optionOneValue, optionTwoAnswer, optionTwoValue, optionThreeAnswer, optionThreeValue, optionFourAnswer, optionFourValue, image);

}

// Holds HTML markup and populates each new question page
app.nextQuestion = (num, que, aOne, vOne, aTwo, vTwo, aThree, vThree, aFour, vFour, image) => {
  $('.formPage').empty();
  $('.formPage').append(`

    <div class="content">
      <div class="textContainer">
        <h2>${que}</h2>
      </div>

      <form>
  
        <fieldset>
  
          <div>
            <label for="optionOne" class="options">${aOne}
              <input type="radio" checked="" name="choices" id="optionOne" value="${vOne}">
              <span class="selected"></span>
            </label>
          </div>    
              
          <div>
            <label for="optionTwo" class="options">${aTwo}
              <input type="radio" checked="" name="choices" id="optionTwo" value="${vTwo}">
              <span class="selected"></span>
            </label>
          </div>    

          <div>
            <label for="optionThree" class="options">${aThree}
              <input type="radio" checked="" name="choices" id="optionThree" value="${vThree}">
              <span class="selected"></span>
            </label>
          </div>    

          <div>
            <label for="optionFour" class="options">${aFour}
              <input type="radio" checked="" name="choices" id="optionFour" value="${vFour}">
              <span class="selected"></span>
            </label>
          </div>  

        </fieldset>
  
        <button type="submit">next question</button>
          
      </form>
    </div>

    <div class="imageContainer">
      <img src="${image.src}" alt="A symbol for the classical element, ${image.name}.">          
    </div>
  `)

  // Check what question just ran and queue the next one
  if (num === 'questionOne') {
    nextNum = 'questionTwo';
  } else if (num === 'questionTwo') {
    nextNum = 'questionThree';
  } else if (num === 'questionThree') {
    nextNum = 'questionFour';
  } else if (num === 'questionFour') {
    nextNum = 'questionFive';
  } else if (num === 'questionFive') {
    nextNum = 'finished';
  }

  app.formSubmit(nextNum);
}

app.results = () => {

  const result = app.elements;
  console.log(result);

  app.resetQuiz();
}

app.resetQuiz = () => {
  $('.questionTemplate').slideUp();
  $('footer').slideDown();

  $('.footerButton').on('click', () => {
    $('header').slideDown();
    $('footer').slideUp();

    app.elements = [];
  })
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