function clr() {
    document.getElementById("res").innerText = "";
}

function disp(x) {
    document.getElementById("res").innerText += x;
}

function eqls() {
    var t = document.getElementById("res").innerText;
    var a = t.split(/\b/);
    var x = "0b" + a[0];
    var op = a[1];
    var y = "0b" + a[2];
    document.getElementById("res").innerText = eval(x + op + y).toString(2);
}