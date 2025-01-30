function headerArray_home() {
  let headerArray = [];
  let i;
  for (i = 1; i < 5; i++) {
    headerArray.push({id: "home-header" + i, header: document.getElementById("home-header" + i).innerHTML.toLowerCase().split(" "), origheader: document.getElementById("home-header" + i).innerHTML});
  }
  return headerArray
}

function contentArray_home() {
  let contentArray = [];
  let i;
  for (i = 1; i < 5; i++) {
    contentArray.push({id: "home-para" + i + "-1", content: document.getElementById("home-para" + i + "-1").innerHTML.toLowerCase().split(" "), origcontent: document.getElementById("home-para" + i + "-1").innerHTML});
    contentArray.push({id: "home-para" + i + "-2", content: document.getElementById("home-para" + i + "-1").innerHTML.toLowerCase().split(" "), origcontent: document.getElementById("home-para" + i + "-2").innerHTML});
  }
  return contentArray
}

function searchcontent_home() {
  let input = document.getElementById("searchbar1").value.toLowerCase().trim();
  let searchcontentresults = [];
  let element;
  for (element in contentArray_home()) {
    let i;
    for (i = 0; i < contentArray_home()[element].content.length; i++) {
      if (contentArray_home()[element]["content"][i] == input || '\"' + contentArray_home()[element]["content"][i] == input || contentArray_home()[element]["content"][i] == input + '\"' || contentArray_home()[element]["content"][i] == '(' + input || contentArray_home()[element]["content"][i] == input + ')' || contentArray_home()[element]["content"][i] == input + '?' || contentArray_home()[element]["content"][i] == input + '.') {
        searchcontentresults.push({val: contentArray_home()[element]["content"][i], par: contentArray_home()[element]["origcontent"], link: "https://wdprojberylliumcruzsangalang-.glitch.me/index.html#" + contentArray_home()[element]["id"]});
      }
    }
  }
  return searchcontentresults
}

function searchheader_home() {
  let input = document.getElementById("searchbar1").value.toLowerCase().trim();
  let searchheaderresults = [];
  let element;
  for (element in headerArray_home()) {
    let i;
    for (i = 0; i < headerArray_home()[element].header.length; i++) {
      if (headerArray_home()[element]["header"][i] == input || '\"' + headerArray_home()[element]["header"][i] == input || headerArray_home()[element]["header"][i] == input + '\"' || headerArray_home()[element]["header"][i] == '(' + input || headerArray_home()[element]["header"][i] == input + ')' || headerArray_home()[element]["header"][i] == input + '?' || headerArray_home()[element]["header"][i] == input + '.') {
        searchheaderresults.push({val: headerArray_home()[element]["header"][i], heading: headerArray_home()[element]["origheader"], link: "https://wdprojberylliumcruzsangalang-.glitch.me/index.html#" + headerArray_home()[element]["id"]});
      }
    }
  }
  return searchheaderresults
}

function tester() {
  let results = `Search Results <br/> <br/>`;
  let element;
  for (element in searchheader_home()) {
    results += `<a class = "results" href = ${searchheader_home()[element].link}> ${searchheader_home()[element].val} </a> <br/> <br/> <span class = "headersearch"> ${searchheader_home()[element].heading} </span> <br/> <br/>`
  }
  results += `</br></br>`
  for (element in searchcontent_home()) {
    results += `<a class = "results" href = ${searchcontent_home()[element].link}> ${searchcontent_home()[element].val} </a> <br/> <p> ${searchcontent_home()[element].par} </p> <br/><br/>`
  }
  document.getElementById("home_contentarea").innerHTML = results;
}

function displaySearch() {
  document.getElementById("searchitems").innerHTML = `Search Results <br/> <br/>`;
  let element;
  for (element in searchheader_home()) {
    document.getElementById("searchitems").innerHTML += `<a class = "results" href = ${searchheader_home()[element].link}> ${searchheader_home()[element].val} </a> <br/> <span class = "headersearch"> ${searchheader_home()[element].heading} </span> <br/>`
  }
  for (element in searchcontent_home()) {
    document.getElementById("searchitems").innerHTML += `<a class = "results" href = ${searchcontent_home()[element].link}> ${searchcontent_home()[element].val} </a> <br/> <p> ${searchcontent_home()[element].par} </p> <br/>`
  }
}

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


