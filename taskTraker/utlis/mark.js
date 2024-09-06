import fs from 'fs'



export function changeMark (to , id , url) {
    const data = fs.readFileSync(url , 'utf8')
    let tasks = JSON.parse(data)
    let task = tasks.find(task => task.id == id)

    if (task == null) {
        console.log("# ther is not a task with this id")
    }else {
        tasks.forEach(task => {
            if (task.id == id) {
                let now = new Date();
                task.status = to
                task.updateAt = now.toDateString()
            }
        });
        fs.writeFileSync(url , JSON.stringify(tasks) , 'utf8')
        console.log('# the status for this task changed')
    }
}