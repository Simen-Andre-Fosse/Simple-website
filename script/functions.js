/**
 * Script nr 4 som holder generelle funksjoner/algoritmer jeg ville bruke flere ganger.
 * Dette var for å minimere gjentagelse av kode.  
 */


//Global variabel for å holde data. 
myDataset = {};


//Henter data fra API.
fetch('http://skbank.azurewebsites.net/api/transaksjon')
.then(response => response.json())
.then(data=> {
    myDataset = data;
    
});

/**
 * 
 * @param {String} type - type element man vil lage.
 * @param {Any} content - Tekst eller annet innhold for elementet. 
 * @returns - returnerer HTML elementet. 
 */
function createElement(type, content) {
    var element = document.createElement(type);
    element.innerHTML = content;

    return element;
}


/**
 * 
 * @param {String} id - Id'en for elementet man vil hente. 
 * @returns - elementet 
 */
function getElement(id){
    var element = document.getElementById(id);

    return element;
}

/**
 * 
 * @param {String} contentId - Id på elementet man vil endre innhold på. 
 * @param {Any} content - Nye innholdet til elementet. 
 */
function setText(contentId, content){
    document.getElementById(contentId).innerHTML = content + ".";
}


/**
 * Funksjon som populerer en tabell med data fra objekter. 
 * @param {String} tableId - ID på tabellen man vil populere med data.
 * @param {Object} transObject - samling med objekter. 
 */
function populateTable(tableId, transObject){
    var table = getElement(tableId);
transObject.forEach(function(object) {
    var tr = document.createElement('tr');
    var beloep = object.beloep;
    var posbeloep = "";
    var negbeloep = "";
    if(checkNrPositve(beloep)){
        posbeloep = Number(beloep).toFixed(2) + " kr";
    } else {
        negbeloep = Number(beloep).toFixed(2) + " kr";
    }

    tr.innerHTML = 
        '<td>' + split_string(object.dato) + '</td>' +
        '<td>' + object.beskrivelse + '</td>' +
        '<td class=number>' + posbeloep + '</td>' +
        '<td class=number>' + negbeloep  + '</td>';
    table.appendChild(tr);
});
}

/**
 * 
 * @param {String} objectName - navnet på objektet
 * @param {String} dataSetName - navnet på property man vil hente verdier for, her transaksjoner. 
 * @returns - array av transaksjoner. 
 */
function getTransactions(objectName, dataSetName){
    var transactions = objectName[dataSetName];
    return transactions; 
}

/**
 * Henter en transaksjon etter indeks. 
 * @param {String} objectName - navn på objektet
 * @param {String} dataSetName - Navnet på property 
 * @param {Integer} index - indeksen. 
 * @returns - transaksjoner. 
 */
function get_a_transaction(objectName, dataSetName, index){
    var trans_list = getTransactions(objectName, dataSetName)
    var the_transaction = trans_list[index];

    return the_transaction;
}

/**
 * Regner ut total sum inn på konto og vise på vevsiden. 
 * @param {Array} arr_data - Array med transaksjoner.
 */
function set_totalInn(arr_data){
    var totalinn = 0; 
    for(var trans of arr_data){
        if(checkNrPositve(trans.beloep)){
            var nr = trans.beloep;
            totalinn += nr;
        }
    }
    setText("sum_inn", ("Sum inn: " + totalinn + " NOK"));
}

/**
 * Regner ut total sum ut fra konto og vise på vevsiden. 
 * @param {Array} arr_data - Array med transaksjoner
 */
function set_totalUt(arr_data){
    var elm = getElement("sum_inn");
    var totalut = 0; 
    for(var trans of arr_data){
        if(!checkNrPositve(trans.beloep)){
            var nr = trans.beloep;
            totalut += nr;
        }
    }
    setText("sum_ut", ("Sum ut: " + Math.round(totalut) + " NOK"));
}


/**
 * Sjekker om et tall er negativ eller positiv. 
 * @param {Integer} number - Ett tall
 * @returns boolsk verdi 
 */
function checkNrPositve(number){
    if(number > 0) {
        return true; 
    } else {
        return false; 
    }
}

/**
 * Splitter en String på bokstaven T. brukt for å splitte opp dato og klokkeslett. 
 * @param {String} a_string - String man vil splitte. 
 * @returns String, kun dato uten klokkeslett for transaksjon. 
 */
function split_string(a_string){
    var new_string = a_string.split("T");
    return new_string[0];
}
