//The blocks of code below relate to the date and time features of the website.

// This block of code defines a function that will change the copyright year within the web page's footer area.

function changeYear(id) {
  let date = new Date();
  document.getElementById(id).innerHTML = date.getFullYear(); //Update the year within the copyright notice by encoding it in its respective HTML tag.
}

// This block of code defines a function that will change the date that the web page was last updated. 
// It will obtain the content from the meta tag housing the date at which the web page was last revised in the form of a string, convert it into an array whose elements are the parts of the said date (i.e. day, month, and year), and match each part of the array to its corresponding variable. 

function changeDate(id) {
  let date = document.getElementById("revised").content;
  let dateInfo = date.split("/");
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; //Define array containing the months of the year
  let month = months[parseInt(dateInfo[0]) - 1]; //Match the element of the dateInfo array that contains the numeric month that the webpage was last revised with its corresponding month in words.
  let year = dateInfo[2]
  let day = dateInfo[1]
  document.getElementById(id).innerHTML = `Last updated: ${month} ${day}, ${year}`//Display date in its corresponding HTML tag.
}

//Call date and time functions.

changeYear("year");
changeDate("date");