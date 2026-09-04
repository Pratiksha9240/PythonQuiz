```javascript
// ==========================================
// PYTHON CODE QUEST
// Topics:
// input(), Arithmetic Operators,
// Multiline print()
// ==========================================

const questions = [

    // ==================================================
    // REMEMBER — Q1 to Q3
    // ==================================================

    {
        id: 1,
        bloom: "REMEMBER",
        difficulty: "Easy",

        question: "Which Python function is used to get information from the user?",

        options: [
            "print()",
            "display()",
            "input()",
            "get()"
        ],

        answer: 2,

        explanation:
            "input() is used to allow the user to enter information."
    },


    {
        id: 2,
        bloom: "REMEMBER",
        difficulty: "Easy",

        question: "Which operator is used for multiplication in Python?",

        options: [
            "+",
            "*",
            "/",
            "%"
        ],

        answer: 1,

        explanation:
            "The * operator is used for multiplication in Python."
    },


    {
        id: 3,
        bloom: "REMEMBER",
        difficulty: "Easy",

        question: "Which operator is used to find the remainder after division?",

        options: [
            "%",
            "/",
            "-",
            "*"
        ],

        answer: 0,

        explanation:
            "The % operator gives the remainder after division."
    },


    // ==================================================
    // UNDERSTAND — Q4 to Q6
    // ==================================================

    {
        id: 4,
        bloom: "UNDERSTAND",
        difficulty: "Easy",

        question: "What will happen when this code runs?",

        code: `name = input("Enter your name: ")
print(name)`,

        options: [
            "The program asks for the user's name and then displays what they entered.",
            "The program displays the word name.",
            "The program displays Enter your name: forever.",
            "The program does not ask the user anything."
        ],

        answer: 0,

        explanation:
            "input() asks the user for information. The value entered by the user is stored in name, and print(name) displays it."
    },


    {
        id: 5,
        bloom: "UNDERSTAND",
        difficulty: "Medium",

        question: "What is the result of this calculation?",

        code: `20 / 4`,

        options: [
            "24",
            "80",
            "5",
            "4"
        ],

        answer: 2,

        explanation:
            "The / operator performs division. 20 divided by 4 gives 5."
    },


    {
        id: 6,
        bloom: "UNDERSTAND",
        difficulty: "Medium",

        question: "What is the result of this calculation?",

        code: `17 % 5`,

        options: [
            "2",
            "3",
            "5",
            "12"
        ],

        answer: 0,

        explanation:
            "17 divided by 5 leaves a remainder of 2, so 17 % 5 gives 2."
    },


    // ==================================================
    // APPLY — Q7 to Q10
    // ==================================================

    {
        id: 7,
        bloom: "APPLY",
        difficulty: "Medium",

        question: "What will the program display if the user enters 25?",

        code: `number = input("Enter a number: ")
print(number)`,

        options: [
            "Enter a number: 25",
            "number",
            "25",
            "Nothing"
        ],

        answer: 2,

        explanation:
            "After the user enters 25, that value is stored in number. print(number) displays 25."
    },


    {
        id: 8,
        bloom: "APPLY",
        difficulty: "Medium",

        question: "What will this code display?",

        code: `print("Python")
print("is")
print("fun")`,

        options: [
            "Python is fun on one line",
            "Python on the first line, is on the second line, and fun on the third line",
            "Pythonisfun",
            "Python followed by fun only"
        ],

        answer: 1,

        explanation:
            "Each print() statement starts a new line, so the three words appear on three separate lines."
    },


    {
        id: 9,
        bloom: "APPLY",
        difficulty: "Medium",

        question: "What will this calculation produce?",

        code: `8 + 7 * 2`,

        options: [
            "30",
            "22",
            "23",
            "24"
        ],

        answer: 2,

        explanation:
            "Multiplication is performed before addition. 7 * 2 gives 14, and 8 + 14 gives 22."

    },


    {
        id: 10,
        bloom: "APPLY",
        difficulty: "Medium",

        question: "Which code correctly asks for a student's age and then displays it?",

        options: [
            `age = input("Enter your age: ")
print(age)`,

            `print(age)
age = input("Enter your age: ")`,

            `age = print("Enter your age: ")
input(age)`,

            `input = age("Enter your age: ")
print(age)`
        ],

        answer: 0,

        explanation:
            "The first solution uses input() to collect the age and print() to display the value entered by the user."
    },


    // ==================================================
    // ANALYZE — Q11 to Q13
    // ==================================================

    {
        id: 11,
        bloom: "ANALYZE",
        difficulty: "Hard",

        question: "A student wants the output to appear on three separate lines. What is wrong with this code?",

        code: `print("Name: Alex Age: 14 City: Pune")`,

        options: [
            "There is nothing wrong with the code, but it displays everything on one line.",
            "print() cannot display text.",
            "input() must be used instead of print().",
            "The code contains an arithmetic error."
        ],

        answer: 0,

        explanation:
            "The code is valid, but one print() statement displays everything on the same line. To create separate lines, the student needs separate print() statements or a multiline string."
    },


    {
        id: 12,
        bloom: "ANALYZE",
        difficulty: "Hard",

        question: "Which calculation gives the remainder when 29 is divided by 6?",

        options: [
            "29 / 6",
            "29 - 6",
            "29 * 6",
            "29 % 6"
        ],

        answer: 3,

        explanation:
            "The % operator is used when we want to find the remainder after division."
    },


    {
        id: 13,
        bloom: "ANALYZE",
        difficulty: "Hard",

        question: "A student writes this program. What will happen when it runs?",

        code: `name = input("Enter your name: ")
