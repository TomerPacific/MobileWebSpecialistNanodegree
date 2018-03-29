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


    const articleRequest = new XMLHttpRequest();
    articleRequest.onload = addArticles;
    articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=635d2676d9d248b48605a5eac3ea3b43`);
    articleRequest.send();

    function addImage(images) {
        const firstImage = images.results[0];
        responseContainer.insertAdjacentHTML('afterbegin', `<figure>
            <img src="${firstImage.urls.small}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        </figure>`);
    }


    function addArticles () {
         let htmlContent = '';
         let data = JSON.parse(this.responseText);
         let docs = data.response.docs;

         if(docs && docs.length > 1) {
            htmlContent = '<ul>' + docs.map(article => '<li class="article"><h2><a href="${article.web_url}">${article.headline.main}</a></h2> <p>${article.snippet}</p></li>').join('') + '</ul>';
         } else {
            htmlContent = '<div class="error-no-articles">No articles available</div>';
         }

          responseContainer.insertAdjacentHTML('beforeend', htmlContent);
    }

})();
