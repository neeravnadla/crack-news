const channel = {

//top and latest news
 thehindu: "https://www.thehindu.com/feeder/default.rss",
   
    indiatoday: "https://www.indiatoday.in/rss/home",
    livemint: "https://www.livemint.com/rss/news",
    timesofindia: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
    bbc: "http://feeds.bbci.co.uk/news/world/rss.xml",
    indianexpress : "https://indianexpress.com/section/world/feed/",
    businessstandard: "https://www.business-standard.com/rss/home_page_top_stories.rss",
    moneycontrol : "https://www.moneycontrol.com/rss/latestnews.xml"
}

const channellist = ["thehindu","indiatoday","livemint","timesofindia","bbc","indianexpress", "businessstandard","moneycontrol"];


function show(publisher) {
    
    
    document.querySelector(".feed").innerHTML = "Loading....";
    const baseurl = "https://api.rss2json.com/v1/api.json?rss_url=";
    // const clist = channellist();
    let link = baseurl + channel[publisher];
    fetch(link)
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
                var str1 = publisher.toLocaleUpperCase();          
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
                var textnode = document.createTextNode(strip(data.items[t].content)+"...");
                
                var dlink = document.createElement("a");
                dlink.href = data.items[t].link;
                dlink.innerHTML = "Read More";
                
                cardcontent.appendChild(textnode);
                cardcontent.appendChild(dlink);
                card.appendChild(cardcontent);


                
                document.querySelector(".feed").appendChild(card);
             //   console.clear();

            }
        })
        .catch((error) => {
            document.querySelector(".feed").innerHTML = "oops something went wrong" + error;
        })
}



function strip(list) {
    let li = list;
    const strippedString = li.replace(/(<([^>]+)>)/gi, "");
    return strippedString;

}




    
function buttons (){
    for (let i in channellist){               
                var button = document.createElement("button");
                button.dataset.network = channellist[i];
                button.className = "on";
                
                var img = document.createElement("img");
                img.src = "img/"+channellist[i]+".png" ;
                img.alt= channellist[i];         
                button.appendChild(img);
                document.querySelector(".channels").appendChild(button);
    }
              var addbutton = document.createElement("button");             
                addbutton.className = "add";          
                var img = document.createElement("img");
                img.src = "img/add.png" ;
                img.alt= "Add Channel";         
                addbutton.appendChild(img);
                document.querySelector(".channels").appendChild(addbutton);     
}


//on dom load

document.addEventListener('DOMContentLoaded', () => {

    // load channel buttons
    buttons();

    document.querySelectorAll("button").forEach((button) => {
        button.onclick = function () {
             document.querySelectorAll(".on").forEach((activebutton) => {activebutton.className = "off"});
             button.className = "on";
            let page = button.dataset.network;   
            show(page);
        }
    });
});


// new experimwnt

function newchannel(url) {
    document.addEventListener('DOMContentLoaded', () => {
        const chn = url;
        const cname = fetch("https://api.rss2json.com/v1/api.json?rss_url=" + url)
            .then(response => response.json())
            .then(data => { return data.items[t].title })
    });
    console.log(cname);
}