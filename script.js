const btn = document.getElementById('btn');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('You can speak now!!!');
}
recognition.onresult = function(event){
    console.log(event);
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML=text;
    read(text);
}

function read(text){

    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text.includes('time'))
    speech.text = 'it is '+new Date().getHours()+" "+ new Date().getMinutes()+" right now";
    else if(text.includes('my birthday'))
    speech.text = "Do you think, I would know";
    else if(text.includes('do you love me'))
    speech.text= "Of course not, my dear!";
    window.speechSynthesis.speak(speech);
}

