import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IInfo, Info } from 'app/shared/model/info.model';
import { InfoService } from './info.service';
import { InfoComponent } from './info.component';
import { InfoDetailComponent } from './info-detail.component';
import { InfoUpdateComponent } from './info-update.component';

@Injectable({ providedIn: 'root' })
export class InfoResolve implements Resolve<IInfo> {
  constructor(private service: InfoService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IInfo> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((info: HttpResponse<Info>) => {
          if (info.body) {
            return of(info.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Info());
  }
}

export const infoRoute: Routes = [
  {
    path: '',
    component: InfoComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Infos',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: InfoDetailComponent,
    resolve: {
      info: InfoResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Infos',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: InfoUpdateComponent,
    resolve: {
      info: InfoResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Infos',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: InfoUpdateComponent,
    resolve: {
      info: InfoResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Infos',
    },
    canActivate: [UserRouteAccessService],
  },
];
