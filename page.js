import {buttons, filter, show} from  "./component.js";



//on dom load

document.addEventListener('DOMContentLoaded', () => {

    // load channel buttons
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
            
 cardclick();
            tags();
            document.querySelector("#home").className="filtertag-on";
         

        }
    });


   

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


function cardclick(){

     document.querySelectorAll(".card").forEach((car)=>{
        car.addEventListener("click", ()=> alert("hello"));
    })
};


function welcomepage(){
    document.querySelectorAll(".off").forEach((activebutton) =>{activebutton.className = "on";} ); 
    document.querySelector(".filter").innerHTML="";
    document.querySelector(".feed").innerHTML="";
};