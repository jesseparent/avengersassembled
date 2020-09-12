let searchInput = $("#inputSearch");
let marvelOutput = $("#marvelOutput");
let wikiOutput = $("#wikiOutput");

let displayedCharacter = {
  "id" : "",
  "name" : "",
  "image" : ""
}

// Clear out the displayedCharacter object
let clearDisplayedCharacter = function() {
  displayedCharacter = {
    "id" : "",
    "name" : "",
    "image" : ""
  }
};

// Search for a character whose name begins with the text the user entered
let searchCharacter = function () {
  fetch("https://gateway.marvel.com/v1/public/characters?ts=" + marvelApiObj.ts // Timestamp
    + "&hash=" + marvelApiObj.hash // MD5 Hash of timestamp, private key, and public key
    + "&apikey=" + marvelApiObj.apiKey // Public key
    + "&nameStartsWith=" + searchInput.val()) // Value entered by user
    .then(function (Response) {
      return Response.json();
    })
    .then(function (characterListObj) {
      displayMarvelCarouselResults(characterListObj);
    });

    // Clear the displayed character information
    clearDisplayedCharacter();
};

// Function that will display the search results from Marvel as a Materialize image carousel
let displayMarvelCarouselResults = function (characterListObj) {
  let results = characterListObj.data.results;

  // Start composing the carousel HTML
  let resultList = '<div class="carousel" id="searchMarvelResults">\n';
  for (let i = 0; i < results.length; i++) {
    resultList += '<a class="carousel-item" id="' + results[i].id + 
    '" href="javascript:displayCharacter(' + results[i].id + ', \'' + results[i].name + '\', \'' + results[i].thumbnail.path + 
    '\')"><img src="' + results[i].thumbnail.path + '/standard_large.jpg">' + results[i].name + '</a>\n';
  }
  resultList += '</div>\n';

  // Set Marvel output div to contain the carousel HTML
  marvelOutput.html(resultList);

  // Activate the carousel
  $('.carousel').carousel();
};

// Display the character information in the Marvel area and fetch results from Wikipedia
let displayCharacter = function (characterId, searchWikiFor, imgURL) {
  // Get wikipedia results
  fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=" + searchWikiFor + "&utf8=&format=json")
    .then(function (Response) {
      return Response.json();
    })
    .then(function (wikiListObj) {
      displayWikiResults(wikiListObj);
    });

  // Display the character information
  let imgFormat = "/portrait_uncanny.jpg";
  marvelOutput.html('<img src="' + imgURL + imgFormat + '" /><br />' + searchWikiFor);

  // Store displayed character information
  displayedCharacter.id = characterId;
  displayedCharacter.name = searchWikiFor;
  displayedCharacter.image = imgURL;
};

let snippets = [];

// Display the list of wiki results
let displayWikiResults = function (wikiListObj) {
  snippets = [];
  let results = wikiListObj.query.search;

  let resultList = '<ul id="searchWikiResults">\n';
  for (let i = 0; i < results.length; i++) {
    resultList += '<li id="page-' + results[i].pageid + '" snippetNum="' + i + '">' + results[i].title + '</li>\n';
    snippets.push(results[i].snippet);
  }
  resultList += '</ul>\n';

  wikiOutput.html(resultList);

  $("#searchWikiResults").click(displayWiki);
};

// Display the wikipedia contents
let displayWiki = function (event) {
  let snippetNum = parseInt(event.target.getAttribute("snippetNum"));

  wikiOutput.html(snippets[snippetNum]);
};

// Event listeners

$("#btnSearch").click(searchCharacter);
