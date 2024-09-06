
export function handleFlags (flag) {
    if (flag == "help") {
        console.log('add ""                    to add a new task')
        console.log('update ""   ID           to update the given id task')
        console.log('delete      ID                 to delete the given id task')
        console.log('mark in-progress ID       to make the task in progress')
        console.log('mark done        ID              to make the task done')
        console.log('list                      to list all tasks')
        console.log('list done                 to list done tasks')
        console.log('list todo                 to list todo tasks')
        console.log('list in-progress          to list in progress tasks')
    }else {
        console.log('there is not command like this , try --help to se existing commands')
    }
}