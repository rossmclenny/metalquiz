function check() {
    var c = 0
    var radios = document.getElementsByName('question1');
    for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked == "1") {
        c++;
        console.log(c);
        break;
    }
    }
}
console.log(c);