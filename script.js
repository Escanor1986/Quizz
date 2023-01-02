const responses= ["c", "a", "b", "a", "c"];
const emojis = ["💚", "💫", "👀", "😭", "💩"];


const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault();

    const results = [];

    const radioButtons = document.querySelectorAll("input[type='radio']:checked");

    radioButtons.forEach((radioButton, index) => {
        if(radioButton.value === responses[index]) {
            results.push(true);
        } else {
            results.push(false);
        }
    });

    console.log(radioButtons);
    console.log(results);

    showResults(results);
    addColors(results);
}

const titleResult = document.querySelector(".results h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");

function showResults(results) {

    const errorsNumbers = results.filter(el => el === false).length;

    console.log(errorsNumbers);
    switch(errorsNumbers) {
        case 0:
            titleResult.textContent = "💚 Bravo, vous obtenez le score maximum ! 💚";
            helpResult.style.display = "block";
            helpResult.textContent = "Super, quelle culture générale ... !";
            markResult.style.display = "block";
            markResult.innerHTML = "score = <span>5 / 5</span>";
            break;
        case 1:
            titleResult.textContent = "💫 Super, vous y êtes presque ! 💫";
            helpResult.style.display = "block";
            helpResult.textContent = "Retentez une réponse dans les case rouges, puis re-validez le formulaire !";
            markResult.style.display = "block";
            markResult.innerHTML = "score = <span>4 / 5</span>";
            break;
        case 2:
            titleResult.textContent = "💫 Encore un effort ... 👀";
            helpResult.style.display = "block";
            helpResult.textContent = "Retentez une réponse dans les case rouges, puis re-validez le formulaire !";
            markResult.style.display = "block";
            markResult.innerHTML = "score = <span>3 / 5</span>";
            break;
        case 3:
            titleResult.textContent = "👀 Vous cumulez encore pas mal d'erreurs ... 😭";
            helpResult.style.display = "block";
            helpResult.textContent = "Retentez une réponse dans les case rouges, puis re-validez le formulaire !";
            markResult.style.display = "block";
            markResult.innerHTML = "score = <span>2 / 5</span>";
            break;
        case 4:
            titleResult.textContent = "😭 Vous êtes franchement nul ... 😭";
            helpResult.style.display = "block";
            helpResult.textContent = "Retentez une réponse dans les case rouges, puis re-validez le formulaire !";
            markResult.style.display = "block";
            markResult.innerHTML = "score = <span>1 / 5</span>";
            break;
        case 5:
            titleResult.textContent = "💩 A touché le fond, et cherche encore à creuser ... 💩";
            helpResult.style.display = "block";
            helpResult.textContent = "Retentez une réponse dans les case rouges, puis re-validez le formulaire !";
            markResult.style.display = "block";
            markResult.innerHTML = "score = <span>0 / 5</span>";
            break

            default:
                titleResult.textContent = "Wooops, cas non attendu ...";
    }
}

const questions = document.querySelectorAll(".question-block");

function addColors(results) {
    results.forEach((response, index) => {
        if(results[index]) {
            questions[index].style.backgroundImage = "linear-gradient(to right, #a8ff78, #78ffd6)";
        } else {
            questions[index].style.backgroundImage = "linear-gradient(to right, #f5567b, #fd674c)";
        }
    });
}

const radioInputs = document.querySelectorAll("input[type='radio']");

radioInputs.forEach(radioInput => radioInput.addEventListener('input', resetColor));

function resetColor(e) {
    const index = e.target.getAttribute("name").slice(1) - 1;
    // slice permet dans ce cas de ne récupérer que la partie chiffrée de "name ='q#'" pour en obtenir l'index
    const parentQuestionBlock = questions[index];

    parentQuestionBlock.style.backgroundColor = "#f1f1f1";
    parentQuestionBlock.style.backgroundImage = "none";
}