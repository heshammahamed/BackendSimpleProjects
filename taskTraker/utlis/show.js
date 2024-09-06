import fs from 'node:fs'



export function showTasks (url) {
    const data = fs.readFileSync(url , 'utf8')
    let tasks = JSON.parse(data)    
    tasks.forEach(task => {
        console.log (`${task.id}        ${task.description}     ${task.status}`)
    });
}

export function showDoneTasks (url) { 
    const data = fs.readFileSync(url , 'utf8')
    let tasks = JSON.parse(data)   
    tasks.forEach(task => {
        if (task.status == 'done') {
            console.log (`${task.id}        ${task.description}`)
        }
    });
}

export function showProgressTasks (url) {  
    const data = fs.readFileSync(url , 'utf8')
    let tasks = JSON.parse(data)  
    tasks.forEach(task => {
        if (task.status == 'in-progress') {
            console.log (`${task.id}        ${task.description}`)
        }
    });
}
export function showTodoTasks (url) {   
    const data = fs.readFileSync(url , 'utf8')
    let tasks = JSON.parse(data) 
    tasks.forEach(task => {
        if (task.status == 'todo') {
            console.log (`${task.id}        ${task.description}`)
        }
    });
}