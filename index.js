var password = "qT23P5<3/bPt";
(function passcodeprotect() {
   var passcode = prompt("Passwort Eingeben");
   while (passcode !== password) {
      alert("Passwort ist Falsch");
      return passcodeprotect();
   }
}());
alert('Passwort ist Richtig');


document.addEventListener('keydown', function() {
   if (event.keyCode == 123) {
     alert("Diese Funktion funktioniert nicht");
     return false;
   } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
     alert("TDiese Funktion funktioniert nicht");
     return false;
   } else if (event.ctrlKey && event.keyCode == 85) {
     alert("Diese Funktion funktioniert nicht");
     return false;
   }
 }, false);
 
 if (document.addEventListener) {
   document.addEventListener('contextmenu', function(e) {
     alert("Diese Funktion funktioniert nicht");
     e.preventDefault();
   }, false);
 } else {
   document.attachEvent('oncontextmenu', function() {
     alert("Diese Funktion funktioniert nicht");
     window.event.returnValue = false;
   });
 }