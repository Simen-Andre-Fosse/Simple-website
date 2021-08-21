
function print(){
    console.log(transaksjoner.entries);
}


function newElement(type, content) {
    var element = document.createElement(type);
    element.innerHTML = content;

    return element;
}

function getElement(id){
    var element = document.getElementById(id);

    return element;
}


function setText(id, content){
    var elm = document.getElementById(id);
    elm.innerHTML = content;
}