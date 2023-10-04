const questions = [
    {
        question: "Kdy začala druhá světová válka?",
        options: ["1935", "1939"],
        correctAnswer: "1939"
    },
    {
        question: "Jaký byl kódový název spojenecké invaze do Normandie?",
        options: ["Operace Overlord", "Operace Barbarossa"],
        correctAnswer: "Operace Overlord"
    },
    {
        question: "Která země byla v roce 1940 napadena Německem?",
        options: ["Polsko", "Francie"],
        correctAnswer: "Francie"
    },
    {
        question: "V jakém roce vstoupily Spojené státy do druhé světové války?",
        options: ["1941", "1942"],
        correctAnswer: "1941"
    },
    {
        question: "Kde byla svržena první atomová bomba během druhé světové války?",
        options: ["Hirošima", "Nagasaki"],
        correctAnswer: "Hirošima"
    },
    {
        question: "Kdo byl vůdcem nacistického Německa během druhé světové války?",
        options: ["Winston Churchill", "Adolf Hitler"],
        correctAnswer: "Adolf Hitler"
    },
    {
        question: "Jaký byl význam Bitvy o Stalingrad?",
        options: ["Byla to první bitva druhé světové války", "Označovala zlom ve válce"],
        correctAnswer: "Označovala zlom ve válce"
    },
    {
        question: "V jaký den skončila druhá světová válka v Evropě?",
        options: ["17. listopadu. 1945", "8. května 1945"],
        correctAnswer: "8. května 1945"
    },
    {
        question: "Kde se konaly norimberské procesy?",
        options: ["V Londýně", "V Norimberku"],
        correctAnswer: "V Norimberku"
    },
    {
        question: "Jaké bylo hlavní válečné území v Tichomoří během druhé světové války?",
        options: ["Evropa", "Asie-Tichomoří"],
        correctAnswer: "Asie-Tichomoří"
    },
    {
        question: "Která námořní bitva je často považována za zlomový okamžik války v Pacifiku?",
        options: ["Bitva u Midway", "Bitva o Okinawu"],
        correctAnswer: "Bitva u Midway"
    },
    {
        question: "Jak se jmenoval projekt, který vyvinul atomovou bombu?",
        options: ["Projekt Manhattan", "Projekt Modrá kniha"],
        correctAnswer: "Projekt Manhattan"
    },
    {
        question: "Která země nebyla součástí Osy během druhé světové války?",
        options: ["Japonsko", "Sovětský svaz"],
        correctAnswer: "Sovětský svaz"
    },
    {
        question: "K čemu sloužil Zákon o půjčce a pronájmu (Lend-Lease Act)?",
        options: ["K poskytování finanční pomoci Německu", "K poskytování vojenské pomoci spojeneckým zemím"],
        correctAnswer: "K poskytování vojenské pomoci spojeneckým zemím"
    },
    {
        question: "Kdo byli hlavními třemi vůdci na Jaltské konferenci?",
        options: ["Roosevelt, Churchill, Stalin", "Hitler, Mussolini, Hirohito"],
        correctAnswer: "Roosevelt, Churchill, Stalin"
    },
    {
        question: "Jaký byl název nacistického plánu na vyvraždění Židů?",
        options: ["Konečné řešení", "Operace Overlord"],
        correctAnswer: "Konečné řešení"
    },
    {
        question: "Jaký byl kódový název německé invaze do Sovětského svazu?",
        options: ["Operace Overlord", "Operace Barbarossa"],
        correctAnswer: "Operace Barbarossa"
    },
    {
        question: "Kdo byl nejvyšším velitelem spojeneckých výsadkových sil během Dne D?",
        options: ["Eisenhower", "Patton"],
        correctAnswer: "Eisenhower"
    },
    {
        question: "Která událost přivedla Spojené státy do druhé světové války?",
        options: ["Útok na Pearl Harbor", "Den D"],
        correctAnswer: "Útok na Pearl Harbor"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }
    scoreElement.textContent = `Score: ${score}`;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    questionElement.textContent = "Konec hry!";
    optionsElement.innerHTML = "";
    scoreElement.style.display = "none";

    if (score >= 19) {
        messageElement.textContent = "GRATULACE, JSI VÍTĚZ!";
    } else if (score >= 17) {
        messageElement.textContent = "Docela ti to jde!";
    } else if (score >= 14) {
        messageElement.textContent = "Dobrý, dobrý";
    } else if (score >= 7) {
        messageElement.textContent = "Myslím, že máš na víc";
    } else {
        messageElement.textContent = "Víš co je Dějepis?";
    }

    const finalScoreElement = document.createElement("div");
    finalScoreElement.textContent = `Konečné skóre: ${score}`;
    finalScoreElement.style.fontSize = "20px";
    finalScoreElement.style.marginTop = "10px";
    finalScoreElement.style.color = "#333";
    messageElement.appendChild(finalScoreElement);
}

displayQuestion();
