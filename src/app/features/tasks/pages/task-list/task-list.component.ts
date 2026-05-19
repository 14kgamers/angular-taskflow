import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskService } from '../../../../core/services/task.service';
import { Task } from '../../../../core/models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

}
