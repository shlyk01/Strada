const toDo = {
	list:{
		"create a new practice task": "In Progress", 
		"make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
		"write a post": "To Do",
	}, 
	showlist(){ // Метод, который показывает список всех задач
		console.log(this.list)
	},
	addTask(task, status){ // Метод, который добавляет задачу
		this.list[task] = status
	},
	deleteTask(task){ // Метод, который удаляет задачу
		delete this.list[task]
	},
	changeStatus(task, status){ // Метод, который меняет статус задачи
		toDo.list[task] = status
	}
}
toDo.addTask('Learn JS', 'In Progress')
toDo.deleteTask('write a post')
toDo.changeStatus('create a new practice task', 'Done')
toDo.showlist()