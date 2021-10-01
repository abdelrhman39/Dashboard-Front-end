var choos = document.getElementById("choos");


choos.onclick=function(){    
    if( update.style.display == "block" ){
         update.style.display = "none";   
        }else{  
        update.style.display = "block";
        update2.style.display = "none";
        update3.style.display = "none";
        update4.style.display = "none";
        update5.style.display = "none";
        update6.style.display = "none";
}
}
choos2.onclick=function(){    
    if( update2.style.display == "block" ){
         update2.style.display = "none";   
        }else{  
        update2.style.display = "block";
        update.style.display = "none";
        update3.style.display = "none";
        update4.style.display = "none";
        update5.style.display = "none";
        update6.style.display = "none";
}
}

choos3.onclick=function(){    
    if( update3.style.display == "block" ){
         update3.style.display = "none";   
        }else{  
        update3.style.display = "block";
        update2.style.display = "none";
        update.style.display = "none";
        update4.style.display = "none";
        update5.style.display = "none";
        update6.style.display = "none";
}
}
choos4.onclick=function(){    
    if( update4.style.display == "block" ){
         update4.style.display = "none";   
        }else{  
        update4.style.display = "block";
        update2.style.display = "none";
        update3.style.display = "none";
        update.style.display = "none";
        update5.style.display = "none";
        update6.style.display = "none";
}
}
choos5.onclick=function(){    
    if( update5.style.display == "block" ){
         update5.style.display = "none";   
        }else{  
        update5.style.display = "block";
        update2.style.display = "none";
        update3.style.display = "none";
        update4.style.display = "none";
        update.style.display = "none";
        update6.style.display = "none";
}
}
choos6.onclick=function(){    
    if( update6.style.display == "block" ){
         update6.style.display = "none";   
        }else{  
        update6.style.display = "block";
        update2.style.display = "none";
        update3.style.display = "none";
        update4.style.display = "none";
        update5.style.display = "none";
        update.style.display = "none";
}
}

$(document).ready(function(){
  $('form input').change(function () {
    $('form p').text(this.files.length + " file(s) selected");
  });
});

var radio_img = document.getElementById("radio_img");

radio_img.onclick=function(){
    radio_img.style.backgroundColor="red";
}


















