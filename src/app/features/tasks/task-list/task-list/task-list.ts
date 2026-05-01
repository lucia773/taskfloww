import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskListComponent {
  tasks = [
    {
      id: 1,
      title: 'Preparar examen Angular',
      description: 'Repasar routing, forms y signals.',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Montar layout bonito',
      description: 'Crear cards, navbar y fondo degradado.',
      status: 'done',
    },
    {
      id: 3,
      title: 'Añadir resolver',
      description: 'Cargar datos antes de entrar al detalle.',
      status: 'pending',
    },
  ];
}
