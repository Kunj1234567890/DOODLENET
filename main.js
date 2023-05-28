


function setup(){
    canvas = createCanvas(300,400);
    canvas.center();
    background('white');
    canvas.mouseReleased(classifycanvas);
        synth       =   window.speechSynthesis;

}

function preload (){
    Classifier = ml5.imageClassifier('DoodleNet');
   // thickness of pen = 2cm //
}
 
function draw(){
    strokeWeight(10);
    stroke(0);
    if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY) ;   }
}
function classifycanvas (){
 Classifier.classify(canvas,gotresults);
}
function gotresults(error,results){
if(error){
    console.error(error);
}
console.log(results);
document.getElementById("label").innerHTML = 'label :' + results[0].label;
document.getElementById("confidence").innerHTML = 'confidence : ' + Math.round(results[0].confidence * 100) + '%' ;
Utterthis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(Utterthis);               


















}

function clearcanvas(){
    background('white');
}





















































































































































