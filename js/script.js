function init(){
    //add your javascrip between these two lines of code
    function eventFunc(){
      var name = 'Seung-A Ham: ';
      var text = document.getElementById('entryinput');
      var result = document.getElementById('textoutput');
      alert(name+text.value);
      result.innerHTML = text.value;
    }
    var but = document.getElementById('entrybutton');
    but.addEventListener('click', eventFunc);
}
window.addEventListener('load', init);