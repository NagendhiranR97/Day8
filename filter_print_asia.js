var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v2/all')

xhr.send();

xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status < 300){
        var result = this.responseText;
        var data = JSON.parse(result);
        //console.log(data);
        //for(i=0;i<=data.length-1;i++){
        let region = data.filter(function(data){
            if(data.region == "Asia"){
                console.log(
                    `country name: ${data.name}
                    country region: ${data.region}
                    country sub region: ${data.subregion}
                    country population: ${data.population}
                    `);
            }

        });
         //}
    }
}