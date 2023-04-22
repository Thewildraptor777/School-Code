var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
var Url = baseUrl.substring(0, 67);
short = baseUrl.substring(8, 12);
function pass() {
    document.body.innerHTML = "";
}
if (short == 5500) {
    if (localStorage.getItem("password") != "Tyler") {
        window.location.replace(`${Url}/redirect/login.html`)
        pass();
    }
}
if (short == 4000) {
    if (localStorage.getItem("password") != "Tyler") {
        window.location.replace(`${Url}/php/www/login.php`)
        pass();
    }
}
