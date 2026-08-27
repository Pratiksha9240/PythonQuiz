// ==========================================
// PYTHON CODE QUEST
// 15-QUESTION BLOOM'S TAXONOMY QUIZ
// ==========================================

const questions = [

    // ==================================================
    // REMEMBER — Q1 to Q3
    // Basic recall
    // ==================================================

    {
        id: 1,
        bloom: "REMEMBER",
        difficulty: "Easy",

        question: "Which of the following is the correct Python command to display the text Hello?",

        options: [
            'print("Hello")',
            'display("Hello")',
            'show("Hello")',
            'output("Hello")'
        ],

        answer: 0,

        explanation:
            'print() is the Python function used to display output on the screen.'
    },


    {
        id: 2,
        bloom: "REMEMBER",
        difficulty: "Easy",

        question: "Which data type is used to store a whole number such as 25?",

        options: [
            "int",
            "str",
            "float",
            "bool"
        ],

        answer: 0,

        explanation:
            "A whole number without a decimal point is stored as an integer (int)."
    },


    {
        id: 3,
        bloom: "REMEMBER",
        difficulty: "Easy",

        question: "Which of these is a valid Python variable name?",

        options: [
            "student_name",
            "student-name",
            "2student",
            "student name"
        ],

        answer: 0,

        explanation:
            "student_name is valid because underscores can be used in Python variable names. Spaces, hyphens, and starting with a number are not valid."
    },


    // ==================================================
    // UNDERSTAND — Q4 to Q6
    // Understanding concepts
    // ==================================================

    {
        id: 4,
        bloom: "UNDERSTAND",
        difficulty: "Easy",

        question: "What will this code display?",

        code: `name = "Riya"
print(name)`,

        options: [
            "Riya",
            "name",
            '"Riya"',
            "name = Riya"
        ],

        answer: 0,

        explanation:
            "The variable name stores the string Riya, so print(name) displays the value stored in the variable."
    },


    {
        id: 5,
        bloom: "UNDERSTAND",
        difficulty: "Medium",

        question: "Which statement correctly describes the difference between these two variables?",

        code: `age = 14
age_text = "14"`,

        options: [
            "age is an integer and age_text is a string",
            "Both variables are integers",
            "age is a string and age_text is an integer",
            "Both variables are strings"
        ],

        answer: 0,

        explanation:
            "14 without quotation marks is an integer, while \"14\" inside quotation marks is a string."
    },


    {
        id: 6,
        bloom: "UNDERSTAND",
        difficulty: "Medium",

        question: "Why does the following code join the two values instead of performing normal number addition?",

        code: `a = "10"
b = "5"

print(a + b)`,

        options: [
            "Both values are strings",
            "Both values are integers",
            "The print() function changes numbers into text",
            "Python cannot add two variables"
        ],

        answer: 0,

        explanation:
            'Both a and b contain strings, so + joins the text together instead of performing integer addition.'
    },


    // ==================================================
    // APPLY — Q7 to Q10
    // Applying knowledge
    // ==================================================

    {
        id: 7,
        bloom: "APPLY",
        difficulty: "Medium",

        question: "What will this program display?",

        code: `score = 80
bonus = 15

print(score + bonus)`,

        options: [
            "95",
            "8015",
            "80 + 15",
            "65"
        ],

        answer: 0,

        explanation:
            "score contains 80 and bonus contains 15. Adding the two integer values gives 95."
    },


    {
        id: 8,
        bloom: "APPLY",
        difficulty: "Medium",

        question: "What will be printed by this program?",

        code: `first = "Python"
second = "Rocks"

print(first, second)`,

        options: [
            "Python Rocks",
            "first second",
            "PythonRocks",
            '"Python" "Rocks"'
        ],

        answer: 0,

        explanation:
            "print() displays both values. When multiple values are separated by commas, print() places a space between them by default."
    },


    {
        id: 9,
        bloom: "APPLY",
        difficulty: "Medium",

        question: "What will be printed?",

        code: `length = 8
width = 5

area = length * width

print(area)`,

        options: [
            "40",
            "13",
            "85",
            "35"
        ],

        answer: 0,

        explanation:
            "The area is calculated using length × width, so 8 × 5 = 40."
    },


    {
        id: 10,
        bloom: "APPLY",
        difficulty: "Medium",

        question: "Which code correctly displays the player's name and score using the variables?",

        code: `player = "Kai"
score = 120`,

        options: [
            'print(f"{player} scored {score} points")',
            'print("player scored score points")',
            'print(player + " scored " + score + " points")',
            'print(f"player scored score points")'
        ],

        answer: 0,

        explanation:
            "The f-string correctly inserts both variable values into the sentence. The other choices either display the variable names as text or try to combine a string and integer directly."
    },


    // ==================================================
    // ANALYZE — Q11 to Q13
    // Breaking code apart and finding problems
    // ==================================================

    {
        id: 11,
        bloom: "ANALYZE",
        difficulty: "Hard",

        question: "What will happen when this code runs?",

        code: `score = 10
bonus = "5"

print(score + bonus)`,

        options: [
            "Python gives a TypeError because an integer and string cannot be added directly",
            "Python prints 15",
            "Python prints 105",
            "Python automatically converts both values to integers"
        ],

        answer: 0,

        explanation:
            "score is an integer while bonus is a string. Python does not automatically combine them using +, so the operation raises a TypeError."
    },


    {
        id: 12,
        bloom: "ANALYZE",
        difficulty: "Hard",

        question: "Look carefully at the code. Which variable has a different data type from the other three?",

        code: `a = 12
b = 7
c = 3.5
d = 20`,

        options: [
            "a",
            "b",
            "c",
            "d"
        ],

        answer: 2,

        explanation:
            "a, b, and d are integers because they are whole numbers. c is a float because it contains a decimal value."
    },


    {
        id: 13,
        bloom: "ANALYZE",
        difficulty: "Hard",

        question: "A student wants the output to be: My score is 90. What is the problem with their code?",

        code: `score = 90
print("My score is {score}.")`,

        options: [
            "The string is missing the f before the quotation mark",
            "score must be stored as a string",
            "print() cannot display variables",
            "Curly brackets cannot be used inside strings"
        ],

        answer: 0,

        explanation:
            "The curly brackets only insert the variable value when the string is an f-string. The f is missing before the opening quotation mark."
    },


    // ==================================================
    // EVALUATE — Q14
    // Choosing and judging a solution
    // ==================================================

    {
        id: 14,
        bloom: "EVALUATE",
        difficulty: "Hard",

        question: "A game stores a player's name and score. The values may change during the game. Which solution is the most reusable?",

        code: `player = "Alex"
score = 250`,

        options: [
            'print(f"{player} scored {score} points!")',
            'print("Alex scored 250 points!")',
            'print("player scored score points!")',
            'print(f"player scored score points!")'
        ],

        answer: 0,

        explanation:
            "Using the variables inside an f-string makes the output automatically change when player or score changes."
    },


    // ==================================================
    // CREATE — Q15
    // Constructing a solution
    // ==================================================

    {
        id: 15,
        bloom: "CREATE",
        difficulty: "Hard",

        question: "You are creating a Python program for a student's profile. The variables already contain the student's name and age. Which code creates the required output format: Alex is 14 years old.",

        code: `name = "Alex"
age = 14`,

        options: [
            'print(f"{name} is {age} years old.")',
            'print("Alex is 14 years old.")',
            'print(f"name is age years old.")',
            'print(name + " is " + age + " years old.")'
        ],

        answer: 0,

        explanation:
            "The first solution uses both variables and an f-string, so it creates the required output and will continue working if the name or age changes."
    }
];


