function init(){
    var button = document.getElementById("entrybutton");
    var input = document.getElementById("entryinput");
    button.addEventListener("click", heading);
    button.addEventListener("click", myFunction);
   
   function heading() {
      var output = document.getElementById("textoutput")
      output.innerHTML = input.value;
    }
   
    function myFunction() {
      text = ('Abiha Hussain: ' + input.value);
      alert(text);
    }
  }
  window.addEventListener('load', init);