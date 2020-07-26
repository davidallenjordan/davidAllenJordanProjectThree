// This script asks the user questions stored in an object and saves the values
// Once all the questions have been answered the outcome is calculated and the matched result is taken from an object and displayed to the user





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

// Winners Object
app.winners = {
  earth: 
  {
    header: 'Earth',
    text: 'You are a grounded, diciplined and focused. You like to stay organized and appreciate structure in your life. You have an excellent eye for details and some may say you are a perfectionist. Congratulations Earthling!',
    src: './assets/earth3.svg'
  },
  air:
  {
    header: 'Air',
    text: 'You are observant and curious. You can take care of yourself and are independant. Air elementals are brilliant and always looking to enhanse themselves with knowledge. Sometimes you have a difficult time finding connections in others and just want to be understood.',
    src: './assets/air3.svg'
  },
  water:
  {
    header: 'Water',
    text: 'You are an emotional being. You are empathetic and find solace in exploring spiritualism and metaphysics. You find happiness in creating but find it difficult to share your thoughts and ideas. You make people vulnerable and can see their authenticity.',
    src: './assets/water3.svg'
  },
  fire:
  {
    header: 'Fire',
    text: 'You are naturally outgoing and perfomative. You act from the heart and are impulsive and dramatic. People find you inspirational and humourous but you need to be careful not to grow self-conscious from over-expressing yourself.',
    src: './assets/fire3.svg'
  },
  tie:
  {
    header: 'Balanced',
    text: 'You take many qualities from all the elements. You are balanced and find yourself at home in nature or a busy city',
    src: './assets/balanced.svg'
  },

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
      app.getResult();
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
            <label for="optionOne" class="options" tabindex="0">${aOne}
              <input type="radio" checked="" name="choices" id="optionOne" value="${vOne}">
              <span class="selected"></span>
            </label>
          </div>    
              
          <div>
            <label for="optionTwo" class="options" tabindex="0">${aTwo}
              <input type="radio" checked="" name="choices" id="optionTwo" value="${vTwo}">
              <span class="selected"></span>
            </label>
          </div>    

          <div>
            <label for="optionThree" class="options" tabindex="0">${aThree}
              <input type="radio" checked="" name="choices" id="optionThree" value="${vThree}">
              <span class="selected"></span>
            </label>
          </div>    

          <div>
            <label for="optionFour" class="options" tabindex="0">${aFour}
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

// Determine the array value that occurs most frequently
app.getResult = () => {
  const result = app.elements;

  let numOfAir = result.filter((val) => {
    return val === 'air';
  })
  console.log(numOfAir);
  numOfAir = numOfAir.length
  console.log(numOfAir);

  let numOfWater = result.filter((val) => {
    return val === 'water';
  })
  numOfWater = numOfWater.length

  let numOfEarth = result.filter((val) => {
    return val === 'earth';
  })
  numOfEarth = numOfEarth.length

  let numOfFire = result.filter((val) => {
    return val === 'fire';
  })
  numOfFire = numOfFire.length


  if (numOfAir > numOfWater && numOfAir > numOfFire && numOfAir > numOfEarth) {
    winner = numOfAir;
  } else if (numOfWater > numOfAir && numOfWater > numOfFire && numOfWater > numOfEarth) {
    winner = numOfWater;
  } else if (numOfEarth > numOfAir && numOfEarth > numOfWater && numOfEarth > numOfFire) {
    winner = numOfEarth;
  } else if (numOfFire > numOfEarth && numOfFire > numOfWater && numOfFire > numOfAir) {
    winner = numOfFire
  } else {
    winner = 'tie';
  }

  app.displayResult(winner, numOfAir, numOfEarth, numOfWater, numOfFire);
}

// Displays the  array on the page
app.displayResult = (win, numOfAir, numOfEarth, numOfWater, numOfFire) => {
  let element;
  const winner = app.winners;

  if (win === numOfAir) {
    element = 'air';
  } else if (win === numOfEarth) {
    element = 'earth';
  } else if (win === numOfWater) {
    element = 'water';
  } else if (win === numOfFire) {
    element = 'fire';
  } else if (win === 'tie') {
    element = 'tie';
  }

  $('.result').empty();
  $('.result').append(`
    <div class="textContainer">
      <h3>${winner[element].header}</h3>
      <p>${winner[element].text}</p>
    </div>

    <div class="imageContainer">
      <img src="${winner[element].src}" alt="A symbol for the classical element, earth.">
    </div>

    <a class="footerButton" href="#void">take quiz again</a>
  `)

  app.resetQuiz()
}

// Takes the user back to the start page and refreshes values
app.resetQuiz = () => {
  $('.questionTemplate').slideUp();
  $('footer').slideDown();

  $('.footerButton').on('click', () => {
    $('header').slideDown();
    $('footer').slideUp();

    app.elements = [];
  })
}

// Document Ready
$(document).ready(() => {
  app.init();
})