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
