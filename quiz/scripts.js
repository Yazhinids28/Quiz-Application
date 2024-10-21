// scripts.js

// Questions array
const questions = [
    {
        question: "What is the largest planet in our solar system?",
        options: [
            "Earth",
            "Jupiter",
            "Saturn",
            "Mars"
        ],
        answer: 1
    },
    {
        question: "What is the name of our galaxy?",
        options: [
            "Andromeda",
            "Milky Way",
            "Sombrero",
            "Whirlpool"
        ],
        answer: 1
    },
    {
        question: "What is the speed of light?",
        options: [
            "300,000 km/s",
            "150,000 km/s",
            "450,000 km/s",
            "600,000 km/s"
        ],
        answer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: [
            "Venus",
            "Earth",
            "Mars",
            "Mercury"
        ],
        answer: 2
    },
    {
        question: "What is a black hole?",
        options: [
            "A hole in space",
            "A region with a gravitational pull so strong that nothing can escape",
            "A type of star",
            "An empty space"
        ],
        answer: 1
    }
];

// Variables
let currentQuestion = 0;
let score = 0;

// DOM Elements
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('nextQuestion');
const scoreText = document.getElementById('score');

// Show section
const showSection = (sectionId) => {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
};

// Start quiz
document.getElementById('startQuiz').addEventListener('click', () => {
    showSection('quiz');
    loadQuestion();
});

// Load question
const loadQuestion = () => {
    const current = questions[currentQuestion];
    questionText.innerText = current.question;
    optionsContainer.innerHTML = '';
    current.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
    nextButton.disabled = true;
};

// Select option
const selectOption = (index) => {
    const correct = questions[currentQuestion].answer;
    if (index === correct) {
        score++;
    }
    nextButton.disabled = false;
};

// Next question
nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showSection('results');
        scoreText.innerText = score;
    }
});

// Restart quiz
document.getElementById('restartQuiz').addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    showSection('welcome');
});
