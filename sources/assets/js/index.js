var password = "qT23P5<3/bPt";
(function passcodeprotect() {
   var passcode = prompt("Passwort Eingeben!");
   while (passcode !== password) {
      alert("Passwort ist Falsch!");
      return passcodeprotect();
   }
}());
alert('Passwort ist Richtig!');