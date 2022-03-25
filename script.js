let form = document.getElementById ('form');

form.addEventListener ('submit', function(event){
   event.preventDefault();
   const input = document.getElementById('text');
   
if (!input.value) {
      input.placeholder = 'Введите текст';
      return;
   }

let myText = document.getElementById('myText');
myText.insertAdjacentHTML('beforeend', '<div class = "nomber">'+'<h2>'+input.value+'</h2>'+'</div>');

input.value = '';
input.placeholder = '';
})