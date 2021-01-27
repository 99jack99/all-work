import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { SiteTestModule } from '../../../test.module';
import { MockEventManager } from '../../../helpers/mock-event-manager.service';
import { MockActiveModal } from '../../../helpers/mock-active-modal.service';
import { CategoriaArticuloDeleteDialogComponent } from 'app/entities/categoria-articulo/categoria-articulo-delete-dialog.component';
import { CategoriaArticuloService } from 'app/entities/categoria-articulo/categoria-articulo.service';

describe('Component Tests', () => {
  describe('CategoriaArticulo Management Delete Component', () => {
    let comp: CategoriaArticuloDeleteDialogComponent;
    let fixture: ComponentFixture<CategoriaArticuloDeleteDialogComponent>;
    let service: CategoriaArticuloService;
    let mockEventManager: MockEventManager;
    let mockActiveModal: MockActiveModal;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SiteTestModule],
        declarations: [CategoriaArticuloDeleteDialogComponent],
      })
        .overrideTemplate(CategoriaArticuloDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CategoriaArticuloDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CategoriaArticuloService);
      mockEventManager = TestBed.get(JhiEventManager);
      mockActiveModal = TestBed.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.closeSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));

      it('Should not call delete service on clear', () => {
        // GIVEN
        spyOn(service, 'delete');

        // WHEN
        comp.cancel();

        // THEN
        expect(service.delete).not.toHaveBeenCalled();
        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
      });
    });
  });
});
