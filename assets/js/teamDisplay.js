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

var marvelTeamImages = []
marvelTeamImages.push(document.getElementById("0"))
marvelTeamImages.push(document.getElementById("1"))
marvelTeamImages.push(document.getElementById("2"))
marvelTeamImages.push(document.getElementById("3"))
marvelTeamImages.push(document.getElementById("4"))
var myTeam = []



var addCharacter = function (charactertodisplay) {
  var characterObject = {
    "id": charactertodisplay.id, 
    "name": charactertodisplay.name,
    "image": charactertodisplay.image
  };
  myTeam.push(characterObject);
  marvelTeamImages[myTeam.length-1].src = characterObject.image + "/standard_large.jpg"
  localStorage.setItem("teamRoster", JSON.stringify(myTeam));

  //place character in array 
  //display character in dropdown
};

var showCharacter = function () {
  //load character into calls in body divs
};

var deleteCharacter = function () {
  //remove from array
  $scope.remove = function(item) { 
    var index = $scope.myTeam.indexOf(item);
    $scope.myTeam.splice(index, 1);     
  }
  //replace with placeholder
};

var fillTeam = function () {
  //for loop
  for (var i = myTeam.length; i < 5 - myTeam.length; i++)
randomCharacter(addCharacter);
console.log(i);
  
};

var deleteTeam = function () {
  //replace all characters from array with placeholders
  myTeam.length = 0;console.log(myTeam);
};

$("#btnSelect").click(function(){
  addCharacter(displayedCharacter)
});
$("#fill-team-button").click(fillTeam);
$("#removeCharacter").click(deleteCharacter);
$("delete-team-button").click(deleteTeam);