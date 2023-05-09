var pass = document.getElementById("password");
var text = document.getElementById("text");
var text2 = document.getElementById("text2");
function writeResult() {
    if (localStorage.getItem("password")) {
        localStorage.setItem("password", pass.value);


    }
    else {
        localStorage.setItem("password", pass.value);
    }
    window.location.reload()

}
if (localStorage.getItem("password")) {
    text.innerHTML = ""
}
else {
    text.innerHTML = ""

}