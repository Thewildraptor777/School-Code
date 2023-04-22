const input1 = document.getElementById("value1");
const input2 = document.getElementById("value2");
const input3 = document.getElementById("value3");
const input4 = document.getElementById("value4");
const input5 = document.getElementById("value5");

const out = document.getElementById("value-out");
function get() {
  out.innerHTML =
    input1.value
    * input2.value
    * input3.value
    * input4.value
    * input5.value;
}