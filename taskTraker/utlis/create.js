import fs from 'node:fs'
import {generateRandomId} from './idCreate.js'

export function addTask(task , url) {
    // the content of the json file which contain the tasks data
    const data = fs.readFileSync(url , 'utf8')
    let tasks = JSON.parse(data)

    let now = new Date();
    let id = generateRandomId(3)
    let taskObject = {
        id : id,
        description : task,
        status : 'todo',
        createdAT : now.toDateString(),
        updateAt : now.toDateString(),
    }
    console.log(`# the task added sucessfully with id : ${id} `)
    tasks.push(taskObject)
    fs.writeFileSync(url , JSON.stringify(tasks) , 'utf8')
}
