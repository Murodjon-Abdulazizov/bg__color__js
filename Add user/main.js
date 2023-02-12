let users = [
    {
        firstName :'Murodjon',
        lastName: 'Abdulazizov',
        group: '610-19',
        year: '2001',
        job: 'Frontend developer'
    },
    {
        firstName :'Murodjonwndbehvdh',
        lastName: 'Abdulazizov',
        group: '610-19',
        year: '2001',
        job: 'Frontend developer'
    },
    {
        firstName :'Murodjon',
        lastName: 'Abdulazizov',
        group: '610-19',
        year: '2001',
        job: 'Frontend developer'
    }
]


let tbody = document.querySelector('.table__body')


function chizadigan(){
    document.querySelector('.table__body').innerHTML = ''
    for(let i=0; i< users.length; i++){
        tbody.innerHTML +=   `
        <tr>
        <td>${users[i].firstName}</td>
        <td>${users[i].lastName}</td>
        <td>${users[i].group}</td>
        <td>${users[i].year}</td>
        <td>${users[i].job}</td>
        <td> <button class="delete" onclick="salomlash(${i})">D</button> </td>
        <td> <button class="editing" onclick="edit(${i})">E</button> </td>
        </tr>   
        `}
    }
    
    
    
    
    var firstName = document.getElementsByClassName("firstName")[0];
    var lastName = document.getElementsByClassName('lastName')[0];
    var group = document.getElementsByClassName('group')[0];
    var year = document.getElementsByClassName('year')[0];
    var job = document.getElementsByClassName('job')[0];
    
    
    
    
    
    
    
    function user_qoshadigan(){
        let user = {
            firstName : firstName.value,
            lastName : lastName.value,
            group : group.value,
            year : year.value,
            job: job.value,
        }
        
        
        for(let i=0; i<users.length; i++){
            if(users[i].firstName === firstName.value){
                alert('Bunday ism avvaldan bor')
            }
            else if(lastName.value.length == 0){
                alert('Login kiritish shart')
            }
        }
        
        if(edited >=0){
            users[edited] = user
            edited = -1;
        }
        
        else{
            users.push(user)
        }

        chizadigan()

        document.forms["myForm"].reset()
    }
    
    let edited = -1;
    
    let del = document.querySelector('.delete')
    
    
    
    function salomlash(index){
        users.splice(index, 1)
        chizadigan()
    }
    
    function edit(user_index){
        firstName.value = users[user_index].firstName 
        lastName.value = users[user_index].lastName 
        group.value = users[user_index].group 
        year.value = users[user_index].year 
        job.value = users[user_index].job
        
        edited =  user_index;
    }