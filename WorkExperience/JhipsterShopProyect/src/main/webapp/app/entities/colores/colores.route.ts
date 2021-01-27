import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IColores, Colores } from 'app/shared/model/colores.model';
import { ColoresService } from './colores.service';
import { ColoresComponent } from './colores.component';
import { ColoresDetailComponent } from './colores-detail.component';
import { ColoresUpdateComponent } from './colores-update.component';

@Injectable({ providedIn: 'root' })
export class ColoresResolve implements Resolve<IColores> {
  constructor(private service: ColoresService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IColores> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((colores: HttpResponse<Colores>) => {
          if (colores.body) {
            return of(colores.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Colores());
  }
}

export const coloresRoute: Routes = [
  {
    path: '',
    component: ColoresComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Colores',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ColoresDetailComponent,
    resolve: {
      colores: ColoresResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Colores',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ColoresUpdateComponent,
    resolve: {
      colores: ColoresResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Colores',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ColoresUpdateComponent,
    resolve: {
      colores: ColoresResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Colores',
    },
    canActivate: [UserRouteAccessService],
  },
];
