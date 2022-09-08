var textShowOnImage=document.getElementById("textShowOnImage");
var choosedImage=document.getElementById("Choosed-image");
/***********************text Tools Show ********************************/
$("#ContaineTextTool").hide();
$("#FontFamily").hide();
function TextTools(){
    $("#pro").toggle();
    $("#ContaineTextTool").toggle();
    $(".container-Tools").hide();
    $("#ShapeTool").hide();
    $("#SizeTool").hide();
    $(".borderImageTools").hide();
    $(".Flip").hide();
    $(".Rotate").hide();
    $(".addImageTools").hide();
 } 
/*********************************** display the Range *********************************/
function WriteTheText(){
    $("#text").toggle();
}
function LeftButton(){
    $("#left").toggle();
    $("#Left-Value1").toggle();
    $("#Left-Value2").toggle();
}
function BottomButton(){
    $("#bottom").toggle();
    $("#Bottom-Value1").toggle();
    $("#Bottom-Value2").toggle();
}
function TextColorButton(){
    $("#color").toggle();
}
function TextBackGroundColorButton(){
    $("#BackgroundColor").toggle();
}
function TextFontButton(){
    $("#font").toggle();
    $("#font-Value1").toggle();
    $("#font-Value2").toggle();
}
function TextSpaceButton(){
    $("#space").toggle();
    $("#space-Value1").toggle();
    $("#space-Value2").toggle();
}
function TextBorderRadiusButton(){
    $("#radius").toggle();
    $("#radius-Value1").toggle();
    $("#radius-Value2").toggle();
}
function TextBorderWidthButton(){
    $("#BorderWidth").toggle();
    $("#BorderWidth-Value1").toggle();
    $("#BorderWidth-Value2").toggle();
}
function TextFontFamilyButton(){
    $("#FontFamily").toggle();
}
function TBW(){
    $("#Textpixel").toggle();
    $("#TextBorderPixels-Value1").toggle();
    $("#TextBorderPixels-Value2").toggle();
}
function TBS(){
    $("#Textstyle").toggle();
}
function TBC(){
    $("#TextborderColor").toggle();
}
function TBSE(){
    $("#TextShadowLeft").toggle();
    $("#TextShadowLeft-Value1").toggle();
    $("#TextShadowLeft-Value2").toggle();
    $("#TextShadowBlur").toggle();
    $("#TextShadowBlur-Value1").toggle();
    $("#TextShadowBlur-Value2").toggle();
    $("#TextShadowRight").toggle();
    $("#TextShadowRight-Value1").toggle();
    $("#TextShadowRight-Value2").toggle();
    $("#TextShadowBottom").toggle();
    $("#TextShadowBottom-Value1").toggle();
    $("#TextShadowBottom-Value2").toggle();
    $("#TextShadowTop").toggle();
    $("#TextShadowTop-Value1").toggle();
    $("#TextShadowTop-Value2").toggle();
    $("#TextShadowColor").toggle();
 }
/***************************align text left ,right,center ********************************/
function left(){
    var left=document.getElementById("left").value;
    document.getElementById("Left-Value2").innerHTML=left;
    textShowOnImage.style.left=`${left}%`;
}
function bottom(){
    var bottom=document.getElementById("bottom").value;
    document.getElementById("Bottom-Value2").innerHTML=bottom;
    textShowOnImage.style.bottom=`${bottom}%`;
}
/************** Text Design Tool  *****************************/
function Color(){
    var color=document.getElementById("color").value;
    textShowOnImage.style.color=`${color}`;
}
function BackgroundColor(){
    var BackgroundColor=document.getElementById("BackgroundColor").value;
    textShowOnImage.style.backgroundColor=`${BackgroundColor}`;
}
function Font(){
    var Font=document.getElementById("font").value;
    document.getElementById("font-Value2").innerHTML=Font;
    var a=textShowOnImage.style.fontSize=`${Font}px`;
    console.log(a);

}

