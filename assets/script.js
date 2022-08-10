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
        question: 'What is a string in Javascript?',
        answers: [
            { text: 'correct answer', correct : true},
            { text: 'wrong answer', correct : false},
            { text: 'wrong answer', correct : false},
            { text: 'wrong answer', correct : false}
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

