import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IInfo } from 'app/shared/model/info.model';

type EntityResponseType = HttpResponse<IInfo>;
type EntityArrayResponseType = HttpResponse<IInfo[]>;

@Injectable({ providedIn: 'root' })
export class InfoService {
  public resourceUrl = SERVER_API_URL + 'api/infos';

  constructor(protected http: HttpClient) {}

  create(info: IInfo): Observable<EntityResponseType> {
    return this.http.post<IInfo>(this.resourceUrl, info, { observe: 'response' });
  }

  update(info: IInfo): Observable<EntityResponseType> {
    return this.http.put<IInfo>(this.resourceUrl, info, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IInfo>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IInfo[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
