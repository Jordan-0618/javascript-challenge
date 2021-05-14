// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

// Reference the table body
var tbody = d3.select("tbody");

// Retrieve data for each sighting
data.forEach(ufoSighting => {
    
    //Add row for each sighting
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);

        //Add cell to row for each value

        var cell = row.append("td");
        cell.text(value);
    })
})

//Use a date form in your HTML document and write JavaScript code 
//that will listen for events and search through the `date/time` 
//column to find rows that match user input.

//set variable for filter button
var button = d3.select("#filter-button");
button.on("click", function() {
    //clear existing table 
    d3.select("tbody").html("");

    d3.event.preventDefault();
    
    //get value of the search
    var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime);
    
    var filteredResult = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredResult);

    //display filtered results

    filteredResult.forEach((sighting) => {
        var row = tbody.append("tr");

        Object.entries(sighting).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });


});