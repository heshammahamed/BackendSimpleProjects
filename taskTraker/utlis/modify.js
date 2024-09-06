import fs from 'fs'

export const updateTask =  (des , id , url) => {
    const data = fs.readFileSync(url , 'utf8')
    let tasks = JSON.parse(data)
    const task = tasks.find(task => task.id == id);

    if (task == null) {
        console.log("# there is not task with this id")
    }else {
        tasks.forEach(task => {
                        if (task.id == id) {
                            let now = new Date();
                            task.description = des;
                            task.updateAt = now.toDateString()
                        }
                });
        fs.writeFileSync(url , JSON.stringify(tasks) , 'utf8')
        console.log('# the task is updated')
    }
}