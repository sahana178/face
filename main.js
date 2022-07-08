Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( "camera" );

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
  }
  
  function draw(){
    image(video,0,0,300,300);
  
  }

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = <img id="captured_image" src="'+data_uri+'"/>
    });

    
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BBXu1QEQw/',modelLoaded)


function take_pic(){
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

//console.log('ml5 version',ml5.version);
//classifier = ml5.imageClassifier(https//teachablemachine.withgoogle.com/models/kM2P_i-q2/.json', modelLoaded);


 function modelLoaded(){
     console.log('model loaded');
 }

 function identify(){
    final_img =  document.getElementById("captured_image");
    classifier.classify(final_img,gotResult);
 }

 function gotResult(error,results){function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
  }
  
  function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX + 35,noseY + 140,30,30);
  
  }
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("Object_name").innerHTML = results[0].label;
         document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
        }
 }  