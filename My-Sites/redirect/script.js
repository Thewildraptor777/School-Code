var pass = document.getElementById("password");
var text = document.getElementById("text");
var text2 = document.getElementById("text2");
password.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button").click();
    }
});
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
    text.innerHTML = "try again"
}
else {
    text.innerHTML = "Enter Password"

}