/**
 * Første script som kjører hovedsaklig på index vevsiden for oppgave 1. 
 *  
 * Bruker setText funksjon som hentes fra function.js scriptet for å sette verdier til kontonavn og saldo. 
 */
var dataObject = {};

/**
 * Bruker fetch for å hente ned data fra API
 */
fetch('http://skbank.azurewebsites.net/api/transaksjon')
.then(response => response.json())
.then(data=> {

    setText("kntnavn", ("Kontonavn: " + data.kontonavn));
    setText("saldo", ("Saldo: " + data.saldo + "Kr"));
    dataObject = data;
    
    
});













    
    

 

  