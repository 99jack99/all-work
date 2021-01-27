import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { SiteTestModule } from '../../../test.module';
import { CategoriaArticuloUpdateComponent } from 'app/entities/categoria-articulo/categoria-articulo-update.component';
import { CategoriaArticuloService } from 'app/entities/categoria-articulo/categoria-articulo.service';
import { CategoriaArticulo } from 'app/shared/model/categoria-articulo.model';

describe('Component Tests', () => {
  describe('CategoriaArticulo Management Update Component', () => {
    let comp: CategoriaArticuloUpdateComponent;
    let fixture: ComponentFixture<CategoriaArticuloUpdateComponent>;
    let service: CategoriaArticuloService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SiteTestModule],
        declarations: [CategoriaArticuloUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(CategoriaArticuloUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CategoriaArticuloUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CategoriaArticuloService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new CategoriaArticulo(123);
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
        const entity = new CategoriaArticulo();
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
