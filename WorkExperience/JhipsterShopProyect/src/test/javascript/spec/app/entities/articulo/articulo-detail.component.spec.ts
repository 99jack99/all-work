import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { SiteTestModule } from '../../../test.module';
import { ArticuloDetailComponent } from 'app/entities/articulo/articulo-detail.component';
import { Articulo } from 'app/shared/model/articulo.model';

describe('Component Tests', () => {
  describe('Articulo Management Detail Component', () => {
    let comp: ArticuloDetailComponent;
    let fixture: ComponentFixture<ArticuloDetailComponent>;
    let dataUtils: JhiDataUtils;
    const route = ({ data: of({ articulo: new Articulo(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SiteTestModule],
        declarations: [ArticuloDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ArticuloDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ArticuloDetailComponent);
      comp = fixture.componentInstance;
      dataUtils = fixture.debugElement.injector.get(JhiDataUtils);
    });

    describe('OnInit', () => {
      it('Should load articulo on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.articulo).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });

    describe('byteSize', () => {
      it('Should call byteSize from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'byteSize');
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.byteSize(fakeBase64);

        // THEN
        expect(dataUtils.byteSize).toBeCalledWith(fakeBase64);
      });
    });

    describe('openFile', () => {
      it('Should call openFile from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'openFile');
        const fakeContentType = 'fake content type';
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.openFile(fakeContentType, fakeBase64);

        // THEN
        expect(dataUtils.openFile).toBeCalledWith(fakeContentType, fakeBase64);
      });
    });
  });
});
