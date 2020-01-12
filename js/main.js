// var getid=document.getElementById(StyleText);
// var selectSize=document.getElementById(Size);
// var selectPolice=document.getElementById(Police);
// var document.getElementByClass(Courses);

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

$(document).ready(()=>{

    $("button").css({"opacity":"0"});

    $(".courses div").mouseenter(function(){
        $(this).css({"opacity":"0.5"});
        str = "."+this.className+" button";
        $(str).css({"opacity":"1"});
        console.log(str)
    })

    $(".courses div").mouseleave(function(){
        $(this).css({"opacity":"1"});
        str = "."+this.className+" button";
        $(str).css({"opacity":"0"});
    })

});