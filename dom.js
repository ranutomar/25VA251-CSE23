document.writeln("hello");
function result(){
    let inputData=document.getElementById("inputText").Value;
   document.getElementById('text').textcontent=inputData;
   if( inputData>=18){
    alert("valid Data");

   }
   else
    alert("not valid");
    let changeColor=document.getElementById('text');
    changeColor.style.color="red";
    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor='blue';
}
let para=document.getElementById("paratext");
function changetextColor(){
    para.style.backgroundColor="#"+Math.floor(Math.random() * 16777)
}
para.addEventListener('mouseover',changetextColor);