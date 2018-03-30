(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
    });
    
   $.ajax({
    url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`
    headers:{
        Authorization: 'Client-ID 123abc456def'     
        }
    }).done(addImage);


   $.ajax({
    url: `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}`
    headers:{
        Authorization: 'API-KEY 635d2676d9d248b48605a5eac3ea3b43'     
        }
    }).done(addArticles);

    function addImage(images) {
        const firstImage = images.results[0];
        responseContainer.insertAdjacentHTML('afterbegin', `<figure>
            <img src="${firstImage.urls.small}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        </figure>`);
    }


    function addArticles (articles) {

         if(articles.response && article.response.docs && article.response.docs.length > 1) {
            const data = articles.response.docs;
            
            htmlContent = '<ul>' + docs.map(article => '<li class="article"><h2><a href="${article.web_url}">${article.headline.main}</a></h2> <p>${article.snippet}</p></li>').join('') + '</ul>';
         } else {
            htmlContent = '<div class="error-no-articles">No articles available</div>';
         }

          responseContainer.insertAdjacentHTML('beforeend', htmlContent);
    }

})();
