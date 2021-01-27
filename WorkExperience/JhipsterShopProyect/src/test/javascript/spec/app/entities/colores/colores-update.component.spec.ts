import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { SiteTestModule } from '../../../test.module';
import { ColoresUpdateComponent } from 'app/entities/colores/colores-update.component';
import { ColoresService } from 'app/entities/colores/colores.service';
import { Colores } from 'app/shared/model/colores.model';

describe('Component Tests', () => {
  describe('Colores Management Update Component', () => {
    let comp: ColoresUpdateComponent;
    let fixture: ComponentFixture<ColoresUpdateComponent>;
    let service: ColoresService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SiteTestModule],
        declarations: [ColoresUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(ColoresUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ColoresUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ColoresService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Colores(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new Colores();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