print("Hello")
print(name)`,

        options: [
            "The program asks for the user's name and then displays Hello and the entered name on separate lines.",
            "The program displays Hello and the word name.",
            "The program only displays the user's name.",
            "The program produces an error because input() and print() cannot be used together."
        ],

        answer: 0,

        explanation:
            "The program first collects the user's name. Then the first print() displays Hello and the second print() displays the entered name on the next line."
    },


    // ==================================================
    // EVALUATE — Q14
    // ==================================================

    {
        id: 14,
        bloom: "EVALUATE",
        difficulty: "Hard",

        question: "A student needs to create a simple shopping program. The program should ask for the price and quantity, calculate the total cost, and display the answer. Which plan is the most appropriate?",

        options: [
            "Use print() to ask for the values and input() to display the total.",
            "Use input() to collect the price and quantity, use * to calculate the total, and use print() to display it.",
            "Use input() to collect the price and quantity, use % to calculate the total, and use print() to display it.",
            "Use print() for everything without collecting any information."
        ],

        answer: 1,

        explanation:
            "input() collects the user's values, * calculates the total when price and quantity are involved, and print() displays the result."
    },


    // ==================================================
    // CREATE — Q15
    // ==================================================

    {
        id: 15,
        bloom: "CREATE",
        difficulty: "Hard",

        question: "You are creating a small Python introduction program. It should ask the user for their name and age, then display this information on separate lines. Which code correctly creates the program?",

        options: [
            `name = print("Enter your name: ")
age = print("Enter your age: ")

print(name, age)`,

            `name = input("Enter your name: ")
age = input("Enter your age: ")

print(name)
print(age)`,

            `name = input("Enter your name: ")
age = print("Enter your age: ")

print(name)
print(age)`,

            `print("Enter your name: ")
