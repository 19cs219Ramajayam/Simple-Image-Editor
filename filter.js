/****************************************** Access Editing Image  **************************/
var choosedImage=document.getElementById("Choosed-image");
 
var canvas=document.getElementById("canvas2");
var content=canvas.getContext("2d");

/*************************************** Tools Using Range *********************************/

/************* Blur The Image ***************/

function Blur(){
          var BlurRange=document.getElementById("Blur").value;
          document.getElementById("Blur-Value2").innerHTML=BlurRange;
         console.log(choosedImage.style.filter=`blur(${BlurRange}px)`);
         console.log(content.filter=`blur(${BlurRange}px)`);  
}

/************ GrayScale Of The Image ***************/

function GrayScale(){
          var GrayScaleRange=document.getElementById("GrayScale").value;
          document.getElementById("GrayScale-Value2").innerHTML=GrayScaleRange;
          choosedImage.style.filter=`grayscale(${GrayScaleRange}%)`;
          content.filter=`grayscale(${GrayScaleRange})`;
}

/********************** Brightness Of The Image *********/

function Brightness(){
          var BrightnessRange=document.getElementById("Brightness").value;
          document.getElementById("Brightness-Value2").innerHTML=BrightnessRange;
          choosedImage.style.filter=`brightness(${BrightnessRange}%)`;
          content.filter=`brightness(${BrightnessRange})`;
}

/********************** Contrast Of The Image *********/

function Contrast(){
  var ContrastRange=document.getElementById("Contrast").value;
  document.getElementById("Contrast-Value2").innerHTML=ContrastRange;
  choosedImage.style.filter=`contrast(${ContrastRange}%)`;
}

/********************** Rotate Of The Image *********/

function Rotate(){
  var RotateRange=document.getElementById("Rotate").value;
  document.getElementById("Rotate-Value2").innerHTML=RotateRange;
  choosedImage.style.filter=`hue-rotate(${RotateRange}deg)`;
}

/********************** Invert Of The Image *********/

function Invert(){
  var InvertRange=document.getElementById("Invert").value;
  document.getElementById("Invert-Value2").innerHTML=InvertRange;
  choosedImage.style.filter=`invert(${InvertRange}%)`;
}

/********************** Opacity Of The Image *********/

function Opacity(){
  var OpacityRange=document.getElementById("Opacity").value;
  document.getElementById("Opacity-Value2").innerHTML=OpacityRange;
  choosedImage.style.filter=`opacity(${OpacityRange}%)`;
}

/********************** Saturate Of The Image *********/

function Saturate(){
  var SaturateRange=document.getElementById("Saturate").value;
  document.getElementById("Saturate-Value2").innerHTML=SaturateRange;
  choosedImage.style.filter=`saturate(${SaturateRange})`;
}

/********************** Sepia Of The Image *********/

function Sepia(){
  var SepiaRange=document.getElementById("Sepia").value;
  document.getElementById("Sepia-Value2").innerHTML=SepiaRange;
  choosedImage.style.filter=`sepia(${SepiaRange}%)`;
}
function TopShadow(){
  var TopShadow=document.getElementById("TopShadow").value;
  var LeftShadow=document.getElementById("LeftShadow").value;
  var BlurShadow=document.getElementById("BlurShadow").value;
  var ColorShadow=document.getElementById("ColorShadow").value;
  document.getElementById("TopShadow-Value2").innerHTML=TopShadow;
  choosedImage.style=`filter: drop-shadow(${-LeftShadow}px ${-TopShadow}px ${BlurShadow}px ${ColorShadow})`;
}
function LeftShadow(){
  var TopShadow=document.getElementById("TopShadow").value;
  var LeftShadow=document.getElementById("LeftShadow").value;
  var BlurShadow=document.getElementById("BlurShadow").value;
  var ColorShadow=document.getElementById("ColorShadow").value;
  document.getElementById("LeftShadow-Value2").innerHTML=LeftShadow;
  choosedImage.style=`filter: drop-shadow(${-LeftShadow}px ${-TopShadow}px ${BlurShadow}px ${ColorShadow})`;
}
function BottomShadow(){
  var BottomShadow=document.getElementById("BottomShadow").value;
  var RightShadow=document.getElementById("RightShadow").value;
  var BlurShadow=document.getElementById("BlurShadow").value;
  var ColorShadow=document.getElementById("ColorShadow").value;
  document.getElementById("BottomShadow-Value2").innerHTML=BottomShadow;
  choosedImage.style=`filter: drop-shadow(${RightShadow}px ${BottomShadow}px ${BlurShadow}px ${ColorShadow})`;
}
function RightShadow(){
  var BottomShadow=document.getElementById("BottomShadow").value;
  var RightShadow=document.getElementById("RightShadow").value;
  var BlurShadow=document.getElementById("BlurShadow").value;
  var ColorShadow=document.getElementById("ColorShadow").value;
  document.getElementById("RightShadow-Value2").innerHTML=RightShadow;
  choosedImage.style=`filter: drop-shadow(${RightShadow}px ${BottomShadow}px ${BlurShadow}px ${ColorShadow})`;
}
function BlurShadow(){
  var BottomShadow=document.getElementById("BottomShadow").value;
  var RightShadow=document.getElementById("RightShadow").value;
  var BlurShadow=document.getElementById("BlurShadow").value;
  var ColorShadow=document.getElementById("ColorShadow").value;
  document.getElementById("BlurShadow-Value2").innerHTML=BlurShadow;
  choosedImage.style=`filter: drop-shadow(${RightShadow}px ${BottomShadow}px ${BlurShadow}px ${ColorShadow})`;
}
function BlurShadow(){
  var TopShadow=document.getElementById("TopShadow").value;
  var LeftShadow=document.getElementById("LeftShadow").value;
  var BlurShadow=document.getElementById("BlurShadow").value;
  var ColorShadow=document.getElementById("ColorShadow").value;
  document.getElementById("BlurShadow-Value2").innerHTML=BlurShadow;
  choosedImage.style=`filter: drop-shadow(${-LeftShadow}px ${-TopShadow}px ${BlurShadow}px ${ColorShadow})`;
}
function ColorShadow(){
  var BottomShadow=document.getElementById("BottomShadow").value;
  var RightShadow=document.getElementById("RightShadow").value;
  var BlurShadow=document.getElementById("BlurShadow").value;
  var ColorShadow=document.getElementById("ColorShadow").value;
  document.getElementById("ColorShadow-Value2").innerHTML=ColorShadow;
  choosedImage.style=`filter: drop-shadow(${RightShadow}px ${BottomShadow}px ${BlurShadow}px ${ColorShadow})`;
}
function ColorShadow(){
  var TopShadow=document.getElementById("TopShadow").value;
  var LeftShadow=document.getElementById("LeftShadow").value;
  var BlurShadow=document.getElementById("BlurShadow").value;
  var ColorShadow=document.getElementById("ColorShadow").value;
  document.getElementById("LeftShadow-Value2").innerHTML=LeftShadow;
  choosedImage.style=`filter: drop-shadow(${-LeftShadow}px ${-TopShadow}px ${BlurShadow}px ${ColorShadow})`;
}