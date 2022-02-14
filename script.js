function onClickButton() {
    const input = document.getElementById('text').value = '';
    console.log('работает');
}

let form = document.getElementById ('form');

form.addEventListener ('submit', function(event){
   event.preventDefault();
   const input = document.getElementById('text').value = '';
  console.log('work');
})