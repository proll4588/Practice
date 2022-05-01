let form = document.getElementById ('form');
let nomber = 4;

form.addEventListener ('submit', function(event){
   event.preventDefault();
   const input = document.getElementById('text');
   
if (!input.value) {
      return;
   }

let myText = document.getElementById('myText');
myText.insertAdjacentHTML('beforeend', '<div class = "nomber">'+'<h2 >'+"Задача "+nomber+'</h2>'+'<p>'+input.value+'</p/div>');

nomber++;

input.value = '';
})