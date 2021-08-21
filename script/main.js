var dataObject = {};
/*
    Code for Task 1 website...
    */ 

fetch('http://skbank.azurewebsites.net/api/transaksjon')
.then(response => response.json())
.then(data=> {

    setText("demo", ("Kontonavn: " + data.kontonavn + "."));
    setText("demo2", ("Saldo: " + data.saldo + "Kr."));
    dataObject = data;
    
});



/* 
    Code for Task 2 website downwards.....
    */ 










    
    

 

  