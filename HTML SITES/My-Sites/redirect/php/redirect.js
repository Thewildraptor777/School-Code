var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
short = baseUrl.substring(8, 12)
a = document.getElementById("link");
if (short == 4000) {
    window.location.replace("My-Sites/Homepage/index.html");

}
else {
    document.getElementById("manual").classList.remove("hide");
    a.innerHTML = "Activate Php Server for this";
    a.removeAttribute("href");
    window.location.replace("My-Sites/redirect/login.html");
}