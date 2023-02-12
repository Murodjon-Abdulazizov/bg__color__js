let tasks = [

]

let textarea = document.querySelector('.textarea')
let date = document.querySelector('.date')




let but = document.querySelector('.add-task')

but.addEventListener('click', function(){
  document.querySelector('.table__tbody').innerHTML = ''
  let day__color = ''
  let day = date.value.substring(8)
  if(30-day > 0 && 30-day<3){
    day__color = 'red'
  }

  else if(30-day > 3 && 30-day<7){
    day__color = 'yellow'
  }

  else if(30-day > 7){
    day__color = 'green'
  }
  let task = {
    textare__value : textarea.value ,
    date__value : date.value,
    day__color: day__color
  }


  console.log(tasks)
  tasks.push(task)

  function chizadigan(){
    for(let i=0; i < tasks.length; i++){
      document.querySelector('.table__tbody').innerHTML += 
      `
      <tr style="background-color: ${tasks[i].day__color};">
      <td> ${i+1} </td>
      <td>${tasks[i].textare__value}</td>
      <td>${tasks[i].date__value}</td>
      <td> <button class="delete">D</button> </td>
      <td> <button class="edit">E</button> </td>
    </tr>
      `
    }
  }
  chizadigan()
  document.querySelector('form').reset()
})