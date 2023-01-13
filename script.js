const quizData = [
    {
        question: " Which of the following expressions is semiinterquartile range",
        a: "1/2 (Upper quartile - Median)",
        b: "1/2 (Upper quartile - Lower quartile) ",
        c: "Mode - Mean",
        d: "Highest data value - Lowest data value",
        correct: "b",
    },
    {
        question: "If the mean of -1, 0, 9, 3, K, and 5 is 2, whereK is a constant, obtain the median of the set of numbers.",
        a: "6",
        b: "Impossible",
        c: "1",
        d: "3/2",
        correct: "d",
    },
    {
        question: "The ages, in years, of 5 boys are 5, 6, 6, 8, and 10. Calculate, correct to one decimal place, the standard deviation of their ages.",
        a: " 1.9 years",
        b: " 1.8 years",
        c: "3.2 years",
        d: "2.6 years",
        correct: "d"
    },
    {
        question: "The mean score in a class test is 43, and the standard deviation is 4.5. Calculate, correct to 2 decimal places, the standardized value of a score of 60",
        a: "0",
        b: "1",
        c: "3.78",
        d: "-3.78",
        correct: "c",
    },
    {
        question: "Some students scored the following marks in a test, 2, 4, 2, 3, 6, 6, 2, 4, 3, 4, 2, 6, 5, 2, 4, 3, 2, 6, 2, 3. What is the mode of this test?",
        a: "6",
        b: "3",
        c: "4",
        d: "2",
        correct: "d",
    },
    {
        question: "If 8 is the mean of the following set of numbers, 3, 15, 5, 9, 12, 6, 10, 8 and 4. Calculate the mean deviation of the numbers.",
        a: "0",
        b: "3.71",
        c: "3.11",
        d: "3.5",
        correct: "c",
    },
    {
        question: "The mean score in a class test is 43, and the standard deviation is 4.5. Calculate, correct to 2 decimal places, the standardized value of a score of 60",
        a: "0",
        b: "1",
        c: "3.78",
        d: "-3.78",
        correct: "c",
    },
    {
        question: " Calculate the inter-quartile range of the following set of marks: 3, 3, 1, 2, 4, 6, 2, 2, 4 and 3.",
        a: "1",
        b: "2",
        c: "2 1/2",
        d: "3",
        correct: "b",
    },
    {
        question: "Given the following pair of data, obtained for two variables, X and Y : 40, 27); (50, 60); (60, 75); (70, 80); (80, 67) and (90, 58), and by sketching the scatter diagram of the given data, what type of relationship seem to exit between X and Y ? ",
        a: "Direct",
        b: "Inverse",
        c: "Linear",
        d: "Curvilinear",
        correct: "d",
    },
    {
        question: "Given the following pair of data, obtained for two variables, X and Y : (40, 27); (50, 60); (60, 75); (70, 80); (80, 67) and (90, 58), and assuming a linear relationship exit between X and Y , determine, by the method of Least-squares, the values of the regression constant.",
        a: "27.6",
        b: "-27.6",
        c: "0.52",
        d: "-0.52",
        correct: "a",
    },
    {
        question: "Given the following pair of data, obtained for two variables, X and Y : (40, 27); (50, 60); (60, 75); (70, 80); (80, 67) and (90, 58), and by developing the Least-squares estimated linear regression equation, predict the average value of Y when x = 65.",
        a: "61.2",
        b: "64.48",
        c: "68.8",
        d: "65.52",
        correct: "a",
    },
    {
        question: "Given the following pair of data, obtained for two variables, X and Y : (40, 27); (50, 60); (60, 75); (70, 80); (80, 67) and (90, 58). Calculate the Pearson's correlation coefficient of X and Y . ",
        a: "27%",
        b: "-27%",
        c: "0.52",
        d: "-0.52",
        correct: "c",
    },
    {
        question: "Given the following pair of data, obtained for two variables, X and Y : (40, 27); (50, 60); (60, 75); (70, 80); (80, 67) and (90, 58). Calculate the coefficient of determination of X and Y .",
        a: "0.52",
        b: "-0.52",
        c: "27%",
        d: "-27%",
        correct: "c",
    },
    {
        question: "Given the following pair of data, obtained for two variables, X and Y : (40, 27); (50, 60); (60, 75); (70, 80); (80, 67) and (90, 58). Compute the standard error of estimation of Y on X.",
        a: "1",
        b: "6.23",
        c: "18.0",
        d: "0",
        correct: "c",
    },
    {
        question: "Given the following pair of data, obtained for two variables, X and Y : (40, 27); (50, 60); (60, 75); (70, 80); (80, 67) and (90, 58). Obtain the Spearman’s rank correlation coefficient.",
        a: " 0.27",
        b: "-0.26",
        c: "0.26",
        d: "-0.27",
        correct: "c",
    },
    {
        question: " Which of the following is true about the construction of a pie-chart? The angles of the sectors in a pie-chart are proportional to the . . .?",
        a: " total frequency",
        b: "class width",
        c: "class frequency",
        d: "class mid-point",
        correct: "c",
    },
    {
        question: "A component bar-chart shows at a glance, the . . ..",
        a: "comparison of the frequency of items within each group",
        b: " comparison of the frequency of items among different groups",
        c: " relative frequency of the items within each group",
        d: "relative frequency of the items among different groups",
        correct: "b",
    },
    {
        question: "Four bottles have masses of 2, 4, 6 and 8 Kg. Calculate, correct to 3 significant figures, the variance of the marks.",
        a: "4.00",
        b: "5.00",
        c: "6.66",
        d: "25",
        correct: "b",
    },
    {
        question: "The extent to which a set of data spread around its mean or average value is .......",
        a: " dispersion. ",
        b: "measures of scale ",
        c: "variation",
        d: "measures of central tendency",
        correct: "c",
    },
    {
        question: "In the frequency distribution of a certain quantitative variable (rounded-off to the nearest wholenumber), the width of an interval with class limits 50 and 54 is ....... .",
        a: "5",
        b: "49.5",
        c: "4",
        d: "54.5",
        correct: "a",
    },
    {
        question: "Seven pieces of iron rod have lengths 85, 86, 88, 92, 95, 100 and 105 cm. Obtain their mean length.",
        a: "89",
        b: "92",
        c: "93",
        d: "95",
        correct: "c",
    },
    {
        question: "Which of the following is not true? The larger the numerical value of a measure of scale, the larger the ....... .",
        a: "data spread",
        b: "reliability of generalization concerning the data ",
        c: "risk on taking decisions concerning the data",
        d: "uncertainty about the data ",
        correct: "b",
    },
    {
        question: "The smallest value of any measure of scale is .......",
        a: "0",
        b: "-1",
        c: "−∞",
        d: "1",
        correct: "c",
    },
    {
        question: "The harmonic mean of 2,4 and 6 is ....... .",
        a: "0.9167",
        b: "6",
        c: "0.3056",
        d: "3.27",
        correct: "d",
    },
    {
        question: "Which of the following summary values will give us an indication about the distributional shape of data?",
        a: " Mean and median",
        b: "Skewness and kurtosis",
        c: "Quartiles and percentiles",
        d: "Mean deviation and standard deviation ",
        correct: "b",
    },
    {
        question: "Range is a measure of ................",
        a: " Location",
        b: "Dispersion",
        c: "Skewness",
        d: " Central values",
        correct: "b",
    },
    {
        question: "The nine points of a distribution that divides a distribution into ten equal parts are called .......",
        a: "decimals",
        b: "percentiles",
        c: "deciles",
        d: "quartiles",
        correct: "c",
    },
    {
        question: "The mean score in a class test is 43, and the standard deviation is 4.5. Calculate, correct to 2 decimal places, the standardized value of a score of 60.",
        a: "0",
        b: "-1",
        c: "-3.78",
        d: "3.78",
        correct: "d",
    },
    {
        question: "In how many different ways can the letters of the word ‘BEGINNING’ be arranged?",
        a: "45360",
        b: "30240",
        c: "362880",
        d: "15120",
        correct: "d",
    },
    {
        question: "The probabilities of three athletes A, B, C winning a race have been found to be 0.2, 0.5 and 0.3 respectively. What is the probability that all three athletes will tie for a first position in any race?",
        a: "0",
        b: "0.74",
        c: "0.56",
        d: "0.67",
        correct: "a",
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