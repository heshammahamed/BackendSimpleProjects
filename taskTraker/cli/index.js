#! /usr/bin/env node
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { addTask } from '../utlis/create.js'
import { updateTask } from '../utlis/modify.js'
import { deleteTask } from '../utlis/delete.js'
import { showDoneTasks , showProgressTasks , showTasks , showTodoTasks } from '../utlis/show.js'
import { handleFlags } from '../utlis/flags.js'
import { changeMark } from '../utlis/mark.js'

// Get the current project main directory
const __filename = fileURLToPath(import.meta.url);
const __theMainDirname = dirname(dirname(__filename));

const theDataFileDirectory = `${__theMainDirname}/data/tasks.json`;


// here we take the arguments that the user give to us and skip the first two arguments cause they are not given by the user
let argu = process.argv.slice(2)

// here we start to see what type of command the user give to us and start take action depend on the user command
if (argu[0].startsWith('--')) {

    handleFlags(argu[0].substring(2))

}else if (argu[0].startsWith('-')) {

    handleFlags(argu[0].substring(1))

}else if (argu[0] == 'add') {

    addTask(argu[1] , theDataFileDirectory)

}else if (argu[0] == 'update') {

    updateTask(argu[1] , argu[2] , theDataFileDirectory)

}else if (argu[0] == 'delete') {

    deleteTask(argu[1] , theDataFileDirectory)

}else if (argu[0] == 'list') {

    if (argu.length == 1) {

        showTasks(theDataFileDirectory)

    }else {
        if (argu[1] == "done") {

            showDoneTasks(theDataFileDirectory)

        }else if (argu[1] == "todo") {

            showTodoTasks(theDataFileDirectory)

        }else if (argu[1] == "in-progress") {

            showProgressTasks(theDataFileDirectory)

        }else {
            console.log('# there is not command like this type --help to know the right commands')
        }
    }   
}else if (argu[0] == 'mark') {

    changeMark(argu[1] , argu[2] , theDataFileDirectory)
    
}else {
    console.log('there is not command like this , try --help to se existing commands')
}