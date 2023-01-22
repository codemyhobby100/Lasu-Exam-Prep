const quizData = [
    {
        question: "if x − 2016 = 0, then dx dy is",
        a: "2016",
        b: "1/2016",
        c: "∞",
        d: "0",
        correct: "d",
    },
    {
        question: "Integrate x exp(3x) w.r.t x",
        a: "1/3 exp(3x) + 1/9 x exp(3x) + c",
        b: "3x exp(3x) + exp(3x) + c",
        c: "1/3 x exp(3x) – 1/9 exp(3x) + c",
        d: "3x exp(3x) − x 2 + c",
        correct: "c",
    },
    {
        question: "A rule which assigns to each element of a set X a unique element of another set Y is known as",
        a: "limit",
        b: "integration",
        c: "differentiation",
        d: "function",
        correct: "d",
    },
    {
        question: "Evaluate ∫ exp(x) sin xdx",
        a: "exp(x) cos x + c",
        b: "exp(x)(cos x − sin x) + c",
        c: "1/2 exp(x)(cos x + sin x) + c",
        d: "1/2 exp(x)(− cos x + sin x) + c",
        correct: "d",
    },
    {
        question: "Integrate sin2 x w.r.t x",
        a: "1/2 (x− 1/2 sin 2x)+c",
        b: "1/2 (x+ 1/2 sin 2x)+c",
        c: "1/2 (x− 1/2 cos 2x)+c",
        d: "1/2 (x+ 1/2 cos 2x)+c",
        correct: "a",
    },
    {
        question: "Evaluate limx→1",
        a: "3/2",
        b: "-2/3",
        c: "1",
        d: "1/3",
        correct: "a",
    },
    {
        question: "Find the equation of the normal to the curve y = 3x 2 − 5x at the point (1, −2).",
        a: "y= x-3",
        b: "y=  -(x+1)",
        c: "y= -(x+3)",
        d: "y= -x+1",
        correct: "b",
    },
    {
        question: "Differentiate x−y+1 = 0 w.r.t x",
        a: "1",
        b: "0",
        c: "x + x2/2",
        d: "1+x2",
        correct: "a",
    },
    {
        question: "The slope of 8x 3 − sin x + 2 w.r.t x is",
        a: "24x2 + cos x",
        b: "x2 − sin x",
        c: "x2 + sin x",
        d: "24x2 − cos x",
        correct: "b",
    },
    {
        question: "Evaluate limx→0 3x2 + 2x − 1",
        a: "3",
        b: "2",
        c: "-1",
        d: "0",
        correct: "c",
    },
    {
        question: "Integrate x + exp(x) w.r.t x",
        a: "",
        b: "1 + exp(x)",
        c: "x exp(x)",
        d: "2x",
        correct: "a",
    },
    {
        question: "Which of these is correct?",
        a: "d/dx (cot−1 ) = -1/1+x2",
        b: "d/dx (cot−1 ) = 1/1+",
        c: "d/dx (cot−1 ) = 1/1−x2",
        d: "d/dx (cot−1 ) = −1/x2+1",
        correct: "a",
    },
    {
        question: "The differential coefficient of (x2 −1)3 is ",
        a: "6x(x2 −1)",
        b: "6x(x2 − 1)2",
        c: "3(x2 − 1)2",
        d: "12x2",
        correct: "b",
    },
    {
        question: "Evaluate the integral ∫ (6 cos x − 4x 2 )dx",
        a: "6 sin x – 4/3 x3 + c",
        b: "6 cos x – 4/3 x2",
        c: "−6 sin x − 8x + c",
        d: "6 cos x – 4/3 x2 + c",
        correct: "a",
    },
    {
        question: "Find dy/dx if y = exp(x3 )",
        a: "3x2",
        b: "exp(x3)",
        c: "3 exp(x3)",
        d: "3x2 exp(x3)",
        correct: "d",
    },
    {
        question: "Find the derivative of 1/x2+4 w.r.t x",
        a: "1/2 arctan(x/2)",
        b: "2x ln(x2 + 4)",
        c: "−2x/(x2+4)2",
        d: "2x",
        correct: "c",
    },
    {
        question: "Find the equation of the tangent to the curve 27y2 = 4x3 at the point (3p2 , 2p3 )",
        a: "y = 27px − 4p2 x2",
        b: "y = p3 − px",
        c: "y = 1/p + px + p2",
        d: "y = px − p3",
        correct: "d",
    },
    {
        question: "The limit of the function y = tan x as x tends to infinity is",
        a: "0",
        b: "sec2x",
        c: "∞",
        d: "sec x tan x",
        correct: "b",
    },
    {
        question: "Find dy/dx if x2y2 − x − y = 0",
        a: "2x2-1",
        b: "−2xy2/2x2y+1",
        c: "1−2xy2/2x2y−1",
        d: " 2x2y−1/2xy2−1",
        correct: "c",
    },
    {
        question: "The integral ∫dx",
        a: "1/12 ln(3x4 − 5)6+c",
        b: "1/12 ln(3x4 − 5)5 + c",
        c: "−1/60(3x4−5)5",
        d: "(3x4−5)6 + c",
        correct: "c",
    },
    {
        question: "Evaluate limx→(x-> pi) 8 cos x + 3 sin x",
        a: "11",
        b: " 11√2/2",
        c: "2π + 3π/4",
        d: "3π/4",
        correct: "b",
    },
    {
        question: "Find d2y/dx2 if x + y + sin y = 112",
        a: "cos y/sin y+1",
        b: "0",
        c: "sin y/(1+cos y)3",
        d: "cos y/(1−sin y)2",
        correct: "c",
    },
    {
        question: "Find d2y/dx2 at the point with abscissa 1 on the curve y = 1/t , x = 2t.",
        a: "-2",
        b: "0",
        c: "2",
        d: "4",
        correct: "d",
    },
    {
        question: "The gradient of the tangent to the curve y =  at the point with abscissa 1 is",
        a: "1",
        b: "1/2",
        c: "1/3",
        d: "1/4",
        correct: "b",
    },
    {
        question: "The rate of change of the area of a circle w.r.t its radius is the",
        a: "circumference",
        b: "radius",
        c: "chord",
        d: "sector",
        correct: "a",
    },
    {
        question: "Find the equation of the tangent to the curve y = 2x2− x + 3 which is parallel to the line y = 3x − 2",
        a: "y = x+1",
        b: "y = x - 1",
        c: "y=3x+1",
        d: "y=3x-1",
        correct: "c",
    },
    {
        question: "At turning point of f(x) = 0, which of these is not true?",
        a: "f'(x)=0",
        b: "f''(x)=1",
        c: "f''(X)<0",
        d: "f''(x)>0",
        correct: "a",
    },
    {
        question: "Which of these is correct at the local maximum of f(x) = 0?",
        a: "f''(x)<1",
        b: "f''(x)<0",
        c: "f''(x)<-1",
        d: "f''(x)<∞",
        correct: "a",
    },
    {
        question: "The maximum value of y = x3 − 6x2 + 9x is",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "d",
    },
    {
        question: "The minimum value of y = x3 − 6x2 + 9x is",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        correct: "a",
    },
    {
        question: "The point of inflexion of y = x4 − 4x3 is",
        a: "(1,5)",
        b: "(1,3)",
        c: "(2,3)",
        d: "(3,5)",
        correct: "c",
    },
    {
        question: "Integrate ∫sin 3x cos xdx",
        a: "1/3 cos 8x – 1/14 sin 7x + c",
        b: "1/6 sin 3x – 1/14 sin 7x + c",
        c: "1/8 cos 2x – 1/4 cos 4x + c",
        d: "− 1/8 cos 4x – 1/4 cos 2x + c",
        correct: "d",
    },
    {
        question: "Find the antiderivative of cos2x w.r.t x",
        a: "1/2 (x – 1/2 sin 2x)+c",
        b: "1/2 (x+ 1/2 sin 2x)+c",
        c: "1/2 (x− 1/2 cos 2x)+c",
        d: "1/2 (x + 1/2 cos 2x) + c",
        correct: "b",
    },
    {
        question: "Evaluate limx→1 x2+1/x2−1",
        a: "1",
        b: "-1",
        c: "0",
        d: "∞",
        correct: "a",
    },
    {
        question: "The expression for dy/dx when y = 6x2 sin x cos x is",
        a: "6x(sin 2x+x cos 2x)",
        b: "sin x+6x cos 2x",
        c: "2 cos x+6x",
        d: "sin x − cos x",
        correct: "a",
    },
    {
        question: "The slope of 8x3 − sin x + 2 w.r.t x is",
        a: "24x2 + cos x",
        b: "x2 − sin x",
        c: "x2 + sin x",
        d: "24x2 − cos x",
        correct: "d",
    },
    {
        question: "Which of these is not correct?",
        a: "d/dx (− csc x) = csc x cot x",
        b: "d/dx (tan x) = sec2 x",
        c: "d/dx (cot x) = − csc2 x",
        d: "d/dx (sec x) = tan x sec2 x",
        correct: "d",
    },
    {
        question: "Find the definite integral ",
        a: "1/7 (2x + 1) 2/7",
        b: "1/7 (2x + 1) 7/2",
        c: "7(2x + 1) 2/5",
        d: "5/2 (2x + 1) 2/7",
        correct: "c",
    },

];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
// This function is to load the quiz questions
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

// If the selected answer is equal to the correct quiz answer, increment score by 1
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})