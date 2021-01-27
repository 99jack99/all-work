import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SiteTestModule } from '../../../test.module';
import { ColoresComponent } from 'app/entities/colores/colores.component';
import { ColoresService } from 'app/entities/colores/colores.service';
import { Colores } from 'app/shared/model/colores.model';

describe('Component Tests', () => {
  describe('Colores Management Component', () => {
    let comp: ColoresComponent;
    let fixture: ComponentFixture<ColoresComponent>;
    let service: ColoresService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SiteTestModule],
        declarations: [ColoresComponent],
      })
        .overrideTemplate(ColoresComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ColoresComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ColoresService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Colores(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.colores && comp.colores[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
