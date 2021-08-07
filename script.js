const channel = {


    indiatoday: "https://www.indiatoday.in/rss/home",
    livemint: "https://www.livemint.com/rss/news",
    thehindu: "https://www.thehindu.com/feeder/default.rss",
    timesofindia: "https://timesofindia.indiatimes.com/rssfeeds/1221656.cms",
    bbc: "http://feeds.bbci.co.uk/news/world/rss.xml"




}



function show(publisher) {
    
    document.querySelector(".feed").innerHTML = "wait ... loading fresh news";

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
                dlink.innerHTML = "see more";
                

                cardcontent.appendChild(textnode);
                cardcontent.appendChild(dlink);
                card.appendChild(cardcontent);

                document.querySelector(".feed").appendChild(card);

            }
        })
        .catch((error) => {
            document.querySelector(".feed").innerHTML = "oops something went wrong" + error;
        })
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll("button").forEach((button) => {
        button.onclick = function () {
            let page = button.dataset.network;
            show(page);
        }
    });
});


function newchannel(url) {
    document.addEventListener('DOMContentLoaded', () => {

        const chn = url;
        const cname = fetch("https://api.rss2json.com/v1/api.json?rss_url=" + url)
            .then(response => response.json())
            .then(data => { return data.items[t].title })


    });

    console.log(cname);

    // channel. = {}


}




function strip(list) {
    let li = list;
    const strippedString = li.replace(/(<([^>]+)>)/gi, "");
    return strippedString;

}

