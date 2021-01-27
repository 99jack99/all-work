import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoriaArticuloService } from 'app/entities/categoria-articulo/categoria-articulo.service';
import { ICategoriaArticulo, CategoriaArticulo } from 'app/shared/model/categoria-articulo.model';

describe('Service Tests', () => {
  describe('CategoriaArticulo Service', () => {
    let injector: TestBed;
    let service: CategoriaArticuloService;
    let httpMock: HttpTestingController;
    let elemDefault: ICategoriaArticulo;
    let expectedResult: ICategoriaArticulo | ICategoriaArticulo[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(CategoriaArticuloService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new CategoriaArticulo(0, 'AAAAAAA', 'AAAAAAA', 'image/png', 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a CategoriaArticulo', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new CategoriaArticulo()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a CategoriaArticulo', () => {
        const returnedFromService = Object.assign(
          {
            nombreCategoriaArticulo: 'BBBBBB',
            descriptionCategoriaArticulo: 'BBBBBB',
            logo: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of CategoriaArticulo', () => {
        const returnedFromService = Object.assign(
          {
            nombreCategoriaArticulo: 'BBBBBB',
            descriptionCategoriaArticulo: 'BBBBBB',
            logo: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a CategoriaArticulo', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
