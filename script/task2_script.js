/**
 * Script nr 2 som kjører hovedsaklig på vevsiden for oppgave 2. 
 */

//Global variabel for å holde data fra API'et

var dataObject = {};


fetch('http://skbank.azurewebsites.net/api/transaksjon')
.then(response => response.json())
.then(data=> {

    dataObject = data;
    var transSet = getTransactions(data, "transaksjoner");
    populateTable("table",transSet);
    set_totalInn(transSet);
    set_totalUt(transSet);
});

/**
 * Bruker algoritme jeg fant på Stackoverflow.. pluss litt egne endringer.
 * Sorteringsalgoritme for å sortere kolonne Beskrivelse, Inn og Ut.
 * @param {Integer} n - table-celle index
 */
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    
    table = getElement("table");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
                    var cmpX=isNaN(parseInt(x.innerHTML))?x.innerHTML.toLowerCase():parseInt(x.innerHTML);
                    var cmpY=isNaN(parseInt(y.innerHTML))?y.innerHTML.toLowerCase():parseInt(y.innerHTML);
    cmpX=(cmpX=='-')?0:cmpX;
    cmpY=(cmpY=='-')?0:cmpY;
            if (dir == "asc") {
                if (cmpX > cmpY) {
                    shouldSwitch= true;
                    break;
                }
            } else if (dir == "desc") {
                if (cmpX < cmpY) {
                    shouldSwitch= true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;      
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
    
    var headers = [...table.getElementsByTagName('th')];
    headers.forEach(element => element.setAttribute("class",""));
    headers[n].setAttribute("class", dir)
    }

    /**
     * Bruker algoritme jeg fant på Stackoverflow.. pluss litt egne endringer.
     * Sorteringsalgoritme for å sortere Dato kolonnen. 
     * @param {Integer} n - table-celle index
     */
    function sortDate(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = getElement("table");
        switching = true;
        dir = "asc";
        while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
              }
            } else if (dir == "desc") {
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
              }
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;
          } else {
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
       
        var headers = [...table.getElementsByTagName('th')];
        headers.forEach(element => element.setAttribute("class",""));
        headers[0].setAttribute("class", dir)
      }