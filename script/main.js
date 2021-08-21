var transData = {}; 


function print(){
    console.log(transaksjoner.entries);
}

      

fetch('http://skbank.azurewebsites.net/api/transaksjon').then(response => response.json())
.then(data=> console.log(data));

fetch('http://skbank.azurewebsites.net/api/transaksjon').then(response => response.json())
.then(data=> transaksjoner = data);





document.addEventListener('DOMContentLoaded', function() {
    fetch('http://skbank.azurewebsites.net/api/transaksjon').then(response => response.json())
.then(data=> transaksjoner = data);
    var transData = JSON.stringify(transData);
    document.getElementById("demo").innerHTML = transData.kontonavn; 

  }, false);

  