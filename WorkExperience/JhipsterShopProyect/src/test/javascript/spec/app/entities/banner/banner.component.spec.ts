import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SiteTestModule } from '../../../test.module';
import { BannerComponent } from 'app/entities/banner/banner.component';
import { BannerService } from 'app/entities/banner/banner.service';
import { Banner } from 'app/shared/model/banner.model';

describe('Component Tests', () => {
  describe('Banner Management Component', () => {
    let comp: BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;
    let service: BannerService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SiteTestModule],
        declarations: [BannerComponent],
      })
        .overrideTemplate(BannerComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(BannerComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(BannerService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Banner(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.banners && comp.banners[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
