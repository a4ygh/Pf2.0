var password = "oCPC4'+A8LRr8-qb0H&M05Q5@L6MJDByw#j4w!&%GVDvuos2N_";
(function passcodeprotect() {
   var passcode = prompt("Passwort Eingeben");
   while (passcode !== password) {
      alert("Passwort ist Falsch");
      return passcodeprotect();
   }
}());
alert('Passwort ist Richtig');