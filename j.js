var heading=document.getElementsByClassName("accordin")
var i;
for( i=0; i<heading.length; i++){
    heading[i].addEventListener("click" , function(){
        var desc=this.nextElementSibling;
        if(di=desc.style.display=="block"){
            desc.style.display="none"
        }else{
            desc.style.display="block"
        }


    }


        
    );

}