function init(){
    //add your javascrip between these two lines of code
    var button = document.getElementById('entrybutton');
    function display(){
      document.getElementById('textoutput').innerHTML = textbox.value;
    }
    var textbox = document.getElementById('entryinput');
    alert("Seung-A Ham: " + textbox.value);
    button.addEventListener('click', display);
    }
window.addEventListener('load', init);