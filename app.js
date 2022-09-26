var inputText=document.querySelector(".input-text")
var btnTranslate=document.querySelector("#translate-btn")
var outputDiv=document.querySelector(".output-text")

var minionUrl="https://api.funtranslations.com/translate/minion.json";

function translatedUrl(input){
    return minionUrl + "?text=" + input
}

function errorHandler() {
    console.log("Something went wrong.....api not working")
    alert("Something went wrong...Api not working")
}

function clickEventHandler(){
    var textInput=inputText.value;
    fetch(translatedUrl(textInput))
    .then(response => response.json())
    .then(json => { 
        let translatedOutput = json.contents.translated;
        outputDiv.innerText = translatedOutput;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click",clickEventHandler)