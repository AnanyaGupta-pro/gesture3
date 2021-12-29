
prediction_1=""
Webcam.set({
    width:350,
    height:300,
image_format:"png",
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML="<img id='captured_image' src='" +data_uri+"'/>";
    })
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QPD47AVBw/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded")
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="the prediction is"+prediction_1;
   
    var utterThis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}
function gotResult(error,results) {
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name1").innerHTML=results[0].label;
       
        prediction_1=results[0].label;
       
       speak();
if(results[0].label=="fist"){
document.getElementById("update_emoji1").innerHTML="&#9994"

}
if(results[0].label="victory"){
    document.getElementById("update_emoji1").innerHTML="&#9996"
   
    }
  if(results[0].label=="one"){
        document.getElementById("update_emoji1").innerHTML="&#9757"
        
        }  
        if(results[0].label=="pen"){
            document.getElementById("update_emoji1").innerHTML="&#9997"
            
            } 
            if(results[0].label=="thum"){
                document.getElementById("update_emoji1").innerHTML="&#128077"
                
                } 

    }
}