var transData = {}; 


function print(){
    console.log(transaksjoner.entries);
}

      

fetch('http://skbank.azurewebsites.net/api/transaksjon').then(response => response.json())
.then(data=> console.log(data));




document.addEventListener('DOMContentLoaded', function() {
    fetch('http://skbank.azurewebsites.net/api/transaksjon').then(response => response.json())
.then(data=> {
    document.getElementById("demo").innerHTML = "Kontonavn: " + data.kontonavn;
    document.getElementById("demo2").innerHTML = "Saldo: " + data.saldo;
});
    
    

  }, false);

  