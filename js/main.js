const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click',() => {
    document.body.classList.toggle('dark'); 
    btnSwitch.classList.toggle('active');

//guardamos el modo en localstorage

if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode','true');
}
else{
    localStorage.setItem('dark-mode','false')
}
})

//con las siguientes lineas evitamos que al F5 se borren los cambios en modo dark.

if(localStorage.getItem('dark-mode') === 'true'/*transformar a string el booleano*/){
    document.body.classList.add('dark');
}
else{
    document.body.classList.remove('dark')
}