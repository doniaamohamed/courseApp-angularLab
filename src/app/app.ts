import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Courses} from './component/courses/courses'
@Component({
  selector: 'app-root',
  imports: [Courses],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('courseApp');
}
