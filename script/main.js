var dataObject = {};


fetch('http://skbank.azurewebsites.net/api/transaksjon')
.then(response => response.json())
.then(data=> {

    setText("kntnavn", ("Kontonavn: " + data.kontonavn + "."));
    setText("saldo", ("Saldo: " + data.saldo + "Kr."));
    dataObject = data;
    
    
});













    
    

 

  