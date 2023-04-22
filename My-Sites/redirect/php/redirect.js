var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
short = baseUrl.substring(8, 12)
a = document.getElementById("link");
if (short == 4000) {
    window.location.replace("My-Sites/Homepage/index.html");

}else if(short==8080){
    window.location.replace("Dev/php/write.php")
}
else {
    document.getElementById("manual").classList.remove("hide");
    a.innerHTML = "Activate Php Server for this";
    a.removeAttribute("href");
    window.location.replace("My-Sites/redirect/login.html");
}