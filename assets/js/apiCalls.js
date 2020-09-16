let searchInput = $("#inputSearch");
let marvelOutput = $("#marvelOutput");
let wikiOutput = $("#wikiOutput");

let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let displayedCharacter = {
  "id": "",
  "name": "",
  "image": ""
}

// Clear out the displayedCharacter object
let clearDisplayedCharacter = function () {
  displayedCharacter = {
    "id": "",
    "name": "",
    "image": ""
  }
};

// Search for a character whose name begins with the text the user entered
let searchCharacter = function () {
  fetch("https://gateway.marvel.com/v1/public/characters?ts=" + marvelApiObj.ts // Timestamp
    + "&hash=" + marvelApiObj.hash // MD5 Hash of timestamp, private key, and public key
    + "&apikey=" + marvelApiObj.apiKey // Public key
    + "&nameStartsWith=" + searchInput.val()) // Value entered by user
    .then(function (Response) {
      if (Response.ok) {
        return Response.json();
      }
      else {
        throw "Error";
      }
    })
    .then(function (characterListObj) {
      displayMarvelCarouselResults(characterListObj);
    })
    .catch(function (error) {
      marvelOutput.html("<h1>Error Occurred Searching for Character</h1>")
    });

  // Clear the displayed character information
  clearDisplayedCharacter();
  marvelOutput.html('<img src="./assets/images/spinner.gif" />'); // Display loading spinner
  wikiOutput.html('');
};

// Function that will display the search results from Marvel as a Materialize image carousel
let displayMarvelCarouselResults = function (characterListObj) {
  let results = characterListObj.data.results;

  // Start composing the carousel HTML
  let resultList = '<div class="carousel" id="searchMarvelResults">\n';
  for (let i = 0; i < results.length; i++) {
    let charObj = {
      "id": results[i].id,
      "name": results[i].name,
      "image": results[i].thumbnail.path
    };

    resultList += '<a class="carousel-item" id="' + results[i].id +
      '" href=\'javascript:displayCharacter(' + JSON.stringify(charObj) +
      ')\'><img src="' + results[i].thumbnail.path + '/standard_large.jpg">' + results[i].name + '</a>\n';
  }
  resultList += '</div>\n';

  // Set Marvel output div to contain the carousel HTML
  marvelOutput.html(resultList);

  // Activate the carousel
  $('.carousel').carousel();
};

// Display the character information in the Marvel area and fetch results from Wikipedia
let displayCharacter = function (charObj) {
  // Display loading spinner
  wikiOutput.html('<img src="./assets/images/spinner.gif" />');
  
  // Get wikipedia results
  fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=" + charObj.name + "%20Marvel%20Comics&utf8=&format=json")
    .then(function (Response) {
      if (Response.ok) {
        return Response.json();
      }
      else {
        throw "Error";
      }
    })
    .then(function (wikiListObj) {
      displayWikiResults(wikiListObj);
    })
    .catch(function (error) {
      wikiOutput.html("<h1>Error Occurred Searching for Character</h1>")
    });

  // Display the character information
  let imgFormat = "/portrait_uncanny.jpg";
  marvelOutput.html('<img src="' + charObj.image + imgFormat + '" /><br />' + charObj.name);

  // Store displayed character information
  displayedCharacter.id = charObj.id;
  displayedCharacter.name = charObj.name;
  displayedCharacter.image = charObj.image;
};

// Display the wikipedia contents
let displayWikiResults = function (wikiListObj) {
  let results = wikiListObj.query.search;

  // Automatically search wiki for results of first item
  let title = results[0].title;

  // Parse text of Wiki page
  fetch("https://en.wikipedia.org/w/api.php?origin=*&action=parse&page=" + title + "&utf8=&format=json&disabletoc=true&mobileformat=true&section=0")
    .then(function (Response) {
      if (Response.ok) {
        return Response.json();
      }
      else {
        throw "Error";
      }
    })
    .then(function (wikiParseObj) {
      wikiOutput.html(wikiParseObj.parse.text["*"] // Get text
        .replace('src="//', 'src="https://') // Make sure images display
        .replace(/a href="\//g, 'a target="_blank" href="https://en.wikipedia.org/')); // Make links open in new browser tab/window
    })
    .catch(function (error) {
      wikiOutput.html("<h1>Error Occurred Searching for Character</h1>")
    });
};

// Fetch a random character from Marvel API
// Pass in a function that will be called with the character object as a parameter after the character has been selected
let randomCharacter = function (callbackFunc) {
  // Start with a random letter from the alphabet
  let alphaIndex = Math.floor(Math.random() * characters.length);

  // Get a list of characters that start with that letter
  fetch("https://gateway.marvel.com/v1/public/characters?ts=" + marvelApiObj.ts // Timestamp
    + "&hash=" + marvelApiObj.hash // MD5 Hash of timestamp, private key, and public key
    + "&apikey=" + marvelApiObj.apiKey // Public key
    + "&nameStartsWith=" + characters[alphaIndex]) // Value entered by user
    .then(function (Response) {
      if (Response.ok) {
        return Response.json();
      }
      else {
        throw "Error";
      }
    })
    .then(function (characterListObj) {
      let results = characterListObj.data.results;

      // Select a random character from that returned list
      let charIndex = Math.floor(Math.random() * results.length);

      let charObj = {
        "id": results[charIndex].id,
        "name": results[charIndex].name,
        "image": results[charIndex].thumbnail.path
      };

      // Call function to display that character
      callbackFunc(charObj);
    })
    .catch(function (error) {
      marvelOutput.html("<h1>Error Occurred Searching for Character</h1>")
    });
};

// Event listeners

$("#btnSearch").click(searchCharacter);
$("#btnRandom").click(function () {
  randomCharacter(displayCharacter);
});
