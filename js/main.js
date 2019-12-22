// var getid=document.getElementById(StyleText);
// var selectSize=document.getElementById(Size);
// var selectPolice=document.getElementById(Police);

function makeBold(){
    if(document.getElementById("MyText").style.fontWeight == "")
        document.getElementById("MyText").style.fontWeight = "bold";
    else
        document.getElementById("MyText").style.fontWeight = ""
}

function makeItalic(){
    if(document.getElementById("MyText").style.fontStyle=="")
       document.getElementById("MyText").style.fontStyle="italic";
    else
       document.getElementById("MyText").style.fontStyle=""
}

function makeUnderline(){
    if(document.getElementById("MyText").style.textDecoration=="")
       document.getElementById("MyText").style.textDecoration="underline";
    else
     document.getElementById("MyText").style.textDecoration=""
}

function changeSize(){
    document.getElementById("MyText").style.fontSize = document.getElementById("Size").value+"px";
}
function changePolice(){
    document.getElementById("MyText").style.fontFamily = document.getElementById("Police").value;
    
}








