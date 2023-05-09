const copyUrl = () => {
  var getUrl = window.location;
  var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
  // Copy the text inside the text field
  navigator.clipboard.writeText(baseUrl);

  // Alert the copied text
  alert("Copied the text: " + baseUrl);
}
const copyStart = () => {
  var start = "php -S localhost:4000";
  // Copy the text inside the text field
  navigator.clipboard.writeText(start);

  // Alert the copied text
  alert("Text Copied");
}
function removePass() {
  confirm("are you sure")
  localStorage.removeItem("password");
  window.location.reload();
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}