const imputQuestion = document.getElementById
("inputQuestion");
const result = document.getElementById("result");

inputQuestion.addEventListener("keypress", (e) =>{
    if (inputQuestion.value && e.key === "Enter")
    SendQuestion();
});

const OPENAI_API_KEY =
"";

function SendQuestion(){
    var sQuestion = inputQuestion.value;

    if (result.value) result.value += "\n\n\n";

    result.value += ` Eu: ${sQuestion}`;
    inputQuestion.value = "Carregando...";
    inputQuestion.disabled = true;

}