// quiz needs to be timed
// quiz will end when timer runs out

const startButton = document.getElementById('start')
startButton.addEventListener('click', startQuiz)

const questionBox = document.getElementById('question-box')

const questionElement = document.getElementById('question')
const answersBtns = document.getElementById('answers')

let randomQuestions, currentQuestion

const questions = [
    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            { text: 'correct answer', correct : true},
            { text: 'wrong answer', correct : false},
            { text: 'wrong answer', correct : false},
            { text: 'wrong answer', correct : false}
        ]
    },

    {
        question: 'What do arrays store in JavaScript?',
        answers: [
            { text: 'All of these', correct : true},
            { text: 'Numbers', correct : false},
            { text: 'Strings', correct : false},
            { text: 'Arrays', correct : false}
        ]
    },

    {
        question: 'Who developed JavaScript?',
        answers: [
            { text: 'Brendan Eich', correct : true},
            { text: 'Albert Einstein', correct : false},
            { text: 'Bill Gates', correct : false},
            { text: 'Erlich Bochman', correct : false}
        ]
    },

    {
        question: 'Which of following is not a JavaScript element?',
        answers: [
            { text: 'div', correct : true},
            { text: 'loop', correct : false},
            { text: 'string', correct : false},
            { text: 'boolean', correct : false}
        ]
    },
    
    {
        question: 'Which HTML tag does the JavaScript file get linked in?',
        answers: [
            { text: 'head', correct : true},
            { text: 'body', correct : false},
            { text: 'div', correct : false},
            { text: 'footer', correct : false}
        ]

    }
]

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    questionBox.classList.remove('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    nextQuestion()

// once start button is pressed, quiz will start
// quiz starts by showing window with question and answer
}

function nextQuestion() {
    showQuestion(randomQuestions[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}
function selectAnswer() {
    //will show correct or wrong answer chosen
    //will move to next question once answer is selected
    // if wrong answer is selected, time will be taken off
}

