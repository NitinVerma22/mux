function val(elem) {
    if (isNaN(elem.value)) {
        document.getElementById('error').innerText = "Please Enter Numbers Only";
    }
    else {
        document.getElementById('error').innerText = " ";
        if (elem.value.length > 10) {
            document.getElementById('error').innerText = "Please enter valid number";
        }
        else {
            document.getElementById('error').innerText = "";
        }
    }

}
function passval(elem) {
    if (elem.value.length < 8) {
        document.getElementById('passval').innerText = "Password must be of 8 digits";
        if (elem.value.length < 1)
            document.getElementById('passval').innerText = "";
    }
    else {
        document.getElementById('passval').innerText = "";
    }
}
function copychng() {
    document.getElementById('copybtn').innerText = "Copied";

}
function copychg() {
    document.getElementById('copybtn').innerText = "Copy";
}
let u, p;
function chk(elem) {
    u = elem.value;

}

function chkk(elem) {
    p = elem.value;
}
function validate() {
    if (u == "Nitin") {
        if (p == 1234)

            alert("Incorrect Password");
    }
    else {
        alert("Incorrect Username");
    }
}