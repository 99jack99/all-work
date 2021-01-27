import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ICategoriaArticulo } from 'app/shared/model/categoria-articulo.model';

type EntityResponseType = HttpResponse<ICategoriaArticulo>;
type EntityArrayResponseType = HttpResponse<ICategoriaArticulo[]>;

@Injectable({ providedIn: 'root' })
export class CategoriaArticuloService {
  public resourceUrl = SERVER_API_URL + 'api/categoria-articulos';

  constructor(protected http: HttpClient) {}

  create(categoriaArticulo: ICategoriaArticulo): Observable<EntityResponseType> {
    return this.http.post<ICategoriaArticulo>(this.resourceUrl, categoriaArticulo, { observe: 'response' });
  }

  update(categoriaArticulo: ICategoriaArticulo): Observable<EntityResponseType> {
    return this.http.put<ICategoriaArticulo>(this.resourceUrl, categoriaArticulo, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICategoriaArticulo>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICategoriaArticulo[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
