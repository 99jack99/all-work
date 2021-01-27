import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SiteTestModule } from '../../../test.module';
import { InfoComponent } from 'app/entities/info/info.component';
import { InfoService } from 'app/entities/info/info.service';
import { Info } from 'app/shared/model/info.model';

describe('Component Tests', () => {
  describe('Info Management Component', () => {
    let comp: InfoComponent;
    let fixture: ComponentFixture<InfoComponent>;
    let service: InfoService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SiteTestModule],
        declarations: [InfoComponent],
      })
        .overrideTemplate(InfoComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(InfoComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(InfoService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Info(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.infos && comp.infos[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
