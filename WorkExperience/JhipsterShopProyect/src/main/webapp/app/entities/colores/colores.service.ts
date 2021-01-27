import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IColores } from 'app/shared/model/colores.model';

type EntityResponseType = HttpResponse<IColores>;
type EntityArrayResponseType = HttpResponse<IColores[]>;

@Injectable({ providedIn: 'root' })
export class ColoresService {
  public resourceUrl = SERVER_API_URL + 'api/colores';

  constructor(protected http: HttpClient) {}

  create(colores: IColores): Observable<EntityResponseType> {
    return this.http.post<IColores>(this.resourceUrl, colores, { observe: 'response' });
  }

  update(colores: IColores): Observable<EntityResponseType> {
    return this.http.put<IColores>(this.resourceUrl, colores, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IColores>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IColores[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
