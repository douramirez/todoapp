import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tasks = signal([
    {
      id:Date.now(),
      title : 'Create a new project',
      completed : false
    },
    {
      id:Date.now(),
      title : 'Create components',
      completed : false
    }
  ])

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement
    const newTask = input.value
    input.value = ''
    this.addTask(newTask)
  }

  addTask(title:string) {
    const newTask = {
      id:Date.now(),
      title,
      completed : false
    }
    this.tasks.update((tasks) => [...tasks, newTask])
  }

  deleteTask(index : number) {
    this.tasks.update((tasks) => tasks.filter((task,position) => position !== index))
  }

  updateTask(index : number) {
    this.tasks.update((tasks)=>{
      return tasks.map((task,position) => {
        if(position === index) {
          return {
            ...task,
            completed : !task.completed
          }
        }
        return task
      })
    })
  }
}
