function klik() {
    var name = document.getElementById('name').value;
    var born_date = document.getElementById('born_date').value;
    var birth_place = document.getElementById('birth_place').value;
    var school = document.getElementById('school').value;
    var score = document.getElementById('score').value;
    var send = document.getElementById('send').value;
    if (name === "" || born_date === "" || birth_place === "" || school === "" || score === "") {
        alert("Lengkapi data anda!");
    }
    else {
        alert("Data anda sudah terkirim!");
    }
}