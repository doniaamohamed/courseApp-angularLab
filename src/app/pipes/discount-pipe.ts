import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number,limit: number = 10): number {
    if (!value) {
      return 0
    }
     return value -(value*limit)/100
  }
}

// 1. The pipe should reduce the price by a percentage. 
// 2. The default discount should be 10%. 
// 3. The user should be able to pass a different discount value. 
// 1000 {{1000 | 
// discount}} 
// 1000 {{1000 | 
// discount:20}} 
// 900 
// 800