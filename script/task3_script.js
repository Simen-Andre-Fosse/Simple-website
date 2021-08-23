/**
 * Script nr 3 som kjører hovedsaklig på vevsiden for oppgave 3. 
 */


//Globale variabler for å holde data fra APIene
var kategoriData = [];
var trans_data = {};


//Henter kategori data.
fetch('http://skbank.azurewebsites.net/api/kategori')
.then(response => response.json())
.then(data=> {

    kategoriData = data;
    
    
});

//Henter transaksjons data. 
fetch('http://skbank.azurewebsites.net/api/transaksjon')
.then(response => response.json())
.then(data=> {

    trans_data = data;
    
});


/**
 * Funksjon som matcher to kategori ID'er og returnerer enten true eller false. 
 * @param {Array} obj1 - Array som holder objekter. 
 * @param {String} cat - Kategori ID 
 * @returns 
 */
function matchCat(obj1, cat){
    var id = obj1.kategoriID.toString(); 
    if(id === cat){
        return true; 
    } else {
        return false; 
    }

}

/**
 * 
 * @returns Array - som holder transaksjoner som matcher valgt kategori. 
 */
function update_data_object(){
    var new_data_object = [];
    var old_data = getTransactions(trans_data, "transaksjoner");

    var el = getElement("categories");
    var value = el.options[el.selectedIndex].value;

    for (trans of old_data){
        if(value === "0"){
            return old_data;
        } else if(matchCat(trans, value)){
            new_data_object.push(trans);
        }
    }

    return new_data_object

}

/**
 * 
 * @returns String- returnerer en String med den valgte kategorien fra listen. 
 */
function get_selected_cat(){
    var el = getElement("categories");
    var value = el.options[el.selectedIndex].value;
    var text = "";
    if(value === "0"){
        text = "Transaksjoner";
    } else {
    text =  "Kategori: " +  el.options[el.selectedIndex].text;
    }

    return text; 
}

/**
 * Funksjon som tømmer tabellen. 
 */
function cleanTable(){
    var table = getElement("table");
    while(table.rows.length > 1){
        table.deleteRow(table.rows.length -1);
    }
}


/**
 * Funksjon som først tømmer tabellen..
 * Så henter oppdatert array med transaksjoner vi skal populere tabell med.
 * Så populerer tabellen med filtrerte transaksjoner og oppdatere sum inn og ut av konto. 
 * Endrer til slutt overskriften til tabellen til å vise valgt kategori. 
 */
function update_table(){
    cleanTable();
    var new_data = update_data_object();
    populateTable("table", new_data);
    set_totalInn(new_data);
    set_totalUt(new_data);
    setText("trans_header", get_selected_cat());
}



