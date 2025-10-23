import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NotesComponent } from './notes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NotesComponent, RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // Called from template: <h1>Hello, {{ title() }}</h1>
  title(): string {
    return 'Angular App';
  }
}
