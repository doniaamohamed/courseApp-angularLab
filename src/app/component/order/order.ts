// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-order',
//   imports: [],
//   templateUrl: './order.html',
//   styleUrl: './order.css',
// })
// export class Order {}
import { Component } from '@angular/core';
import { Courses } from "../courses/courses";
import { FormsModule } from '@angular/forms';
import { Category } from '../../models/category';

@Component({
  selector: 'app-order',
  imports: [Courses, FormsModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  selectedCatId: number = 0
  categories: Category[]
  orderPrice:number=0
  constructor() {
    this.categories = [
      {id:1,name:'Programming'},{id:2,name:'Design'},{id:3,name:'Data Science'},{id:4,name:'Mobile'},{id:5,name:'Cyber Security'}];
      
  }
setOrderPrice(newOrderPrice:number){
  this.orderPrice=newOrderPrice
}
}
