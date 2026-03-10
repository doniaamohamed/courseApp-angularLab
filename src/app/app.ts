import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {Courses} from './component/courses/courses'
import{Order} from './component/order/order'
@Component({
  selector: 'app-root',
  imports: [Order],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('courseApp');
}
