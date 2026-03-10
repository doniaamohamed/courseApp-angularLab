import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges  } from '@angular/core';
import { Course } from '../../models/course';
import{Category} from '../../models/category'
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import{DiscountPipe} from '../../pipes/discount-pipe'
import{ AppDisableAfterClick  } from '../../directives/app-disable-after-click'
@Component({
  selector: 'app-courses',
  imports: [FormsModule,NgClass,DiscountPipe, AppDisableAfterClick ],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
   @Input('sentSelectedCatId') recievedCatId: number = 0
 @Output() onTotalOrderPriceChanged:EventEmitter<number>;
  courses:Course[]
   filteredProducts:Course []
  totalOrderPice: number = 0
  // categories:Category[]
  selectedCategory:number=0
  classes='text-center bg-secondary'
  constructor(){
   this.courses = [
  { id: 1, title: 'Angular Basics', instructor: 'Ahmed Ali', price: 299, seats: 3, Image: 'https://placehold.co/300x200?text=Angular', catId: 1 },
  { id: 2, title: 'JavaScript Pro', instructor: 'Sara Mohamed', price: 199, seats: 0, Image: 'https://placehold.co/300x200?text=JavaScript', catId: 1 },
  { id: 3, title: 'Python Django', instructor: 'Omar Khaled', price: 249, seats: 2, Image: 'https://placehold.co/300x200?text=Django', catId: 1 },

  { id: 4, title: 'UI/UX Design', instructor: 'Mona Hassan', price: 399, seats: 5, Image: 'https://placehold.co/300x200?text=UI+UX', catId: 2 },
  { id: 5, title: 'Figma for Beginners', instructor: 'Nour Tarek', price: 149, seats: 0, Image: 'https://placehold.co/300x200?text=Figma', catId: 2 },

  { id: 6, title: 'Machine Learning', instructor: 'Khaled Samir', price: 499, seats: 4, Image: 'https://placehold.co/300x200?text=ML', catId: 3 },
  { id: 7, title: 'Data Analysis', instructor: 'Rania Fares', price: 349, seats: 1, Image: 'https://placehold.co/300x200?text=Data', catId: 3 },

  { id: 8, title: 'Flutter Basics', instructor: 'Youssef Nabil', price: 299, seats: 0, Image: 'https://placehold.co/300x200?text=Flutter', catId: 4 },
  { id: 9, title: 'React Native', instructor: 'Dina Adel', price: 379, seats: 6, Image: 'https://placehold.co/300x200?text=React+Native', catId: 4 },

  { id: 10, title: 'Ethical Hacking', instructor: 'Hassan Magdy', price: 599, seats: 2, Image: 'https://placehold.co/300x200?text=Hacking', catId: 5 },
];
// this.categories=[{id:1,name:'Programming'},{id:2,name:'Design'},{id:3,name:'Data Science'},{id:4,name:'Mobile'},{id:5,name:'Cyber Security'}];
  this.filteredProducts = this.courses
    this.onTotalOrderPriceChanged=new EventEmitter<number>()
}
  register(course: Course) {
  course.seats--;
   this.totalOrderPice += course.price;
  this.onTotalOrderPriceChanged.emit(this.totalOrderPice);
}
 ngOnChanges(): void {
    this.filterProductsFun()
  }

  filterProductsFun() {
    if (this.recievedCatId == 0) {
      this.filteredProducts = this.courses
    } else {
      this.filteredProducts = this.courses.filter((prd) => prd.catId == this.recievedCatId)

    }
  }
}
