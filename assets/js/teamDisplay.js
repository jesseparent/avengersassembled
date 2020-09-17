$(document).ready(function () {
  $(".collapsible").collapsible();
});

$(".img-wrap .close").on("click", function () {
  var id = $(this).closest(".img-wrap").find("img").data("id");
  localStorage.removeItem("id");
});

function clearLocalStorage() {
  localStorage.clear();
}

var marvelTeamImages = []
marvelTeamImages.push(document.getElementById("0"))
marvelTeamImages.push(document.getElementById("1"))
marvelTeamImages.push(document.getElementById("2"))
marvelTeamImages.push(document.getElementById("3"))
marvelTeamImages.push(document.getElementById("4"))
var myTeam = JSON.parse(localStorage.getItem('teamRoster'))  || [];

var displayTeam = function () {
  console.log("displayTeam");
  console.log(myTeam);
  for (var i = 0; i < marvelTeamImages.length; i++)
  { 
    if (i < myTeam.length) {
      marvelTeamImages[i].src = myTeam[i].image + "/standard_large.jpg";
    }

    else {
      marvelTeamImages[i].src = "./assets/images/panther.jpeg";
      console.log(marvelTeamImages[i].src);
    }
    
  }
}



var addCharacter = function (charactertodisplay) {
  console.log(charactertodisplay);
  var characterObject = {
    "id": charactertodisplay.id, 
    "name": charactertodisplay.name,
    "image": charactertodisplay.image
  };
  myTeam.push(characterObject);
  console.log(characterObject);
  console.log(myTeam);
  //marvelTeamImages[myTeam.length-1].src = characterObject.image + "/standard_large.jpg"
  localStorage.setItem("teamRoster", JSON.stringify(myTeam));
  displayTeam();
  //place character in array 
  //display character in dropdown
};

var showCharacter = function () {
  //load character into calls in body divs
};

var deleteCharacter = function () {
  //remove from array
  $this.remove = function(item) { 
    var index = $this.myTeam.indexOf(item);
    $this.myTeam.splice(index, 1);     
  }
  //replace with placeholder
  displayTeam();
};

var fillTeam = function () {
  //for loop
  for (var i = myTeam.length; i < marvelTeamImages.length; i++) {
randomCharacter(addCharacter);
  }
};

var deleteTeam = function () {
  console.log("deleteTeam");
  console.log(myTeam);
  //replace all characters from array with placeholders
  myTeam = [];
  console.log(myTeam);
  localStorage.setItem("teamRoster", JSON.stringify(myTeam));
  displayTeam();
};

$("#btnSelect").click(function(){
  addCharacter(displayedCharacter)
});
$("#fill-team-button").click(fillTeam);
$("#removeCharacter").click(deleteCharacter);
$("#delete-team-button").click(deleteTeam);
displayTeam()