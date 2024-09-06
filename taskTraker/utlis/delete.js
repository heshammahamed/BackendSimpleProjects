import fs from 'node:fs'



export function deleteTask(url) {
    const data = fs.readFileSync(url , 'utf8')
    let tasks = JSON.parse(data)
    const task = tasks.find(task => task.id == id);
    if (task == null) {
        console.log("# You must give me the id of the task you want to delete")
    }else {
        let newtasks = tasks.filter(task => task.id != id);
        fs.writeFileSync(url , JSON.stringify(newtasks) , 'utf8')
        console.log('# the task is deleted')
    }
}