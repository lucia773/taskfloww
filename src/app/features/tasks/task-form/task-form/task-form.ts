import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskFormComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
  });

  save() {
    if (this.form.invalid) return;
    console.log(this.form.value);
  }
}
