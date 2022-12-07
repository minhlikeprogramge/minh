const button = document.querySelector("button");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log("speech is started");
}

recognition.onresult = function(event){
    console.log(event);

    const spokenwords = event.results[0][0].transcript;

    console.log(spokenwords);
    computerSpeech(spokenwords);
}

function computerSpeech(words){
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.pitch = 0.7;
    speech.volume = 1;
    speech.rate = 1;
    speech.text = words;

    determineWords(speech,words);

    window.speechSynthesis.speak(speech);
}

function determineWords(speech,words){
    if(words.includes("how are you")){
        speech.text =  'i am fine thank you!';
    } else if(words.includes("what's your name")){
        speech.text =  'i am mp robot coding minh was create me';
    } else if(words.includes("love you")){
        speech.text =  'uh i have a girl friends';
    } else if(words.includes("hello")) {
        speech.text = "hello"
    }else if(words.includes("when's your birth")){
        speech.text = "12/5/2020";
    }else if(words.includes("listen to music")){
        speech.text = "here";
        var music = document.getElementById("music");
        music.style.visibility = "visible";
    }else{
        speech.text = "i don't understand";
    };
}

button.addEventListener("click",()=>{
    recognition.start();
})