// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
async function apiCall(url) {


    //add api call logic here
    try {
        let res = await fetch(url);

        let data = await res.json();

        return data
    }
    catch (error){
        console.log(error);
    }


}


function appendNews(articles, detailed_news) {

    //add append logic here

    articles.forEach(function (item) {
        
         let div = document.createElement("div");

        let title = document.createElement("p");
        title.textContent = item.title;

        let desc = document.createElement("p");
        desc.textContent = item.description;

        let image = document.createElement("img");
        image.src = item.urlToImage;
        div.append(title, desc, image);
        div.onclick = () => {
            localStorage.setItem("news", JSON.stringify(item))
            
            window.location.href = "news.html"
        }
        detailed_news.append(div);
    }) 

}

export { apiCall, appendNews }