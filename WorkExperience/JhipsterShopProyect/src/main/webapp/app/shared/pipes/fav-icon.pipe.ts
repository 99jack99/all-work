import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'favIcon'
})
export class FavIconPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {}


  transform(isFav: boolean): any {

    if (isFav) {
      return this.sanitized.bypassSecurityTrustHtml('<i class="fas fa-heart"></i>');
    }
    else {
      return this.sanitized.bypassSecurityTrustHtml('<i class="far fa-heart"></i>');
    }
  }
}
