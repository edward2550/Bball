
const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('button.not')
const teamDitem = document.querySelectorAll('span.nott')
const todoComplete = document.querySelectorAll('button.teamO')
const completeTeamD = document.querySelector('span.teamD')
const incom = document.querySelector('span.nottt')

Array.from(deleteBtn).map((el)=>{
    el.addEventListener('click', deleteTodo)
    console.log(deleteTodo)
})

Array.from(todoItem).map((el)=>{
    el.addEventListener('click', markComplete)
    console.log(markComplete)
})



Array.from(teamDitem).map((el)=>{
    el.addEventListener('click', markTeamD)
    console.log(markTeamD)
})

Array.from(todoComplete).map((el)=>{
    el.addEventListener('click', markIncomplete)
    console.log(markIncomplete)
})


Array.from( todoItem ).map((el)=>{
    el.addEventListener('click' , markInTeamD)
    console.log(markInTeamD)
})

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){ 
        console.log(err)
    }
}



async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}



async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


async function markTeamD(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markTeamD', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markInTeamD(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markInTeamD', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


