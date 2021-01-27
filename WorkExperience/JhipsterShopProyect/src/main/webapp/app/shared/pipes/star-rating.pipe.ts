import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(rating:boolean): String {

    // Estrellas Puntuadas
    if(rating)
      return('<i class="fas fa-star"></i>');
    
    else
      return('<i class="far fa-star"></i>');
    
  }

}
