var transData = {}; 





fetch('http://skbank.azurewebsites.net/api/transaksjon')
.then(response => response.json())
.then(data=> {

    setText("demo", ("Kontonavn: " + data.kontonavn + "."));
    setText("demo2", ("Saldo: " + data.saldo + "Kr."));
    
});
    
    

 

  