$(".Rotate").hide()
var choosedImage=document.getElementById("Choosed-image");
var screenshot=document.getElementsByClassName("screenshot");
function CW(){
choosedImage.style.transform=`rotate(180deg)`;
}
function CW1(){
    choosedImage.style.transform=`rotate(360deg)`;
}
function CW2(){
    choosedImage.style="transform:rotate(90deg);width:580px";
}
function ACW(){
    choosedImage.style.transform=`rotate(-180deg)`;
}
function ACW1(){
    choosedImage.style.transform=`rotate(-360deg)`;
}
function ACW2(){
    choosedImage.style.transform=`rotate(-90deg)`;
}
function RM(){
  $("#ClockWise").toggle();
    $("#ClockWise-Value1").toggle();
    $("#ClockWise-Value2").toggle();
    $("#AntiClockWise").toggle();
    $("#AntiClockWise-Value1").toggle();
    $("#AntiClockWise-Value2").toggle();  
}
function ClockWise(){
    var ClockWise=document.getElementById("ClockWise").value;
    document.getElementById("ClockWise-Value2").innerHTML=ClockWise;
    choosedImage.style.transform=`rotate(${ClockWise}deg)`; 
}
function AntiClockWise(){
    var AntiClockWise=document.getElementById("AntiClockWise").value;
    document.getElementById("AntiClockWise-Value2").innerHTML=AntiClockWise;
    choosedImage.style.transform=`rotate(${-AntiClockWise}deg)`; 
    choosedImage.style.transform=`rotate(0deg)`; 
}

function Rotation(){
    $("#pro").toggle();
    $(".Rotate").toggle();
    $("#ShapeTool").hide();
    $("#SizeTool").hide();
    $(".container-Tools").hide();
    $("#ContaineTextTool").hide();
    $(".borderImageTools").hide();
    $(".Flip").hide();
    $(".rotate").hide();
    $(".addImageTools").hide();
}