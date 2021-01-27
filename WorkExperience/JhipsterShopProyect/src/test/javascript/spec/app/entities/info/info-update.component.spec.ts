import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { SiteTestModule } from '../../../test.module';
import { InfoUpdateComponent } from 'app/entities/info/info-update.component';
import { InfoService } from 'app/entities/info/info.service';
import { Info } from 'app/shared/model/info.model';

describe('Component Tests', () => {
  describe('Info Management Update Component', () => {
    let comp: InfoUpdateComponent;
    let fixture: ComponentFixture<InfoUpdateComponent>;
    let service: InfoService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SiteTestModule],
        declarations: [InfoUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(InfoUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(InfoUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(InfoService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Info(123);
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
        const entity = new Info();
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
