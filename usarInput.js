function myFunction() {
    var txt;
    var person = prompt("Please enter a letter:", "Letter");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = (the matching letter);
    }
    document.getElementById("demo").innerHTML = txt;
}
