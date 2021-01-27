import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BannerService } from 'app/entities/banner/banner.service';
import { IBanner } from 'app/shared/model/banner.model';

@Component({
  selector: 'jhi-carousel-principal',
  templateUrl: './carousel-principal.component.html',
  styleUrls: ['./carousel-principal.component.scss']
})
export class CarouselPrincipalComponent implements OnInit {

  bannerList: IBanner[] = []

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {

    this.bannerService.query().subscribe(
      
      (res: HttpResponse<IBanner[]>) => {
        this.bannerList = res.body || [];

      },
      () => {
        // Zona Error
      }
    
  )  }

}
