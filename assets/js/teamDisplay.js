$(document).ready(function () {
  $(".collapsible").collapsible();
});

$(".img-wrap .close").on("click", function () {
  var id = $(this).closest(".img-wrap").find("img").data("id");
  localStorage.removeItem("id");
});

document.getElementById("delete-team-button").onclick = clearLocalStorage;

function clearLocalStorage() {
  localStorage.clear();
}

var marvel0 = document.getElementById("0")
var marvel1 = document.getElementById("1")
var marvel2 = document.getElementById("2")
var marvel3 = document.getElementById("3")
var marvel4 = document.getElementById("4")
var myTeam = []



var addCharacter = function () {
  var characterObject = {
    "id": displayedCharacter.id, 
    "name": displayedCharacter.name,
    "image": displayedCharacter.image
  };
  myTeam.push(characterObject);


  //place character in array 
  //display character in dropdown
};

var showCharacter = function () {
  //load character into calls in body divs
};

var deleteCharacter = function () {
  //remove from array
  //replace with placeholder
};

var fillTeam = function () {
  //for loop
  for(var i = 0; i < myTeam.length; i++) {

  }
};
var deleteTeam = function () {
  //replace all characters from array with placeholders
};

$("#btnSelect").click(addCharacter);