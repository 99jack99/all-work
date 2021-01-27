import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favorite'
})
export class FavoritePipe implements PipeTransform {

  transform(value: boolean): unknown {
    if(value === true){
      return "<i class='fas fa-heart'></i>";
    } else {
      return "<i class='far fa-heart'></i>";
    } 
  }

}
