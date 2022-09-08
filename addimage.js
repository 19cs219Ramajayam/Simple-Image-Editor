$(".addImageTools").hide();
$("#Choosed-image2").hide();
var choosedImage2=document.getElementById("Choosed-image2");
function Add(event){
    var choosedImage2=document.getElementById("Choosed-image2");
    var uploadedImage=event.target;
    const reader=new FileReader();
    reader.onload=function(){
        var URL=reader.result
        choosedImage2.src=URL;
    };
    reader.readAsDataURL(uploadedImage.files[0]);
}

function AddWidth(){
    var AddWidth=document.getElementById("AddWidth").value;
    document.getElementById("AddWidth-Value2").innerHTML=AddWidth;
    choosedImage2.style.width=`${AddWidth}%`;
}
function AddHeight(){
    var AddHeight=document.getElementById("AddHeight").value;
    document.getElementById("AddHeight-Value2").innerHTML=AddHeight;
    choosedImage2.style.height=`${AddHeight}%`;
}
function AddLeft(){
    var AddLeft=document.getElementById("AddLeft").value;
    document.getElementById("AddLeft-Value2").innerHTML=AddLeft;
    choosedImage2.style.left=`${AddLeft}%`;
}
function AddBottom(){
    var AddBottom=document.getElementById("AddBottom").value;
    document.getElementById("AddBottom-Value2").innerHTML=AddBottom;
    choosedImage2.style.bottom=`${AddBottom}%`;
}
function AddTop(){
    var AddTop=document.getElementById("AddTop").value;
    document.getElementById("AddTop-Value2").innerHTML=AddTop;
    choosedImage2.style.top=`${AddTop}%`;
}
function AddRadius(){
    var AddRadius=document.getElementById("AddRadius").value;
    document.getElementById("AddRadius-Value2").innerHTML=AddRadius;
    choosedImage2.style.borderRadius=`${AddRadius}%`;
}
function AddWidthbutton(){
    $("#AddWidth").toggle();
    $("#AddWidth-Value1").toggle();
    $("#AddWidth-Value2").toggle();
}
function AddHeightbutton(){
    $("#AddHeight").toggle();
    $("#AddHeight-Value1").toggle();
    $("#AddHeight-Value2").toggle();
}
function AddTopbutton(){
    $("#AddTop").toggle();
    $("#AddTop-Value1").toggle();
    $("#AddTop-Value2").toggle();
}
function AddLeftbutton(){
    $("#AddLeft").toggle();
    $("#AddLeft-Value1").toggle();
    $("#AddLeft-Value2").toggle();
}
function AddBottombutton(){
    $("#AddBottom").toggle();
    $("#AddBottom-Value1").toggle();
    $("#AddBottom-Value2").toggle();
}
function AddRadiusbutton(){
    $("#AddRadius").toggle();
    $("#AddRadius-Value1").toggle();
    $("#AddRadius-Value2").toggle();
}
function AddImage(){
    $(".addImageTools").toggle();
    $("#Choosed-image2").toggle();
    $("#ShapeTool").hide();
    $("#SizeTool").hide();
    $(".container-Tools").hide();
    $("#ContaineTextTool").hide();
    $(".borderImageTools").hide();
    $("#pro").toggle();
    $(".Flip").hide();
    $(".Rotate").hide();
}