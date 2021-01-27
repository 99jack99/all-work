import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ArticuloService } from 'app/entities/articulo/articulo.service';
import { IArticulo, Articulo } from 'app/shared/model/articulo.model';

describe('Service Tests', () => {
  describe('Articulo Service', () => {
    let injector: TestBed;
    let service: ArticuloService;
    let httpMock: HttpTestingController;
    let elemDefault: IArticulo;
    let expectedResult: IArticulo | IArticulo[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(ArticuloService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new Articulo(0, 'AAAAAAA', 0, 0, false, 'image/png', 'AAAAAAA', 0);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Articulo', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new Articulo()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Articulo', () => {
        const returnedFromService = Object.assign(
          {
            nombre: 'BBBBBB',
            precio: 1,
            precioOferta: 1,
            isFav: true,
            img: 'BBBBBB',
            rating: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Articulo', () => {
        const returnedFromService = Object.assign(
          {
            nombre: 'BBBBBB',
            precio: 1,
            precioOferta: 1,
            isFav: true,
            img: 'BBBBBB',
            rating: 1,
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

      it('should delete a Articulo', () => {
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
