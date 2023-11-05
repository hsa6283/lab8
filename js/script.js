function init(){
    //add your javascrip between these two lines of code
    function eventFunc(){
      alert(name+text.value);
      result.innerHTML = text.value;
    }
    var name = 'Seung-A Ham: ';
    var but = document.getElementById('entrybutton');
    var text = document.getElementById('entryinput');
    var result = document.getElementById('textoutput');
    but.addEventListener('click', eventFunc);
}
window.addEventListener('load', init);