import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.scss',
})
export class TaskDetailComponent {
  private route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
}
