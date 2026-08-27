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
            "display()",
            "print()",
            "show()",
            "write()"
        ],

        answer: 1,

        explanation:
            "print() is the Python function used to display output on the screen."
    },


    {
        id: 2,
        bloom: "REMEMBER",
        difficulty: "Easy",

        question: "Which data type is used to store text such as \"Singapore\"?",

        options: [
            "int",
            "float",
            "str",
            "bool"
        ],

        answer: 2,

        explanation:
            "Text enclosed in quotation marks is stored as a string, or str."
    },


    {
        id: 3,
        bloom: "REMEMBER",
        difficulty: "Easy",

        question: "Which data type would be used for the value 15.5?",

        options: [
            "int",
            "bool",
            "str",
            "float"
        ],

        answer: 3,

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
            "favourite_color",
            "Blue",
            '"favourite_color"',
            "color"
        ],

        answer: 1,

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
            "Both variables store strings",
            "age stores a string and age_text stores an integer",
            "Both variables store integers",
            "age stores an integer and age_text stores a string"
        ],

        answer: 3,

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
            "It stores a boolean",
            "It stores an integer",
            "It stores a string"
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
            '"name"',
            'name = "Aarav"',
            "Aarav",
            "name"
        ],

        answer: 2,

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
            "Mia 13 on the same line",
            "Mia followed by 13 on the next line",
            '"Mia" followed by "13" on the next line',
            "name followed by age on the next line"
        ],

        answer: 1,

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
            "My name is {name}.",
            "My name is name.",
            "My name is Leo.",
            "My name is 14."
        ],

        answer: 2,

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
            'print("I am {name} and I am {age} years old.")',
            'print(f"I am name and I am age years old.")',
            'print("I am name and I am age years old.")',
            'print(f"I am {name} and I am {age} years old.")'
        ],

        answer: 3,

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
            "Jordan on both lines",
            "Alex on both lines",
            "name on the first line and Jordan on the second line",
            "Alex on the first line and Jordan on the second line"
        ],

        answer: 3,

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
            "c",
            "a",
            "d",
            "b"
        ],

        answer: 0,

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
            "print() cannot use variables",
            "The string needs f before the opening quotation mark",
            "The variable name should contain a number",
            "The quotation marks should be removed"
        ],

        answer: 1,

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
            'print("Ryan is 14 years old.")',
            'print("name is age years old.")',
            'print(f"name is age years old.")',
            'print(f"{name} is {age} years old.")'
        ],

        answer: 3,

        explanation:
            "Using the variables inside an f-string means the sentence automatically uses the current values of name and age."
    },


    // ==================================================
    // CREATE — Q15
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
            'print(f"My name is {school}. I study at {name} and I am {age} years old.")',
            'print("My name is {name}. I study at {school} and I am {age} years old.")',
            'print(f"My name is {name}. I study at {school} and I am {age} years old.")',
            'print(f"My name is name. I study at school and I am age years old.")'
        ],

        answer: 2,

        explanation:
            "The correct solution uses all three variables in the appropriate places inside an f-string, so the output matches the required introduction."
    }
];
