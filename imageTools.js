var ImageTools=document.getElementById("Choosed-image");
$("#ShapeTool").hide();
$("#SizeTool").hide();
$(".borderImageTools").hide();
function ShapeTools(){
    $("#ShapeTool").toggle();
    $("#SizeTool").hide();
    $(".container-Tools").hide();
    $("#ContaineTextTool").hide();
    $(".borderImageTools").hide();
    $("#pro").toggle();
    $(".Flip").hide();
    $(".Rotate").hide();
    $(".addImageTools").hide();
}
function SizeTools(){
    $("#ShapeTool").hide();
    $("#SizeTool").toggle();
    $(".container-Tools").hide();
    $("#ContaineTextTool").hide();
    $(".borderImageTools").hide();
    $("#pro").toggle();
    $(".Flip").hide();
    $(".Rotate").hide();
    $(".addImageTools").hide();
}
function ImageFrame(){
    $("#pro").toggle();
    $(".borderImageTools").toggle();
    $("#ShapeTool").hide();
    $("#SizeTool").hide();
    $(".container-Tools").hide();
    $("#ContaineTextTool").hide();
    $(".Flip").hide();
    $(".Rotate").hide();
    $(".addImageTools").hide();
}

function Shape(){
    var Shape=document.getElementById("Shape").value;
    document.getElementById("Shape-Value2").innerHTML=Shape;
    ImageTools.style.borderRadius=`${Shape}%`; 
}
function TopRect(){
    var TopRect=document.getElementById("TopRect").value;
    var RightRect=document.getElementById("RightRect").value;
    var BottomRect=document.getElementById("BottomRect").value;
    var LeftRect=document.getElementById("LeftRect").value;
    document.getElementById("TopRect-Value2").innerHTML=TopRect;
    ImageTools.style=`clip:rect(${TopRect}px,${RightRect}px,${BottomRect}px,${LeftRect}px)`; 
}
function RightRect(){
    var TopRect=document.getElementById("TopRect").value;
    var RightRect=document.getElementById("RightRect").value;
    var BottomRect=document.getElementById("BottomRect").value;
    var LeftRect=document.getElementById("LeftRect").value;
    document.getElementById("RightRect-Value2").innerHTML=RightRect;
    ImageTools.style=`clip:rect(${TopRect}px,${RightRect}px,${BottomRect}px,${LeftRect}px)`; 
}
function BottomRect(){
    var TopRect=document.getElementById("TopRect").value;
    var RightRect=document.getElementById("RightRect").value;
    var BottomRect=document.getElementById("BottomRect").value;
    var LeftRect=document.getElementById("LeftRect").value;
    console.log(document.getElementById("BottomRect-Value2").innerHTML=BottomRect);

    ImageTools.style=`clip:rect(${TopRect}px,${RightRect}px,${BottomRect}px,${LeftRect}px)`; 
}
function LeftRect(){
    var TopRect=document.getElementById("TopRect").value;
    var RightRect=document.getElementById("RightRect").value;
    var BottomRect=document.getElementById("BottomRect").value;
    var LeftRect=document.getElementById("LeftRect").value;
    document.getElementById("LeftRect-Value2").innerHTML=LeftRect;
    ImageTools.style=`clip:rect(${TopRect}px,${RightRect}px,${BottomRect}px,${LeftRect}px)`; 
}
function Width(){
    var Width=document.getElementById("Width").value;
    document.getElementById("Width-Value2").innerHTML=Width;
    ImageTools.style.width=`${Width}%`;
}
function MaxWidth(){
    var MaxWidth=document.getElementById("MaxWidth").value;
    document.getElementById("MaxWidth-Value2").innerHTML=MaxWidth;
    ImageTools.style.maxWidth=`${MaxWidth}%`;
}
function MinWidth(){
    var MinWidth=document.getElementById("MinWidth").value;
    document.getElementById("MinWidth-Value2").innerHTML=MinWidth;
    ImageTools.style.minWidth=`${MinWidth}%`;
}
function Height(){
    var Height=document.getElementById("Height").value;
    document.getElementById("Height-Value2").innerHTML=Height;
    ImageTools.style.height=`${Height}em`;
}
function MaxHeight(){
    var MaxHeight=document.getElementById("MaxHeight").value;
    document.getElementById("MaxHeight-Value2").innerHTML=MaxHeight;
    ImageTools.style.maxHeight=`${MaxHeight}em`;
}
function MinHeight(){
    var MinHeight=document.getElementById("MinHeight").value;
    document.getElementById("MinHeight-Value2").innerHTML=MinHeight;
    ImageTools.style.minHeight=`${MinHeight}em`;
}
/************************************************* image frame ************************/
function border(){
    var BorderStyle=document.getElementById("style").value;
    ImageTools.style.borderStyle=`${BorderStyle}`;
}
function BorderColor(){
    var BorderColor=document.getElementById("borderColor").value;
    ImageTools.style.borderColor=`${BorderColor}`;
}
function pixel(){
    var pixels=document.getElementById("pixel").value;
    document.getElementById("BorderPixels-Value2").innerHTML=pixels;
    ImageTools.style.borderWidth=`${pixels}px`;
}
function BorderSpace(){
    var BorderSpace=document.querySelector("#BorderSpace").value;
    console.log(document.getElementById("BorderSpace-value2").innerHTML="kjhjj");
    ImageTools.style.padding=`${BorderSpace}px`;
}
function BorderRadius(){
    var radius=document.getElementById("BorderRadius").value;
    document.getElementById("BorderRadius-Value2").innerHTML=radius;
    var choosedImage=document.getElementById("Choosed-image");
    ImageTools.style.borderRadius=`${radius}%`;
    choosedImage.style.borderRadius=`${radius}%`;
}