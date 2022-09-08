/***********************filter Tools Show ********************************/
$(".container-Tools").hide()
$("#pro").hide();
function FilterShow(){
   $(".container-Tools").toggle();
   $("#ContaineTextTool").hide();
   $("#ShapeTool").hide();
   $("#SizeTool").hide();
   $(".borderImageTools").hide();
   $("#pro").toggle();
   $(".Flip").hide();
   $(".Rotate").hide();
   $(".addImageTools").hide();
}
$("input").hide();
$("span").hide();
$("strong").hide();
$("span").hide();
$("#NavColor").show();
document.getElementById("BlurRangeShow").addEventListener("click",function(){
 $("#Blur").toggle();
 $("#Blur-Value1").toggle();
 $("#Blur-Value2").toggle();
});
function GrayScaleRangeShow(){
 $("#GrayScale").toggle();
 $("#GrayScale-Value1").toggle();
 $("#GrayScale-Value2").toggle();
}
function BrightnessRangeShow(){
 $("#Brightness").toggle();
 $("#Brightness-Value1").toggle();
 $("#Brightness-Value2").toggle();
}
function ContrastRangeShow(){
 $("#Contrast").toggle();
 $("#Contrast-Value1").toggle();
 $("#Contrast-Value2").toggle();
}
function HueRotateRangeShow(){
 $("#Rotate").toggle();
 $("#Rotate-Value1").toggle();
 $("#Rotate-Value2").toggle();
}
function InvertRangeShow(){
   $("#Invert").toggle();
   $("#Invert-Value1").toggle();
   $("#Invert-Value2").toggle();
}
function OpacityRangeShow(){
   $("#Opacity").toggle();
   $("#Opacity-Value1").toggle();
   $("#Opacity-Value2").toggle();
}
function SaturateRangeShow(){
   $("#Saturate").toggle();
   $("#Saturate-Value1").toggle();
   $("#Saturate-Value2").toggle();
}
function SepiaRangeShow(){
   $("#Sepia").toggle();
   $("#Sepia-Value1").toggle();
   $("#Sepia-Value2").toggle();
}
function ShadowRangeShow(){
   $("#TopShadow").toggle();
   $("#TopShadow-Value1").toggle();
   $("#TopShadow-Value2").toggle();
   $("#LeftShadow").toggle();
   $("#LeftShadow-Value1").toggle();
   $("#LeftShadow-Value2").toggle();
   $("#BottomShadow").toggle();
   $("#BottomShadow-Value1").toggle();
   $("#BottomShadow-Value2").toggle();
   $("#RightShadow").toggle();
   $("#RightShadow-Value1").toggle();
   $("#RightShadow-Value2").toggle();
   $("#BlurShadow").toggle();
   $("#BlurShadow-Value1").toggle();
   $("#BlurShadow-Value2").toggle();
   $("#ColorShadow").toggle();
   $("#ColorShadow-Value").toggle();
}