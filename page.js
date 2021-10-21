import {buttons, filter, show} from  "./component.js";



//on dom load

document.addEventListener('DOMContentLoaded', () => {
   welcomepage();

    // oc click logo button load home page
    document.querySelector(".logo").addEventListener("click", ()=>{
          welcomepage();
        

    })

    buttons();

    // on click channel button

    document.querySelectorAll("button").forEach((button) => {
            button.onclick = function () {
            document.querySelectorAll(".on").forEach((activebutton) => {activebutton.className = "off"});
            button.className = "on";
            let page = button.dataset.network;   
           
            show(page,"home");
            filter(page);
            tags();
            document.querySelector("#home").className="filtertag-on"; 
         
               
        }
        
    });


                document.querySelector(".design").innerHTML = "🎨 design by<span class='author'><a href='https://twitter.com/neeravnadla' target='_blank'>neeravnadla.</a>  <span>";

        // on click card button

        
 

});

  

function tags (){
     
     document.querySelectorAll(".filtertag-off").forEach((tag) => {
        tag.onclick = function () {
            document.querySelectorAll(".filtertag-on").forEach((activetag) => {activetag.className = "filtertag-off"});
           tag.className = "filtertag-on";
            let page = tag.id;   
            let channel = tag.dataset.network;
            show(channel,page);
           
        }
    });
   
}

 
 
function welcomepage(){
    document.querySelectorAll(".off").forEach((activebutton) =>{activebutton.className = "on";} ); 
    document.querySelector(".filter").innerHTML="";
    document.querySelector(".feed").innerHTML=" hi, welcome back";
    
};


window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".herotop").style.position = "sticky";
    
    document.querySelector(".nav").style.fontSize = "0.7em";
     document.querySelectorAll(".channels button img").forEach(element => {
         element.style.width = "50px";
          element.style.height = "50px";
         

     });
     
    document.querySelector(".herotop").style.top = 0;
  } 
  else{

     document.querySelector(".nav").style.fontSize = "1em";
     document.querySelectorAll(".channels button img").forEach(element => {
         element.style.width = "80px";
          element.style.height = "80px";
         

     });
     
}
}