function getArticleGenerator(articles) {
    let allArticles = articles;
    return () =>{
        let div = document.querySelector('#content');
        let current = allArticles.shift();
        if(current){
        let newArticleElement = document.createElement('article');
        newArticleElement.textContent = current;
        div.appendChild(newArticleElement);
        }
    }
}

