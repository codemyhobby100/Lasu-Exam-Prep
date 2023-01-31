let MCQS = [
    {
        question: "if x − 2016 = 0, then dx dy is",
        a: "2016",
        b: "1/2016",
        c: "∞",
        d: "0",
        answer: 3
    },
    {
        question: "Integrate x exp(3x) w.r.t x",
        a: "1/3 exp(3x) + 1/9 x exp(3x) + c",
        b: "3x exp(3x) + exp(3x) + c",
        c: "1/3 x exp(3x) – 1/9 exp(3x) + c",
        d: "3x exp(3x) − x 2 + c",
        answer: 2
    },
    {
        question: "A rule which assigns to each element of a set X a unique element of another set Y is known as",
        a: "limit",
        b: "integration",
        c: "differentiation",
        d: "function",
        answer: 3
    },
    {
        question: "Evaluate ∫ exp(x) sin xdx",
        a: "exp(x) cos x + c",
        b: "exp(x)(cos x − sin x) + c",
        c: "1/2 exp(x)(cos x + sin x) + c",
        d: "1/2 exp(x)(− cos x + sin x) + c",
        answer: 3
    },
    {
        question: "Integrate sin2 x w.r.t x",
        a: "1/2 (x− 1/2 sin 2x)+c",
        b: "1/2 (x+ 1/2 sin 2x)+c",
        c: "1/2 (x− 1/2 cos 2x)+c",
        d: "1/2 (x+ 1/2 cos 2x)+c",
        answer: 0
    },
    {
        question: "Evaluate limx→1",
        a: "3/2",
        b: "-2/3",
        c: "1",
        d: "1/3",
        answer: 0
    },
    {
        question: "Find the equation of the normal to the curve y = 3x 2 − 5x at the point (1, −2).",
        a: "y= x-3",
        b: "y=  -(x+1)",
        c: "y= -(x+3)",
        d: "y= -x+1",
        answer: 1
    },
    {
        question: "Differentiate x−y+1 = 0 w.r.t x",
        a: "1",
        b: "0",
        c: "x + x2/2",
        d: "1+x2",
        answer: 0
    },
    {
        question: "The slope of 8x 3 − sin x + 2 w.r.t x is",
        a: "24x2 + cos x",
        b: "x2 − sin x",
        c: "x2 + sin x",
        d: "24x2 − cos x",
        answer: 1
    },
    {
        question: "Evaluate limx→0 3x2 + 2x − 1",
        a: "3",
        b: "2",
        c: "-1",
        d: "0",
        answer: 2
    },
    {
        question: "Integrate x + exp(x) w.r.t x",
        a: "",
        b: "1 + exp(x)",
        c: "x exp(x)",
        d: "2x",
        answer: 0
    },
    {
        question: "Which of these is correct?",
        a: "d/dx (cot−1 ) = -1/1+x2",
        b: "d/dx (cot−1 ) = 1/1+",
        c: "d/dx (cot−1 ) = 1/1−x2",
        d: "d/dx (cot−1 ) = −1/x2+1",
        answer: 0
    },
    {
        question: "The differential coefficient of (x2 −1)3 is ",
        a: "6x(x2 −1)",
        b: "6x(x2 − 1)2",
        c: "3(x2 − 1)2",
        d: "12x2",
        answer: 1
    },
    {
        question: "Evaluate the integral ∫ (6 cos x − 4x 2 )dx",
        a: "6 sin x – 4/3 x3 + c",
        b: "6 cos x – 4/3 x2",
        c: "−6 sin x − 8x + c",
        d: "6 cos x – 4/3 x2 + c",
        answer: 0
    },
    {
        question: "Find dy/dx if y = exp(x3 )",
        a: "3x2",
        b: "exp(x3)",
        c: "3 exp(x3)",
        d: "3x2 exp(x3)",
        answer: 3
    },
    {
        question: "Find the derivative of 1/x2+4 w.r.t x",
        a: "1/2 arctan(x/2)",
        b: "2x ln(x2 + 4)",
        c: "−2x/(x2+4)2",
        d: "2x",
        answer: 2
    },
    {
        question: "Find the equation of the tangent to the curve 27y2 = 4x3 at the point (3p2 , 2p3 )",
        a: "y = 27px − 4p2 x2",
        b: "y = p3 − px",
        c: "y = 1/p + px + p2",
        d: "y = px − p3",
        answer: 2
    },
    {
        question: "The limit of the function y = tan x as x tends to infinity is",
        a: "0",
        b: "sec2x",
        c: "∞",
        d: "sec x tan x",
        answer: 1
    },
    {
        question: "Find dy/dx if x2y2 − x − y = 0",
        a: "2x2-1",
        b: "−2xy2/2x2y+1",
        c: "1−2xy2/2x2y−1",
        d: " 2x2y−1/2xy2−1",
        answer: 2
    },
    {
        question: "The integral ∫dx",
        a: "1/12 ln(3x4 − 5)6+c",
        b: "1/12 ln(3x4 − 5)5 + c",
        c: "−1/60(3x4−5)5",
        d: "(3x4−5)6 + c",
        answer: 2
    },
    {
        question: "Evaluate limx→(x-> pi) 8 cos x + 3 sin x",
        a: "11",
        b: " 11√2/2",
        c: "2π + 3π/4",
        d: "3π/4",
        answer: 1
    },
    {
        question: "Find d2y/dx2 if x + y + sin y = 112",
        a: "cos y/sin y+1",
        b: "0",
        c: "sin y/(1+cos y)3",
        d: "cos y/(1−sin y)2",
        answer: 2
    },
    {
        question: "Find d2y/dx2 at the point with abscissa 1 on the curve y = 1/t , x = 2t.",
        a: "-2",
        b: "0",
        c: "2",
        d: "4",
        answer: 3
    },
    {
        question: "The gradient of the tangent to the curve y =  at the point with abscissa 1 is",
        a: "1",
        b: "1/2",
        c: "1/3",
        d: "1/4",
        answer: 1
    },
    {
        question: "The rate of change of the area of a circle w.r.t its radius is the",
        a: "circumference",
        b: "radius",
        c: "chord",
        d: "sector",
        answer: 0
    },
    {
        question: "Find the equation of the tangent to the curve y = 2x2− x + 3 which is parallel to the line y = 3x − 2",
        a: "y = x+1",
        b: "y = x - 1",
        c: "y=3x+1",
        d: "y=3x-1",
        answer: 2
    },
    {
        question: "At turning point of f(x) = 0, which of these is not true?",
        a: "f'(x)=0",
        b: "f''(x)=1",
        c: "f''(X)<0",
        d: "f''(x)>0",
        answer: 0
    },
    {
        question: "Which of these is correct at the local maximum of f(x) = 0?",
        a: "f''(x)<1",
        b: "f''(x)<0",
        c: "f''(x)<-1",
        d: "f''(x)<∞",
        answer: 0
    },
    {
        question: "The maximum value of y = x3 − 6x2 + 9x is",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        answer: 3
    },
    {
        question: "The minimum value of y = x3 − 6x2 + 9x is",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        answer: 0
    },
];