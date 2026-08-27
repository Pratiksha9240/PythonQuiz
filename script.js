// ==========================================
// PYTHON CODE QUEST
// Topics:
// print(), Variables, Strings, Integers,
// Floats, Booleans, f-strings
// ==========================================

const questions = [

    // ==================================================
    // REMEMBER — Q1 to Q3
    // ==================================================

    {
        id: 1,
        bloom: "REMEMBER",
        difficulty: "Easy",

        question: "Which Python function is used to display something on the screen?",

        options: [
            "print()",
            "display()",
            "show()",
            "write()"
        ],

        answer: 0,

        explanation:
            "print() is the Python function used to display output on the screen."
    },


    {
        id: 2,
        bloom: "REMEMBER",
        difficulty: "Easy",

        question: "Which data type is used to store text such as \"Singapore\"?",

        options: [
            "str",
            "int",
            "float",
            "bool"
        ],

        answer: 0,

        explanation:
            "Text enclosed in quotation marks is stored as a string, or str."
    },


    {
        id: 3,
        bloom: "REMEMBER",
        difficulty: "Easy",

        question: "Which data type would be used for the value 15.5?",

        options: [
            "float",
            "int",
            "str",
            "bool"
        ],

        answer: 0,

        explanation:
            "15.5 contains a decimal value, so it is a float."
    },


    // ==================================================
    // UNDERSTAND — Q4 to Q6
    // ==================================================

    {
        id: 4,
        bloom: "UNDERSTAND",
        difficulty: "Easy",

        question: "What value is stored in the variable favourite_color?",

        code: `favourite_color = "Blue"`,

        options: [
            "Blue",
            "favourite_color",
            '"favourite_color"',
            "color"
        ],

        answer: 0,

        explanation:
            "The variable favourite_color stores the text value \"Blue\"."
    },


    {
        id: 5,
        bloom: "UNDERSTAND",
        difficulty: "Medium",

        question: "Which statement correctly explains the difference between these two variables?",

        code: `age = 14
age_text = "14"`,

        options: [
            "age stores an integer and age_text stores a string",
            "Both variables store integers",
            "age stores a string and age_text stores an integer",
            "Both variables store strings"
        ],

        answer: 0,

        explanation:
            "14 without quotation marks is an integer. \"14\" is text inside quotation marks, so it is a string."
    },


    {
        id: 6,
        bloom: "UNDERSTAND",
        difficulty: "Medium",

        question: "Which statement correctly describes the variable temperature?",

        code: `temperature = 28.5`,

        options: [
            "It stores a float",
            "It stores an integer",
            "It stores a string",
            "It stores a boolean"
        ],

        answer: 0,

        explanation:
            "28.5 contains a decimal value, so temperature stores a float."
    },


    // ==================================================
    // APPLY — Q7 to Q10
    // ==================================================

    {
        id: 7,
        bloom: "APPLY",
        difficulty: "Medium",

        question: "What will this program display?",

        code: `name = "Aarav"

print(name)`,

        options: [
            "Aarav",
            "name",
            '"name"',
            'name = "Aarav"'
        ],

        answer: 0,

        explanation:
            "print(name) displays the value stored inside the variable name, which is Aarav."
    },


    {
        id: 8,
        bloom: "APPLY",
        difficulty: "Medium",

        question: "What will this program display?",

        code: `name = "Mia"
age = 13

print(name)
print(age)`,

        options: [
            "Mia followed by 13 on the next line",
            "name followed by age on the next line",
            "Mia 13 on the same line",
            '"Mia" followed by "13" on the next line'
        ],

        answer: 0,

        explanation:
            "The first print displays Mia and the second print displays 13. Each print() starts the output on a new line."
    },


    {
        id: 9,
        bloom: "APPLY",
        difficulty: "Medium",

        question: "What will this f-string display?",

        code: `name = "Leo"
age = 14

print(f"My name is {name}.")`,

        options: [
            "My name is Leo.",
            "My name is name.",
            "My name is {name}.",
            "My name is 14."
        ],

        answer: 0,

        explanation:
            "The f-string replaces {name} with the value stored in the variable name, which is Leo."
    },


    {
        id: 10,
        bloom: "APPLY",
        difficulty: "Medium",

        question: "Which code will display: I am Sam and I am 15 years old?",

        code: `name = "Sam"
age = 15`,

        options: [
            'print(f"I am {name} and I am {age} years old.")',
            'print("I am {name} and I am {age} years old.")',
            'print(f"I am name and I am age years old.")',
            'print("I am name and I am age years old.")'
        ],

        answer: 0,

        explanation:
            "The f-string uses {name} and {age} to insert the values stored in both variables."
    },


    // ==================================================
    // ANALYZE — Q11 to Q13
    // ==================================================

    {
        id: 11,
        bloom: "ANALYZE",
        difficulty: "Hard",

        question: "Look carefully at the code. What will be printed?",

        code: `name = "Alex"

print(name)

name = "Jordan"

print(name)`,

        options: [
            "Alex on the first line and Jordan on the second line",
            "Jordan on both lines",
            "Alex on both lines",
            "name on the first line and Jordan on the second line"
        ],

        answer: 0,

        explanation:
            "The variable first stores Alex, so the first print displays Alex. The value is then changed to Jordan, so the second print displays Jordan."
    },


    {
        id: 12,
        bloom: "ANALYZE",
        difficulty: "Hard",

        question: "Which variable stores a value that is a different data type from the other three?",

        code: `a = 10
b = 25
c = 7.5
d = 40`,

        options: [
            "a",
            "b",
            "c",
            "d"
        ],

        answer: 2,

        explanation:
            "a, b, and d store whole numbers, so they are integers. c stores 7.5, which is a float."
    },


    {
        id: 13,
        bloom: "ANALYZE",
        difficulty: "Hard",

        question: "A student wants the output to be: Hello, Maya! But their code displays the words name instead of Maya. What is the problem?",

        code: `name = "Maya"

print("Hello, {name}!")`,

        options: [
            "The string needs f before the opening quotation mark",
            "The variable name should contain a number",
            "print() cannot use variables",
            "The quotation marks should be removed"
        ],

        answer: 0,

        explanation:
            "Without f before the string, Python treats {name} as ordinary text instead of inserting the value stored in name."
    },


    // ==================================================
    // EVALUATE — Q14
    // ==================================================

    {
        id: 14,
        bloom: "EVALUATE",
        difficulty: "Hard",

        question: "A student is creating a profile program. The student's name and age may change later. Which code is the best choice?",

        code: `name = "Ryan"
age = 14`,

        options: [
            'print(f"{name} is {age} years old.")',
            'print("Ryan is 14 years old.")',
            'print("name is age years old.")',
            'print(f"name is age years old.")'
        ],

        answer: 0,

        explanation:
            "Using the variables inside an f-string means the sentence automatically uses the current values of name and age."
    },


    // ==================================================
    // CREATE-ORIENTED — Q15
    // ==================================================

    {
        id: 15,
        bloom: "CREATE",
        difficulty: "Hard",

        question: "You are building a student introduction program. The variables already contain the student's name, school, and age. Which code correctly creates the required introduction?",

        code: `name = "Nora"
school = "Greenwood School"
age = 13

# Required output:
# My name is Nora. I study at Greenwood School and I am 13 years old.`,

        options: [
            'print(f"My name is {name}. I study at {school} and I am {age} years old.")',
            'print("My name is {name}. I study at {school} and I am {age} years old.")',
            'print(f"My name is name. I study at school and I am age years old.")',
            'print(f"My name is {school}. I study at {name} and I am {age} years old.")'
        ],

        answer: 0,

        explanation:
            "The correct solution uses all three variables in the appropriate places inside an f-string, so the output matches the required introduction."
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


    // ----------------------------------------------
    // Progress
    // ----------------------------------------------

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressFill.style.width =
        `${progress}%`;


    // ----------------------------------------------
    // Code box
    // ----------------------------------------------

    if (q.code) {

        codeBox.classList.remove("hidden");

        codeText.textContent =
            q.code;

    } else {

        codeBox.classList.add("hidden");

        codeText.textContent = "";
    }


    // ----------------------------------------------
    // Clear old options
    // ----------------------------------------------

    optionsContainer.innerHTML = "";


    // ----------------------------------------------
    // Reset feedback
    // ----------------------------------------------

    feedback.classList.add("hidden");

    feedback.classList.remove(
        "correct-feedback",
        "wrong-feedback"
    );

    nextBtn.classList.add("hidden");


    // ----------------------------------------------
    // Create options
    // ----------------------------------------------

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
    // CORRECT ANSWER
    // ==================================================

    if (selectedIndex === q.answer) {

        selectedButton.classList.add("correct");

        score++;

        streak++;

        if (streak > bestStreak) {
            bestStreak = streak;
        }

        bloomScores[q.bloom]++;


        // ----------------------------------------------
        // XP
        // ----------------------------------------------

        let earnedXP = 100;


        // Medium bonus

        if (q.difficulty === "Medium") {
            earnedXP += 25;
        }


        // Hard bonus

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
    // WRONG ANSWER
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
// UPDATE GAME STATS
// ==================================================

function updateStats() {

    xpDisplay.textContent =
        xp;

    streakDisplay.textContent =
        streak;


    // ----------------------------------------------
    // Level system
    // ----------------------------------------------

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


    // ----------------------------------------------
    // Final score
    // ----------------------------------------------

    document.getElementById("finalScore")
        .textContent =
        `${score}/${questions.length}`;


    // ----------------------------------------------
    // Final XP
    // ----------------------------------------------

    document.getElementById("finalXP")
        .textContent =
        xp;


    // ----------------------------------------------
    // Best streak
    // ----------------------------------------------

    document.getElementById("finalStreak")
        .textContent =
        bestStreak;


    // ----------------------------------------------
    // Percentage
    // ----------------------------------------------

    const percentage =
        (score / questions.length) * 100;


    let rank;
    let message;
    let icon;


    // ----------------------------------------------
    // Rank
    // ----------------------------------------------

    if (percentage >= 90) {

        rank = "Python Master 🐍";

        message =
            "Excellent understanding of the fundamentals. You are ready to move on to more Python concepts.";

        icon = "👑";
    }

    else if (percentage >= 75) {

        rank = "Code Ninja ⚔️";

        message =
            "Strong understanding. You have a good grasp of variables, data types and output.";

        icon = "🥷";
    }

    else if (percentage >= 60) {

        rank = "Python Explorer 🚀";

        message =
            "You understand the basics, but you need more practice reading and predicting code.";

        icon = "🚀";
    }

    else if (percentage >= 40) {

        rank = "Code Apprentice 🔧";

        message =
            "You know some of the basics, but your understanding is inconsistent. Review the examples and try again.";

        icon = "🔧";
    }

    else {

        rank = "Python Rookie 🌱";

        message =
            "You need more practice with the fundamentals. Focus on understanding variables, data types and how print() displays values.";

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
