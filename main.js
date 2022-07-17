prediction_1 = "";


Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});


camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    });
}
console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DzutBHdOU/model.json", modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "this is looking amazing";
    speak_data_2 = "All the best";
    speak_data_3 = "That was a marvelous victory";
    var utterThis = new SpeechSynthesisUtterance(speak_data_1)
    synth.speak(utterThis);
}
function speak2() {
    var synth = window.speechSynthesis;
    speak_data_1 = "this is looking amazing";
    speak_data_2 = "All the best";
    speak_data_3 = "That was a marvelous victory";
    var utterThis = new SpeechSynthesisUtterance(speak_data_2)
    synth.speak(utterThis);
}
function speak3() {
    var synth = window.speechSynthesis;
    speak_data_1 = "this is looking amazing";
    speak_data_2 = "All the best";
    speak_data_3 = "That was a marvelous victory";
    var utterThis = new SpeechSynthesisUtterance(speak_data_3)
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById('captured_image');
     classifier.classify(img, gotResut);   
}
function gotResut(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
       
        prediction_1 = results[0].label;
       
        
        if (results[0].label == "Amazing"){
            document.getElementById("update_emoji").innerHTML = "&#128076;"
            speak();
        }
        if (results[0].label == "Best"){
            document.getElementById("update_emoji").innerHTML = "&#128077;"
            speak2();
        }
        if (results[0].label == "Victoy"){
            document.getElementById("update_emoji").innerHTML = "&#9996;"
            speak3();
        }   
    }
}