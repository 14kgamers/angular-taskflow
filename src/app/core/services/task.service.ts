import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    {
      id: 1,
      title: 'Estudar Angular',
      description: 'Aprender arquitetura Angular',
      completed: false
    },
    {
      id: 2,
      title: 'Criar projeto para GitHub',
      description: 'Montar um portfólio profissional',
      completed: true
    },
    {
      id: 3,
      title: 'Aprender RxJS',
      description: 'Entender observables',
      completed: false
    }
  ];

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

}
