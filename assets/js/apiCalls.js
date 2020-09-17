let searchInput = $("#inputSearch");
let marvelOutput = $("#marvelOutput");
let wikiOutput = $("#wikiOutput");

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

let searchedList = [];
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
  marvelOutput.html('<center><img src="' + charObj.image + imgFormat + '" /><br />' + charObj.name + "</center>");

  // Store displayed character information
  displayedCharacter.id = charObj.id;
  displayedCharacter.name = charObj.name;
  displayedCharacter.image = charObj.image;

  // Determine if they can be added to the team
  if ((myTeam.length === marvelTeamImages.length) || (foundIdInTeamArray(displayedCharacter.id)))
  {
    $("#btnSelect").prop('disabled', true);
  }
  else
  {
    $("#btnSelect").prop('disabled', false);
  }
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

// Fetch a random character from an array of verified Avengers characters
// Pass in a function that will be called with the character object as a parameter after the character has been selected
let randomCharacter = function (callbackFunc) {
  // Select random character
  let randIndex = -1;
  while (randIndex === -1) {
    randIndex = Math.floor(Math.random() * randomCharacters.length);

    // If this character is already on the saved team, pick another character
    if (foundIdInTeamArray(randomCharacters[randIndex].id)) {
      randIndex = -1;
    }
  }
  callbackFunc(randomCharacters[randIndex]);
};

// See if the Character ID already exists in the team array
let foundIdInTeamArray = function (id) {
  for (var i = 0; i < myTeam.length; i++) {
    if (myTeam[i].id === id) {
      return true;
    }
  }
  return false;
};

// Event listeners

$("#btnSearch").click(searchCharacter);

// Enter is pressed while in text input
$("#inputSearch").keyup(function (event) {
  if (event.which == 13) {
    // Simulate a button click
    $("#btnSearch").click();
  }
});

$("#btnRandom").click(function () {
  randomCharacter(displayCharacter);
});
