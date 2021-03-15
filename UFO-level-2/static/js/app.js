// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var btn = d3.select('button');

// YOUR CODE HERE!
populateTable(tableData);
btn.on('click', handleClick);
// =============================================
function populateTable(data) {
    tbody.html("");

    data.forEach(dataRow => {
        var row = tbody.append('tr');

        Object.values(dataRow).forEach(val => {
            var cell = row.append('td');

            cell.text(val);
        });
    });
};

function handleClick() {

    var dict1 = {};


    var date = d3.select('#datetime').property('value');
    var city = d3.select('#city').property('value');
    var city = d3.select('#state').property('value');
    var city = d3.select('#country').property('value');
    var city = d3.select('#shape').property('value');
    
    dict1['datetime']=date;




    //var date = d3.select('input').property('value');
    console.log(array1);
    console.log(city);
   
    var filteredData = tableData;
    
    
    dict1.forEach(element => function(element){
            if (element) {
        filteredData = filteredData.filter(row => row.element === dict1[element]);
    }});



    if (city) {
        filteredData = filteredData.filter(row => row.city === city);
    };


    d3.select('input').property('value', '');
    populateTable(filteredData);
}
