let button__one = document.querySelector('.number__one')
let button__two = document.querySelector('.number__two')
let button__three = document.querySelector('.number__three')
let bg__img =  document.querySelector('.bg__img')


button__one.addEventListener('click', function(){
  console.log(bg__img.classList)
  bg__img.classList.toggle('img__one')
})  

button__two.addEventListener('click', function(){
  bg__img.classList.toggle('img__two')
})  

button__three.addEventListener('click', function(){
  bg__img.classList.toggle('img__three')
})  
