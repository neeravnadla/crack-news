
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


function filter(){

    const filtertag = ["🌏 World","✏️ Editorials","⚛  Science","🍿 movies","🏓 Sports","💲 Bussiness", "💰 Crypto" ];

    for (let i in filtertag){               
                var button = document.createElement("div");
                button.className = "filtertag";
                button.id = filtertag[i].slice(3);
                let tag = document.createTextNode(filtertag[i]);  
                button.appendChild(tag);   
                document.querySelector(".filter").appendChild(button);
    }
                
}
