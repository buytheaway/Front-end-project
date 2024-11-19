const questions = [
    {
        question: 'Кто был лидером партии "Алаш"?',
        answers: ["Ахмет Байтурсынов", 
                "Мустафа Шокай", 
                "Алихан Бокейханов", 
                "Жусипбек Аймауытов"],
        correct: 2
    },
    {
        question: 'Какую цель ставило перед собой движение "Алаш"?',
        answers: ["Установить монархию", 
                "Создать независимое казахское государство", 
                "Присоединиться к Российской империи", 
                "Сохранить казахскую культуру, не затрагивая политику"],
        correct: 1
    },
    {
        question: 'В каком году была основана партия "Алаш"?',
        answers: ["1917", 
                "1925", 
                "1905", 
                "1890"],
        correct: 0
    },
    {
        question: 'Какая газета была главным печатным органом партии "Алаш"?',
        answers: ["Казахстан", 
                "Сарыарка", 
                "Алаш", 
                "Туркестан"],
        correct: 1
    },
    {
        question: 'Как звали одного из лидеров "Алаш", который был также известным инженером и учёным?',
        answers: ["Мустафа Шокай", 
                "Ахмет Байтурсынов", 
                "Мухаметжан Тынышпаев", 
                "Халел Досмухамедов"],
        correct: 2
    },
    {
        question: 'Какое влияние оказала деятельность "Алаш" на современный Казахстан?',
        answers: ["Способствовала независимости и развитию национальной культуры", 
                "Стала причиной культурного упадка", 
                "Углубила связи с Советским Союзом", 
                "Привела к отказу от казахского языка"],
        correct: 0
    },
    {
        question: 'В каком городе состоялся первый съезд партии "Алаш"?',
        answers: ["Алматы", 
                "Семипалатинск", 
                "Оренбург", 
                "Астана"],
        correct: 1
    },
    {
        question: 'Какие цели были у автономного правительства "Алаш Орда"?',
        answers: ["Прекратить влияние большевиков в Казахстане", 
                "Защитить права казахов и создать автономию", 
                "Полностью интегрироваться в состав Российской империи", 
                "Оставаться аполитичными"],
        correct: 1
    },
    {
        question: 'Какой из следующих членов "Алаш" был видным юристом?',
        answers: ["Халел Досмухамедов", 
                "Ахмет Байтурсынов", 
                "Жакып Акбаев", 
                "Алихан Бокейханов"],
        correct: 2
    },
    {
        question: 'Что стало причиной распада движения "Алаш"?',
        answers: ["Внутренние разногласия", 
                "Репрессии со стороны советской власти", 
                "Исчерпание финансовых ресурсов", 
                "Слияние с другими политическими движениями"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizElement = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        console.log("Quiz finished. Showing result...");
        showResult();
        return;
    }

    const questionData = questions[currentQuestionIndex];
    questionElement.textContent = `Вопрос ${currentQuestionIndex + 1}: ${questionData.question}`;
    optionsElement.innerHTML = "";

    questionData.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        li.classList.add("option");
        li.textContent = answer;
        li.onclick = () => checkAnswer(index);
        optionsElement.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    console.log(`Answered question ${currentQuestionIndex}. Current score: ${score}`);
    showQuestion();
}

function showResult() {
    quizElement.classList.add("hidden");
    resultElement.classList.remove("hidden");
    scoreElement.textContent = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    
    resultElement.classList.add("hidden");
    quizElement.classList.remove("hidden");

    showQuestion();
}
showQuestion();
