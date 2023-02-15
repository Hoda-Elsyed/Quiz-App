const quizData = [
    {
            question: "What is the most used programming language in 2019?",
        a: "Java",
            b: "C",
        c: "Python",
            d: "JavaScript",
        correct: "d",
        },
    {
            question: "Who is the President of US?",
        a: "Florin Pop",
            b: "Donald Trump",
        c: "Ivan Saldano",
            d: "Mihai Andrei",
        correct: "b",
        },
    {
            question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
            b: "Cascading Style Sheet",
        c: "Jason Object Notation",
            d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
        },
    {
        question: "What year was JavaScript launched?",
            a: "1996",
        b: "1995",
            c: "1994",
        d: "none of the above",
            correct: "b",
    },
    ];

const question = document.querySelector('.question')
const answerA = document.getElementById('a_text')
const answerB = document.getElementById('b_text')
const answerC = document.getElementById('c_text')
const answerD = document.getElementById('d_text')

const sumbit = document.querySelector('.submit')
const container = document.querySelector('.container')
const inputs = document.querySelectorAll('input')
let rightAnswers=0;
let currentQuiz = 0;

startQuiz()

function startQuiz(){
    inputs.forEach(input=>input.checked = false)

    question.innerText = quizData[currentQuiz].question
    answerA.innerText = quizData[currentQuiz].a
    answerB.innerText = quizData[currentQuiz].b
    answerC.innerText = quizData[currentQuiz].c
    answerD.innerText = quizData[currentQuiz].d
}

sumbit.addEventListener('click', ()=>{
    const score = validateAnswer()
    if(score == quizData[currentQuiz].correct){
        rightAnswers++
        console.log(rightAnswers);
    }
    currentQuiz++

    if(currentQuiz < quizData.length){
        startQuiz()
    }else{
        container.innerHTML = `
        <h2>You answered ${rightAnswers}/${quizData.length} questions correctly </h2>
        <button onclick="location.reload()" class="submit">Reload</button>
     `
    }
})

function validateAnswer(){
    let answer;
    inputs.forEach(input =>{
        if(input.checked){
            answer = input.id
        }
    })
    return answer
}
