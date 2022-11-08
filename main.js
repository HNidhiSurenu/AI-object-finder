object=[]
function setup(){
    canvas=createCanvas(600, 500)
    canvas.center()
    video=createCapture(VIDEO)
video.hide()
}
status=""
function start(){
objectdetector=ml5.objectDetector("cocossd", modelloaded)
document.getElementById("status").innerHTML="status: detecting objects"
}
document.getElementById("name").value
function modelloaded(){
    console.log("modelloaded")
    status="true"
    if(objects[i].label==object_name){
        videoLiveView.stop()
        objectDetector.detect(gotResult);
        document.getElementById('object_status').innerHTML = object_status + "object mentioned has been found"
        var synth=window.speechSynthesis
        var utter=new SpeechSynthesisUtterance("object mentioned has been found")
        SpeechSynthesisUtterance()
    synth.speak(utter)
    }else{
        document.getElementById('object_status').innerHTML=object_status + "object mentioned not found"
    

    }
}
function draw(){
    image(video, 0, 0, 380, 380)
    if(status!=""){
        objectDetector.detect(video, gotResult)
        for(i=0;i<object.length;i++){
            fill("purple")
            document.getElementById("status").innerHTML="status:objectdetected"
            percent=floor(object[i].confidence*100)
            text(object[i].label+" "+percent, object[i].x+15, object[i].y+15)
            noFill()
            stroke("red")
            rect(object[i].x, object[i].y, object[i].width, object[i].height)
}
    }
}
function gotResult(error, results){
    if(error){
        console.log(error)
    }
    console.log(results)
    object=results
}

