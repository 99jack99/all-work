import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BannerService } from 'app/entities/banner/banner.service';
import { IBanner } from 'app/shared/model/banner.model';

@Component({
  selector: 'jhi-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.scss']
})
export class BannerListComponent implements OnInit {
  banner!: IBanner | null;
  id = 1254;

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {

    this.bannerService.find(this.id).subscribe(
      
      (res: HttpResponse<IBanner>) => {
        this.banner = res.body ;

      },
      () => {
        // Zona Error
      }
    
  )  }

}
