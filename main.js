function preload(){

}
function setup(){
 canvas=createCanvas(640,480);
 canvas.position(110,250);
 video=createCapture(VIDEO);
 video.hide();

 tint_color="";
 }
 function draw(){
     image(video,220,200,240,140);
     tint(tint_color);
     circle(50,50,70)
     circle(590,50,70)
     circle(590,390,70)
     circle(50,390,70)
     rect(22,70,55,300)
     rect(562,70,55,300)
     rect(70,20,500,55)
     rect(70,365,500,55)
     
     
 }
 function take_snapshot(){
     save('student_name.png');
 }
 function filter_tint(){
     tint_color=document.getElementById("color_name").value;
 }