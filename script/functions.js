myDataset = {};


fetch('http://skbank.azurewebsites.net/api/transaksjon')
.then(response => response.json())
.then(data=> {
    myDataset = data;
    
});

function print(something){
    console.log(something);
}



function createElement(type, content) {
    var element = document.createElement(type);
    element.innerHTML = content;

    return element;
}

function getElement(id){
    var element = document.getElementById(id);

    return element;
}


function setText(contentId, content){
    document.getElementById(contentId).innerHTML = content + ".";
}


function createTD(data, tr){
    var td = document.createElement("td");
    td.innerHTML = data; 
    return td; 
}

function populateTable(tableId, transObject){
    var table = getElement(tableId);
transObject.forEach(function(object) {
    var tr = document.createElement('tr');
    var beloep = object.beloep;
    var posbeloep = "";
    var negbeloep = "";
    if(checkNrPositve(beloep)){
        posbeloep = beloep + ",-";
    } else {
        negbeloep = beloep + ",-";
    }

    tr.innerHTML = 
        '<td>' + split_string(object.dato) + '</td>' +
        '<td>' + object.beskrivelse + '</td>' +
        '<td>' + posbeloep + '</td>' +
        '<td>' + negbeloep  + '</td>';
    table.appendChild(tr);
});
}

function getTransactions(objectName, dataSetName){
    var transactions = objectName[dataSetName];
    return transactions; 
}

function get_a_transaction(objectName, dataSetName, index){
    var trans_list = getTransactions(objectName, dataSetName)
    var the_transaction = trans_list[index];

    return the_transaction;
}

function set_totalInn(objectName, dataSetName){
    var elm = getElement("sum_inn");
    var totalinn = 0; 
    var transac = getTransactions(objectName, dataSetName);
    
    for(var trans of transac){
        if(checkNrPositve(trans.beloep)){
            var nr = trans.beloep;
            totalinn += nr;
        }
    }
    setText("sum_inn", ("Sum inn: " + totalinn + " NOK"));
}

function set_totalUt(objectName, dataSetName){
    var elm = getElement("sum_inn");
    var totalut = 0; 
    var transac = getTransactions(objectName, dataSetName);
    
    for(var trans of transac){
        if(!checkNrPositve(trans.beloep)){
            var nr = trans.beloep;
            totalut += nr;
        }
    }
    setText("sum_ut", ("Sum ut: " + Math.round(totalut) + " NOK"));
}

function checkNrPositve(number){
    if(number > 0) {
        return true; 
    } else {
        return false; 
    }
}

function split_string(a_string){
    var new_string = a_string.split("T");
    return new_string[0];
}
