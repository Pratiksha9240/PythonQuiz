// ==========================================
// PYTHON CODE QUEST
// ==========================================

// -----------------------------
// QUIZ QUESTIONS
// -----------------------------

const questions = [

    // ======================================
    // REMEMBER - Q1 to Q3
    // ======================================

    {
        id: 1,
        bloom: "REMEMBER",
        difficulty: "Easy",
        question: "Which function is used to display something on the screen in Python?",
        options: [
            "print()",
            "show()",
            "display()",
            "output()"
        ],
        answer: 0,
        explanation: "print() is Python's built-in function for displaying output."
    },

    {
        id: 2,
        bloom: "REMEMBER",
        difficulty: "Easy",
        question: "Which data type is used to store text such as 'Python'?",
        options: [
            "int",
            "str",
            "float",
            "bool"
        ],
        answer: 1,
        explanation: "str stands for string and is used to store text."
    },

    {
        id: 3,
        bloom: "REMEMBER",
        difficulty: "Easy",
        question: "Which symbol is used to start an f-string in Python?",
        options: [
            "f",
            "$",
            "@",
            "#"
        ],
        answer: 0,
        explanation: "An f-string starts with the letter f before the quotation marks, such as f'Hello {name}'."
    },


    // ======================================
    // UNDERSTAND - Q4 to Q6
    // ======================================

    {
        id: 4,
        bloom: "UNDERSTAND",
        difficulty: "Easy",
        question: "What will this code display?",
        code: `name = "Alex"
print(name)`,
        options: [
            "Alex",
            "name",
            "\"Alex\"",
            "name = Alex"
        ],
        answer: 0,
        explanation: "The variable name stores the string 'Alex', so print(name) displays its stored value."
    },

    {
        id: 5,
        bloom: "UNDERSTAND",
        difficulty: "Easy",
        question: "What type of data is stored in the variable score?",
        code: `score = 95`,
        options: [
            "String",
            "Integer",
            "Float",
            "Boolean"
        ],
        answer: 1,
        explanation: "95 is a whole number, so Python stores it as an integer (int)."
    },

    {
        id: 6,
        bloom: "UNDERSTAND",
        difficulty: "Medium",
        question: "What does {name} do inside an f-string?",
        options: [
            "It inserts the value of the variable",
            "It converts the variable to an integer",
            "It creates a new variable",
            "It removes the variable"
        ],
        answer: 0,
        explanation: "Curly braces inside an f-string allow Python to insert the value of an expression or variable."
    },


    // ======================================
    // APPLY - Q7 to Q10
    // ======================================

    {
        id: 7,
        bloom: "APPLY",
        difficulty: "Medium",
        question: "What will be printed?",
        code: `name = "Sam"
age = 14

print(f"My name is {name}")`,
        options: [
            "My name is Sam",
            "My name is name",
            "My name is {name}",
            "My name is 14"
        ],
        answer: 0,
        explanation: "The f-string replaces {name} with the value stored in name, which is Sam."
    },

    {
        id: 8,
        bloom: "APPLY",
        difficulty: "Medium",
        question: "What will be printed?",
        code: `x = 10
y = 5

print(x + y)`,
        options: [
            "15",
            "105",
            "10 + 5",
            "5"
        ],
        answer: 0,
        explanation: "x stores 10 and y stores 5. Adding them gives 15."
    },

    {
        id: 9,
        bloom: "APPLY",
        difficulty: "Medium",
        question: "What will this program display?",
        code: `name = "Mia"
age = 13

print(f"{name} is {age} years old.")`,
        options: [
            "Mia is 13 years old.",
            "name is age years old.",
            "Mia is age years old.",
            "name is 13 years old."
        ],
        answer: 0,
        explanation: "The f-string replaces both {name} and {age} with their stored values."
    },

    {
        id: 10,
        bloom: "APPLY",
        difficulty: "Medium",
        question: "Which line correctly creates an f-string using the variable city?",
        code: `city = "Singapore"`,
        options: [
            `print(f"I live in {city}")`,
            `print("I live in {city}")`,
            `print(f"I live in city")`,
            `print("f"I live in {city}"")`
        ],
        answer: 0,
        explanation: "The f before the string and {city} inside the string allow Python to insert the variable's value."
    },


    // ======================================
    // ANALYZE - Q11 to Q13
    // ======================================

    {
        id: 11,
        bloom: "ANALYZE",
        difficulty: "Hard",
        question: "Why does this code NOT insert the value of name?",
        code: `name = "Leo"
print("Hello {name}")`,
        options: [
            "The string is not an f-string",
            "name must be an integer",
            "print() cannot display variables",
            "Curly brackets cannot be used in Python"
        ],
        answer: 0,
        explanation: "Without the f before the quotation mark, Python treats {name} as ordinary text."
    },

    {
        id: 12,
        bloom: "ANALYZE",
        difficulty: "Hard",
        question: "Which variable has a different data type from the others?",
        code: `a = 10
b = 20
c = "30"
d = 40`,
        options: [
            "a",
            "b",
            "c",
            "d"
        ],
        answer: 2,
        explanation: "a, b and d contain integers. c contains '30' inside quotation marks, making it a string."
    },

    {
        id: 13,
        bloom: "ANALYZE",
        difficulty: "Hard",
        question: "A student wants the output 'I scored 90 points.' Which part of the code is causing the problem?",
        code: `score = 90
print("I scored {score} points.")`,
        options: [
            "The missing f before the string",
            "The variable score should be a string",
            "The print function cannot use variables",
            "The number 90 cannot be stored in a variable"
        ],
        answer: 0,
        explanation: "The string needs an f before its opening quotation mark to evaluate {score}."
    },


    // ======================================
    // EVALUATE / CREATE - Q14 to Q15
    // ======================================

    {
        id: 14,
        bloom: "EVALUATE",
        difficulty: "Hard",
        question: "Which solution is the best choice for creating a short personalised greeting?",
        code: `name = "Aisha"`,
        options: [
            `print(f"Welcome, {name}!")`,
            `print("Welcome, Aisha!")`,
            `print("Welcome, {name}!")`,
            `print(f"Welcome, name!")`
        ],
        answer: 0,
        explanation: "The f-string uses the variable, so the greeting can automatically change when name changes."
    },

    {
        id: 15,
        bloom: "CREATE",
        difficulty: "Hard",
        question: "You are building a game. The player's name and score can change. Which code is the most reusable?",
        code: `player = "Kai"
score = 120`,
        options: [
            `print(f"{player} scored {score} points!")`,
            `print("Kai scored 120 points!")`,
            `print("player scored score points!")`,
            `print(f"player scored score points!")`
        ],
        answer: 0,
        explanation: "Using both variables inside an f-string makes the output automatically update for different players and scores."
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

    progressFill.style.width = `${progress}%`;


    // Code box
    if (q.code) {

        codeBox.classList.remove("hidden");
        codeText.textContent = q.code;

    } else {

        codeBox.classList.add("hidden");
        codeText.textContent = "";

    }


    // Clear previous options
    optionsContainer.innerHTML = "";

    // Hide feedback
    feedback.classList.add("hidden");
    feedback.classList.remove(
        "correct-feedback",
        "wrong-feedback"
    );

    nextBtn.classList.add("hidden");


    // Create options
    q.options.forEach((option, index) => {

        const button = document.createElement("button");

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

function checkAnswer(selectedIndex, selectedButton) {

    const q = questions[currentQuestion];

    // Prevent answering again
    const allOptions =
        document.querySelectorAll(".option");

    allOptions.forEach(button => {
        button.disabled = true;
    });


    if (selectedIndex === q.answer) {

        // -------------------------
        // CORRECT
        // -------------------------

        selectedButton.classList.add("correct");

        score++;

        streak++;

        if (streak > bestStreak) {
            bestStreak = streak;
        }

        bloomScores[q.bloom]++;

        // Base XP
        let earnedXP = 100;

        // Streak bonus
        if (streak >= 3) {
            earnedXP += 50;
        }

        if (streak >= 5) {
            earnedXP += 100;
        }

        xp += earnedXP;

        feedback.classList.add("correct-feedback");

        feedbackTitle.textContent =
            `🎉 Correct! +${earnedXP} XP`;

        feedbackText.textContent =
            q.explanation;

    } else {

        // -------------------------
        // WRONG
        // -------------------------

        selectedButton.classList.add("wrong");

        // Show correct answer
        allOptions[q.answer].classList.add("correct");

        streak = 0;

        feedback.classList.add("wrong-feedback");

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

nextBtn.addEventListener("click", nextQuestion);

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

    xpDisplay.textContent = xp;

    streakDisplay.textContent = streak;

    // Level based on XP
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


    document.getElementById("finalScore").textContent =
        `${score}/${questions.length}`;

    document.getElementById("finalXP").textContent =
        xp;

    document.getElementById("finalStreak").textContent =
        bestStreak;


    // -----------------------------
    // RANK
    // -----------------------------

    let rank;
    let message;
    let icon;

    const percentage =
        (score / questions.length) * 100;


    if (percentage >= 90) {

        rank = "Python Master 🐍";
        message = "Excellent! You can confidently work with these Python basics.";
        icon = "👑";

    } else if (percentage >= 75) {

        rank = "Code Ninja ⚔️";
        message = "Strong work. Your Python foundations are developing well.";
        icon = "🥷";

    } else if (percentage >= 60) {

        rank = "Python Explorer 🚀";
        message = "You understand many concepts, but a few areas need more practice.";
        icon = "🚀";

    } else if (percentage >= 40) {

        rank = "Code Apprentice 🔧";
        message = "You have started the journey. Review the concepts and try again.";
        icon = "🔧";

    } else {

        rank = "Python Rookie 🌱";
        message = "The basics need more practice. Don't guess—run the code and observe the output.";
        icon = "🌱";
    }


    document.getElementById("rank").textContent = rank;

    document.getElementById("resultMessage").textContent =
        message;

    document.getElementById("resultIcon").textContent =
        icon;


    // -----------------------------
    // BLOOM'S BREAKDOWN
    // -----------------------------

    document.getElementById("rememberScore").textContent =
        `${bloomScores.REMEMBER}/3`;

    document.getElementById("understandScore").textContent =
        `${bloomScores.UNDERSTAND}/3`;

    document.getElementById("applyScore").textContent =
        `${bloomScores.APPLY}/4`;

    document.getElementById("analyzeScore").textContent =
        `${bloomScores.ANALYZE}/3`;

    const evaluateCreate =
        bloomScores.EVALUATE +
        bloomScores.CREATE;

    document.getElementById("evaluateScore").textContent =
        `${evaluateCreate}/2`;
}


// ==========================================
// RESTART
// ==========================================

restartBtn.addEventListener("click", () => {

    resultScreen.classList.remove("active");
    startScreen.classList.add("active");

});