// ==========================================
// GAME VARIABLES
// ==========================================

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


// ==========================================
// HTML ELEMENTS
// ==========================================

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


// ==========================================
// START GAME
// ==========================================

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


// ==========================================
// LOAD QUESTION
// ==========================================

function loadQuestion() {

    const q = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    difficulty.textContent = q.bloom;

    questionBadge.textContent =
        `CHALLENGE ${currentQuestion + 1} • ${q.difficulty}`;

    questionText.textContent = q.question;


    // Progress bar

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


    // Clear old options

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


// ==========================================
// CHECK ANSWER
// ==========================================

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


    if (selectedIndex === q.answer) {

        // -----------------------------
        // CORRECT
        // -----------------------------

        selectedButton.classList.add("correct");

        score++;

        streak++;

        if (streak > bestStreak) {
            bestStreak = streak;
        }

        bloomScores[q.bloom]++;


        // XP system

        let earnedXP = 100;


        // Streak bonus

        if (streak >= 3) {
            earnedXP += 50;
        }

        if (streak >= 5) {
            earnedXP += 100;
        }


        // Difficulty bonus

        if (q.difficulty === "Medium") {
            earnedXP += 25;
        }

        if (q.difficulty === "Hard") {
            earnedXP += 50;
        }


        xp += earnedXP;


        feedback.classList.add(
            "correct-feedback"
        );

        feedbackTitle.textContent =
            `🎉 Correct! +${earnedXP} XP`;

        feedbackText.textContent =
            q.explanation;

    } else {

        // -----------------------------
        // WRONG
        // -----------------------------

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


// ==========================================
// NEXT QUESTION
// ==========================================

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


// ==========================================
// UPDATE STATS
// ==========================================

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


// ==========================================
// SHOW RESULTS
// ==========================================

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


    // Streak

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
            "Excellent command of the fundamentals. You are ready for more challenging Python problems.";

        icon = "👑";

    }

    else if (percentage >= 75) {

        rank = "Code Ninja ⚔️";

        message =
            "Strong performance. Your fundamentals are solid, but there are still a few gaps to fix.";

        icon = "🥷";

    }

    else if (percentage >= 60) {

        rank = "Python Explorer 🚀";

        message =
            "You understand the basics, but you need more practice applying them together.";

        icon = "🚀";

    }

    else if (percentage >= 40) {

        rank = "Code Apprentice 🔧";

        message =
            "You know some of the syntax, but your understanding needs more practice.";

        icon = "🔧";

    }

    else {

        rank = "Python Rookie 🌱";

        message =
            "Your fundamentals need work. Go back, run the examples, and understand the output instead of memorising syntax.";

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


    // ==========================================
    // BLOOM'S TAXONOMY BREAKDOWN
    // ==========================================

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


// ==========================================
// RESTART
// ==========================================

restartBtn.addEventListener(
    "click",
    () => {

        resultScreen.classList.remove("active");

        startScreen.classList.add("active");
    }
);
