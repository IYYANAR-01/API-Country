let whereAmI = function(lat, lon){
    fetch(`https://geocode.xyz/${lat},${lon}72.873?geoit=JSON&auth=374845284433212317858x85135`)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        if(data.city==undefined || data.country==undefined){
            throw new Error("Invalid Coordinates");
        }
        else{
            let countryName = data.country;
            let cityName = data.city;
            console.log(countryName, cityName);
            return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data[0]);
        display(data[0]);
    })
    .catch(err => {
        console.log(err);
    })
   
}

whereAmI(19.037, 72.873);


function display(obj){
    document.getElementById("head").innerHTML = 
        `<img src="${obj.coatOfArms.png}" id="symbol"/>
         <h1>${obj.name.common}</h1>
         <img src="${obj.flags.png}"/>`

    document.getElementById("text").innerHTML = 

        `<h1>${obj.name.official}</h1>`

    document.getElementById("sub2").innerHTML = 

        ` <p>${obj.capital[0]}</p>
          <p>${obj.area}   sq.km</p>
          <p>${obj.continents}</p>
          `
    console.log(obj.name.common);
    console.log(obj.name.official);
    console.log(obj.continents);
    console.log(obj.capital[0]);
    console.log(obj.area);
    console.log(obj.coatOfArms.png);
    console.log(obj.flags.png);
}

