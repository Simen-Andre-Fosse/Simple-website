var dataObject = {};


fetch('http://skbank.azurewebsites.net/api/transaksjon')
.then(response => response.json())
.then(data=> {

    dataObject = data;
    var transSet = getTransactions(data, "transaksjoner");
    populateTable("table",transSet);
    
});