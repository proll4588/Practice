let form = document.getElementById ('form');

let generateError = function (text) {
   let error = document.createElement('div');
   error.className = 'error';
   error.style.color = 'red';
   error.innerHTML = text;
   return error;
 }

 let removeValidation = function() {
   let error = form.querySelectorAll('.error');

   for (let i = 0; i < error.length; i++) {
      error[i].remove();
   }
 }

form.addEventListener ('submit', function(event){
   event.preventDefault();
   const input = document.getElementById('text');

removeValidation();
   
if (!text.value) {
      let error = generateError('Введите текст');
      text.parentElement.insertBefore(error,text);
   }

let myText = document.getElementById('myText');
myText.insertAdjacentHTML('beforeend', '<div class = "nomber">'+'<h2>'+input.value+'</h2>'+'</div>');

input.value = '';
})