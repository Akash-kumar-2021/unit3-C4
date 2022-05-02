// Ude Import export (MANDATORY)
  import navbar from "./components/navbar.js";

    let navbar_div = document.getElementById("navbar");
      navbar_div.innerHTML = navbar();

      let detail_item = JSON.parse(localStorage.getItem('article'))
      console.log(detail_item);

      let parent = document.getElementById("main");

      let arr = [];
      arr.push(detail_item);

      arr.forEach(function(item){

        let div = document.createElement("div");

        let title = document.createElement("p");
        title.textContent = item.title;

        let desc = document.createElement("p");
        desc.textContent = item.description;

        let image = document.createElement("img");
        image.src = item.urlToImage;

        div.append(title,desc,image);
        parent.append(div);
      })
