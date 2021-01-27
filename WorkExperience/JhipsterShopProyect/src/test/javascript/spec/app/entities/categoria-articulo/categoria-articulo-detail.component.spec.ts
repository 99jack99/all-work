import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { SiteTestModule } from '../../../test.module';
import { CategoriaArticuloDetailComponent } from 'app/entities/categoria-articulo/categoria-articulo-detail.component';
import { CategoriaArticulo } from 'app/shared/model/categoria-articulo.model';

describe('Component Tests', () => {
  describe('CategoriaArticulo Management Detail Component', () => {
    let comp: CategoriaArticuloDetailComponent;
    let fixture: ComponentFixture<CategoriaArticuloDetailComponent>;
    let dataUtils: JhiDataUtils;
    const route = ({ data: of({ categoriaArticulo: new CategoriaArticulo(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SiteTestModule],
        declarations: [CategoriaArticuloDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CategoriaArticuloDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CategoriaArticuloDetailComponent);
      comp = fixture.componentInstance;
      dataUtils = fixture.debugElement.injector.get(JhiDataUtils);
    });

    describe('OnInit', () => {
      it('Should load categoriaArticulo on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.categoriaArticulo).toEqual(jasmine.objectContaining({ id: 123 }));
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
