import { channel } from "./channel.js";

const channellist = channel;


// channel buttons

export function buttons (){

   
    for (let i in channellist){               
                var button = document.createElement("button");
                button.dataset.network = channellist[i].publisher;
                button.className = "on";
                
                var img = document.createElement("img");
                img.src = "./img/"+channellist[i].publisher.replace(/ /g,"")+".png" ;
                img.alt= channellist[i].publisher; 
                
                button.appendChild(img);
                document.querySelector(".channels").appendChild(button);
    }
                
}



// sub category/ filter of channel


export function filter(channelname){
 document.querySelector(".filter").innerHTML="";
 const cnam = channelname.replace(/ /g,"");
    for (let i in channellist[cnam].content){               
              

                 var button = document.createElement("div");
                button.className = "filtertag-off";
                button.dataset.network = channellist[cnam].publisher;
                button.id = channellist[cnam].content[i].title;
                let tag = document.createTextNode(channellist[cnam].content[i].title);  
                button.appendChild(tag);   
                document.querySelector(".filter").appendChild(button);
         
    }

                
}



// strip html from text

function strip(list) {
    let li = list;
    const strippedString = li.replace(/(<([^>]+)>)/gi, "");
    return strippedString;

}   


// load feed

export function show(pub,subcat) {   

let publisher= pub.replace(/ /g,"").toLowerCase();
let filt = subcat.replace(/ /g,"").toLowerCase();

    document.querySelector(".feed").innerHTML = "Loading....";

    const baseurl = "https://api.rss2json.com/v1/api.json?rss_url=";

   
    let sublink = channellist[publisher].content[filt].link;
   

    let metalink = baseurl + sublink;
    fetch(metalink)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".feed").innerHTML = "";
            for (let t in data.items) {

                var card = document.createElement("div");
                card.className = "card";

                //icon
                var cardstamp = document.createElement("div");
                cardstamp.className = "cardstamp";
                var str2 = " | ";
                var str1 = channellist[publisher].publisher.toLocaleUpperCase();          
                var str3 = data.items[t].pubDate;
                var textnode = document.createTextNode(str1.concat(str2, str3));
                cardstamp.appendChild(textnode);
                card.appendChild(cardstamp);

                // heading
                var cardtitle = document.createElement("div");
                cardtitle.className = "cardtitle";
                var textnode = document.createTextNode(strip(data.items[t].title));
                cardtitle.appendChild(textnode);
                card.appendChild(cardtitle);
                // content
                var cardcontent = document.createElement("div");
                cardcontent.className = "cardcontent";
                var textnode = document.createTextNode(strip(data.items[t].content).slice(0, 500) +"... ");
                var dlink = document.createElement("a");
                dlink.href = data.items[t].link;
                dlink.target="_blank";  
                dlink.innerHTML = " Read More";
                
                cardcontent.appendChild(textnode);
                cardcontent.appendChild(dlink);
                card.appendChild(cardcontent);
                
                document.querySelector(".feed").appendChild(card);
               
                
                
                //on card click
                card.addEventListener("click", (card)=> {
                  
                    window.open(data.items[t].link, "_blank");

                });
          
             
            }
        })
        


        .catch((error) => {
            document.querySelector(".feed").innerHTML = "Oops Something Went Wrong........ <br><br> [ Error :  " + error.message +" ]";
        })


}
