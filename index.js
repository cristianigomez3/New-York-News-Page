$(document).ready(function () {
    (function () {
        $('.sidenav').sidenav()
        
    });
    nytUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Los+Angeles&sort=newest&api-key=34d5e216cd154ba4ad6945f6c2b811c1`
    fetch(nytUrl)
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            for (let i = 0; i < data.response.docs.length; i++) {
                if (!data.response.docs[i].multimedia[0]) {
                    $("#snippets").append(`<a href="${data.response.docs[i].web_url}"><div id="container"><h4>${data.response.docs[i].snippet}</h4></div></a>`)

                } else {
                    for (let k = 0; k < data.response.docs[i].multimedia.length; k++) {
                        if (data.response.docs[i].multimedia[k].legacy.xlarge) {
                            $("#snippets").append(`<a href="${data.response.docs[i].web_url}"><div id="container"><h4>${data.response.docs[i].snippet}</h4></a><img src="${"https://nytimes.com/" + data.response.docs[i].multimedia[k].legacy.xlarge}"></div>`)
                            
                        }
                    }

                }

            }

        })
})

// for(let i = 0; i < data.response.docs.length; i++){
//     if(data.response.docs[i].multimedia[0].legacy.xlarge){
//         $("#snippets").append(`<h3>${data.response.docs[i].snippet}</h3><img src="${"https://nytimes.com/" + data.response.docs[i].multimedia[0].legacy.xlarge}">`) 
//     }else{
//         $("#snippets").append(`<h3>${data.response.docs[i].snippet}</h3>`)
//     }
// }