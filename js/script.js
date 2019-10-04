$.ajax({
    type: "GET",
    dataType: 'jsonp',
    url: 'https://www.mocky.io/v2/5cfbb853300000da1d0a8bd2',
    crossDomain : true,
    xhrFields: {
        withCredentials: true
    },
    success: function(response) {
        let datos = response;
        let cards = document.querySelectorAll('.card');
        let i = 0;
        for (let info of datos) {
                      
            cards[i].innerHTML = `
                <p class="card-text"><b>${info['title']}</b></p>
                <a href="${info['url']}"><img src="${info['image']}" class="card-img-top img-tamano" alt="prueba"></a>
               `
            i++;
        }

    }
});