function UnderLine(){
    textShowOnImage.style.textDecoration="underline";
}
function LowerCase(){
    textShowOnImage.style.textTransform="lowercase";
}
function UpperCase(){
    textShowOnImage.style.textTransform="uppercase";
}
function Capitalize(){
    textShowOnImage.style.textTransform="capitalize";
}
function Italic(){
    textShowOnImage.style.fontStyle="italic";
}
function Bold(){
    textShowOnImage.style.fontWeight="bold";
}
function Normal(){
    textShowOnImage.style.fontStyle="normal";
    textShowOnImage.style.fontWeight="normal";
}
function space(){
    var padding=document.getElementById("space").value;
    document.getElementById("space-Value2").innerHTML=padding;
    textShowOnImage.style.padding=`${padding}px`;
}
function radius(){
    var radius=document.getElementById("radius").value;
    document.getElementById("radius-Value2").innerHTML=radius;
    textShowOnImage.style.borderRadius=`${radius}%`;
}
function BorderWidth(){
    var BorderWidth=document.getElementById("BorderWidth").value;
    document.getElementById("BorderWidth-Value2").innerHTML=BorderWidth;
    textShowOnImage.style.width=`${BorderWidth}%`;
}
function FontFamily(){
    var FontFamily=document.getElementById("FontFamily").value;
    textShowOnImage.style.fontFamily=`${FontFamily}`;
}
function TextAppear(){
       var InputText=document.getElementById("text").value;
       textShowOnImage.innerHTML=InputText;
}
function Textstyle(){
    var Textstyle=document.getElementById("Textstyle").value;
    textShowOnImage.style.borderStyle=`${Textstyle}`;
}
function TextborderColor(){
    var TextborderColor=document.getElementById("TextborderColor").value;
    textShowOnImage.style.borderColor=`${TextborderColor}`;
}
function Textpixel(){
    var Textpixel=document.getElementById("Textpixel").value;
    document.getElementById("TextBorderPixels-Value2").innerHTML=Textpixel;
    textShowOnImage.style.borderWidth=`${Textpixel}px`;
}
function TextShadowTop(){
    var TextShadowTop=document.getElementById("TextShadowTop").value;
    var TextShadowLeft=document.getElementById("TextShadowLeft").value;
    var TextShadowColor=document.getElementById("TextShadowColor").value;
    var TextShadowBlur=document.getElementById("TextShadowBlur").value;
    document.getElementById("TextShadowTop-Value2").innerHTML=TextShadowTop;
    textShowOnImage.style=`text-shadow:${-TextShadowLeft}px ${-TextShadowTop}px ${TextShadowBlur}px ${TextShadowColor}`;
}
function TextShadowLeft(){
    var TextShadowTop=document.getElementById("TextShadowTop").value;
    var TextShadowLeft=document.getElementById("TextShadowLeft").value;
    var TextShadowColor=document.getElementById("TextShadowColor").value;
    var TextShadowBlur=document.getElementById("TextShadowBlur").value;

    document.getElementById("TextShadowLeft-Value2").innerHTML=TextShadowLeft;
    textShowOnImage.style=`text-shadow:${-TextShadowLeft}px ${-TextShadowTop}px ${TextShadowBlur}px ${TextShadowColor}`;
}
function TextShadowBottom(){
    var TextShadowBottom=document.getElementById("TextShadowBottom").value;
    var TextShadowRight=document.getElementById("TextShadowRight").value;
    var TextShadowColor=document.getElementById("TextShadowColor").value;
    var TextShadowBlur=document.getElementById("TextShadowBlur").value;
    
    document.getElementById("TextShadowBottom-Value2").innerHTML=TextShadowBottom;
    textShowOnImage.style=`text-shadow:${TextShadowBottom}px ${TextShadowRight}px ${TextShadowBlur}px ${TextShadowColor}`;
}
function TextShadowRight(){
    var TextShadowBottom=document.getElementById("TextShadowBottom").value;
    var TextShadowRight=document.getElementById("TextShadowRight").value;
    var TextShadowColor=document.getElementById("TextShadowColor").value;
    var TextShadowBlur=document.getElementById("TextShadowBlur").value;
   
    document.getElementById("TextShadowRight-Value2").innerHTML=TextShadowRight;
    textShowOnImage.style=`text-shadow:${TextShadowBottom}px ${TextShadowRight}px ${TextShadowBlur}px ${TextShadowColor}`;
}
function TextShadowBlur(){
    var TextShadowBottom=document.getElementById("TextShadowBottom").value;
    var TextShadowRight=document.getElementById("TextShadowRight").value;
    var TextShadowColor=document.getElementById("TextShadowColor").value;
    var TextShadowBlur=document.getElementById("TextShadowBlur").value;
    document.getElementById("TextShadowBlur-Value2").innerHTML=TextShadowBlur;
    textShowOnImage.style=`text-shadow:${TextShadowBottom}px ${TextShadowRight}px ${TextShadowBlur}px ${TextShadowColor}`;
}
function TextShadowColor(){
    var TextShadowBottom=document.getElementById("TextShadowBottom").value;
    var TextShadowRight=document.getElementById("TextShadowRight").value;
    var TextShadowBlur=document.getElementById("TextShadowBlur").value;
    var TextShadowColor=document.getElementById("TextShadowColor").value;
    textShowOnImage.style=`text-shadow:${TextShadowRight}px ${TextShadowBottom}px ${TextShadowBlur}px ${TextShadowColor}`;
}
function TextShadowColor(){
    var TextShadowTop=document.getElementById("TextShadowTop").value;
    var TextShadowLeft=document.getElementById("TextShadowLeft").value;
    var TextShadowBlur=document.getElementById("TextShadowBlur").value;
    var TextShadowColor=document.getElementById("TextShadowColor").value;
    textShowOnImage.style=`text-shadow:${-TextShadowLeft}px ${-TextShadowTop}px ${TextShadowBlur}px ${TextShadowColor}`;
}