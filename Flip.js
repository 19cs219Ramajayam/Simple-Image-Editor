$(".Flip").hide();
var choosedImage=document.getElementById("Choosed-image");
function FL(){
   choosedImage.style.transform="scalex(-1)";
}
function FR(){
    choosedImage.style.transform="scalex(1)";
 }
 function FT(){
   choosedImage.style.transform="scaley(-1)";
}
function FB(){
    choosedImage.style.transform="scale(-1)";
 }
 function Flip(){
    $(".Flip").toggle();
    $("#ContaineTextTool").hide();
    $(".container-Tools").hide();
    $("#ShapeTool").hide();
    $("#SizeTool").hide();
    $(".borderImageTools").hide();
    $("#pro").toggle();
    $(".Rotate").hide();
    $(".addImageTools").hide();
 }