import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './private-layout.html',
  styleUrl: './private-layout.scss',
})
export class PrivateLayoutComponent {}