print("Enter your age: ")
input(name)
input(age)`
        ],

        answer: 1,

        explanation:
            "The correct solution uses input() to collect both pieces of information and separate print() statements to display them on different lines."
    }
];


// ==================================================
// GAME VARIABLES
// ==================================================

let currentQuestion = 0;
let score = 0;
let xp = 0;
let streak = 0;
let bestStreak = 0;

let bloomScores = {
    REMEMBER: 0,
    UNDERSTAND: 0,
    APPLY: 0,
    ANALYZE: 0,
    EVALUATE: 0,
    CREATE: 0
};


// ==================================================
// HTML ELEMENTS
// ==================================================

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionNumber = document.getElementById("questionNumber");
const difficulty = document.getElementById("difficulty");
const questionBadge = document.getElementById("questionBadge");
const questionText = document.getElementById("questionText");

const codeBox = document.getElementById("codeBox");
const codeText = document.getElementById("codeText");

const optionsContainer = document.getElementById("optionsContainer");

const feedback = document.getElementById("feedback");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");

const xpDisplay = document.getElementById("xpDisplay");
const streakDisplay = document.getElementById("streakDisplay");
const levelDisplay = document.getElementById("levelDisplay");

const progressFill = document.getElementById("progressFill");


// ==================================================
// START GAME
// ==================================================

startBtn.addEventListener("click", startGame);

function startGame() {

    currentQuestion = 0;
    score = 0;
    xp = 0;
    streak = 0;
    bestStreak = 0;

    bloomScores = {
        REMEMBER: 0,
        UNDERSTAND: 0,
        APPLY: 0,
        ANALYZE: 0,
        EVALUATE: 0,
        CREATE: 0
    };

    startScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    quizScreen.classList.add("active");

    updateStats();
    loadQuestion();
}


// ==================================================
// LOAD QUESTION
// ==================================================

function loadQuestion() {

    const q = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    difficulty.textContent =
        q.bloom;

    questionBadge.textContent =
        `CHALLENGE ${currentQuestion + 1} • ${q.difficulty}`;

    questionText.textContent =
        q.question;


    // Progress

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressFill.style.width =
        `${progress}%`;


    // Code box

    if (q.code) {

        codeBox.classList.remove("hidden");

        codeText.textContent =
            q.code;

    } else {

        codeBox.classList.add("hidden");

        codeText.textContent = "";
    }


    // Clear options

    optionsContainer.innerHTML = "";


    // Reset feedback

    feedback.classList.add("hidden");

    feedback.classList.remove(
        "correct-feedback",
        "wrong-feedback"
    );

    nextBtn.classList.add("hidden");


    // Create answer buttons

    q.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.classList.add("option");

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.addEventListener(
            "click",
            () => checkAnswer(index, button)
        );

        optionsContainer.appendChild(button);
    });
}


// ==================================================
// CHECK ANSWER
// ==================================================

function checkAnswer(
    selectedIndex,
    selectedButton
) {

    const q = questions[currentQuestion];

    const allOptions =
        document.querySelectorAll(".option");


    // Prevent multiple answers

    allOptions.forEach(button => {
        button.disabled = true;
    });


    // ==================================================
    // CORRECT
    // ==================================================

    if (selectedIndex === q.answer) {

        selectedButton.classList.add("correct");

        score++;

        streak++;

        if (streak > bestStreak) {
            bestStreak = streak;
        }

        bloomScores[q.bloom]++;


        // XP

        let earnedXP = 100;


        if (q.difficulty === "Medium") {
            earnedXP += 25;
        }

        if (q.difficulty === "Hard") {
            earnedXP += 50;
        }


        // Streak bonus

        if (streak >= 3) {
            earnedXP += 50;
        }

        if (streak >= 5) {
            earnedXP += 100;
        }


        xp += earnedXP;


        feedback.classList.add(
            "correct-feedback"
        );

        feedbackTitle.textContent =
            `🎉 Correct! +${earnedXP} XP`;

        feedbackText.textContent =
            q.explanation;
    }


    // ==================================================
    // WRONG
    // ==================================================

    else {

        selectedButton.classList.add("wrong");

        allOptions[q.answer]
            .classList.add("correct");

        streak = 0;


        feedback.classList.add(
            "wrong-feedback"
        );

        feedbackTitle.textContent =
            "❌ Not quite!";

        feedbackText.textContent =
            q.explanation;
    }


    updateStats();

    feedback.classList.remove("hidden");

    nextBtn.classList.remove("hidden");
}


// ==================================================
// NEXT QUESTION
// ==================================================

nextBtn.addEventListener(
    "click",
    nextQuestion
);

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showResults();

    } else {

        loadQuestion();
    }
}


// ==================================================
// UPDATE STATS
// ==================================================

function updateStats() {

    xpDisplay.textContent =
        xp;

    streakDisplay.textContent =
        streak;


    let level = 1;

    if (xp >= 500) {
        level = 2;
    }

    if (xp >= 1000) {
        level = 3;
    }

    if (xp >= 1500) {
        level = 4;
    }

    if (xp >= 2000) {
        level = 5;
    }


    levelDisplay.textContent =
        `Level ${level}`;
}


// ==================================================
// SHOW RESULTS
// ==================================================

function showResults() {

    quizScreen.classList.remove("active");

    resultScreen.classList.add("active");


    // Score

    document.getElementById("finalScore")
        .textContent =
        `${score}/${questions.length}`;


    // XP

    document.getElementById("finalXP")
        .textContent =
        xp;


    // Best streak

    document.getElementById("finalStreak")
        .textContent =
        bestStreak;


    // Percentage

    const percentage =
        (score / questions.length) * 100;


    let rank;
    let message;
    let icon;


    if (percentage >= 90) {

        rank = "Python Master 🐍";

        message =
            "Excellent work! You understand input, arithmetic operators, and output very well.";

        icon = "👑";
    }

    else if (percentage >= 75) {

        rank = "Code Ninja ⚔️";

        message =
            "Great job! Your Python fundamentals are getting strong.";

        icon = "🥷";
    }

    else if (percentage >= 60) {

        rank = "Python Explorer 🚀";

        message =
            "Good start! You understand many concepts, but a little more practice will help.";

        icon = "🚀";
    }

    else if (percentage >= 40) {

        rank = "Code Apprentice 🔧";

        message =
            "You understand some concepts, but you need more practice with input and operators.";

        icon = "🔧";
    }

    else {

        rank = "Python Rookie 🌱";

        message =
            "Review input(), arithmetic operators, and print() before moving to the next topic.";

        icon = "🌱";
    }


    document.getElementById("rank")
        .textContent =
        rank;

    document.getElementById("resultMessage")
        .textContent =
        message;

    document.getElementById("resultIcon")
        .textContent =
        icon;


    // ==================================================
    // BLOOM'S TAXONOMY BREAKDOWN
    // ==================================================

    document.getElementById("rememberScore")
        .textContent =
        `${bloomScores.REMEMBER}/3`;

    document.getElementById("understandScore")
        .textContent =
        `${bloomScores.UNDERSTAND}/3`;

    document.getElementById("applyScore")
        .textContent =
        `${bloomScores.APPLY}/4`;

    document.getElementById("analyzeScore")
        .textContent =
        `${bloomScores.ANALYZE}/3`;


    const evaluateCreate =
        bloomScores.EVALUATE +
        bloomScores.CREATE;

    document.getElementById("evaluateScore")
        .textContent =
        `${evaluateCreate}/2`;
}


// ==================================================
// RESTART GAME
// ==================================================

restartBtn.addEventListener(
    "click",
    () => {

        resultScreen.classList.remove("active");

        startScreen.classList.add("active");
    }
);
```
