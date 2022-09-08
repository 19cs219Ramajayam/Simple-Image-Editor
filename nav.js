function out(){
    var c=confirm("Are You Sure To Leave This Website");
    if(c==true){
        window.close();
    };
}
function navColor(){
    var NavColor=document.querySelector("#NavColor");
    document.body.style.backgroundColor=`${NavColor.value}`;
}
function A1(){
   document.body.style.fontSize="23px";
   document.getElementById("pro").style.marginRight="-19px";
   document.getElementById("tools").style.marginLeft="0px";
   document.querySelector("h3").style.fontSize="19px";
   document.querySelector("h3").style.marginTop="7px";
   var btn= document.querySelectorAll("#btn");
   btn[0].style.fontSize="13px";
   btn[1].style.fontSize="13px";
   btn[2].style.fontSize="13px";
   btn[3].style.fontSize="13px";
   btn[4].style.fontSize="13px";
   btn[5].style.fontSize="13px";
   var i=document.querySelectorAll("#MediaSize");
   i[0].style.fontSize="16px";
   i[1].style.fontSize="16px";
   i[2].style.fontSize="16px";
   i[3].style.fontSize="16px";
   i[4].style.fontSize="16px";
}
function A2(){
    document.body.style.fontSize="10px";
    document.getElementById("tools").style.marginLeft="19px";
    document.getElementById("pro").style.marginRight="23px";
    document.querySelector("h3").style.fontSize="19px";
    document.querySelector("h3").style.marginTop="7px";
   var a= document.querySelectorAll("#btn");
   a[0].style.fontSize="13px";
   a[1].style.fontSize="13px";
   a[2].style.fontSize="13px";
   a[3].style.fontSize="13px";
   a[4].style.fontSize="13px";
   a[5].style.fontSize="13px";
   var i=document.querySelectorAll("#MediaSize");
   i[0].style.fontSize="16px";
   i[1].style.fontSize="16px";
   i[2].style.fontSize="16px";
   i[3].style.fontSize="16px";
   i[4].style.fontSize="16px";
 }
 function A3(){
    document.body.style.fontSize="19px";
    document.getElementById("tools").style.marginLeft="-1px";
    document.getElementById("pro").style.marginRight="-10px";
    document.querySelector("h3").style.fontSize="19px";
    document.querySelector("h3").style.marginTop="7px";
   var a= document.querySelectorAll("#btn");
   a[0].style.fontSize="13px";
   a[1].style.fontSize="13px";
   a[2].style.fontSize="13px";
   a[3].style.fontSize="13px";
   a[4].style.fontSize="13px";
   a[5].style.fontSize="13px";
   var i=document.querySelectorAll("#MediaSize");
   i[0].style.fontSize="16px";
   i[1].style.fontSize="16px";
   i[2].style.fontSize="16px";
   i[3].style.fontSize="16px";
   i[4].style.fontSize="16px";
 }
/********************************************************* white Mode **************************************/
function White(){
    document.body.style.backgroundColor="black";
    document.querySelector(".color").style.backgroundColor="white";
    document.querySelector("hr").style.color="black";
    document.getElementById("tools").style.color="black";
    document.getElementById("pro").style="color:black;display:none";
    document.querySelector("#MainTools").style="border: 2px solid black;"
    document.querySelector(".container-Tools").style="border: 2px solid black;display:none"
    document.querySelector("#ContaineTextTool").style="border: 2px solid black;display:none"
    document.querySelector("#SizeTool").style="border: 2px solid black;display:none"
    document.querySelector("#ShapeTool").style="border: 2px solid black;display:none"
    document.querySelector(".borderImageTools").style="border: 2px solid black;display:none"
    document.querySelector(".Flip").style="border: 2px solid black;display:none"
    document.querySelector(".Rotate").style="border: 2px solid black;display:none"
}
function Black(){
    document.body.style.backgroundColor="white";
    document.querySelector(".color").style.backgroundColor="black";
    document.querySelector("hr").style.color="white";
    document.getElementById("tools").style.color="white";
    document.getElementById("pro").style="color:white;display:none";
    document.querySelector("#MainTools").style="border: 2px solid white;"
    document.querySelector(".container-Tools").style="border: 2px solid white;display:none"
    document.querySelector("#ContaineTextTool").style="border: 2px solid white;display:none"
    document.querySelector("#SizeTool").style="border: 2px solid white;display:none"
    document.querySelector("#ShapeTool").style="border: 2px solid white;display:none"
    document.querySelector(".borderImageTools").style="border: 2px solid white;display:none"
    document.querySelector(".Flip").style="border: 2px solid white;display:none"
    document.querySelector(".Rotate").style="border: 2px solid white;display:none"
}