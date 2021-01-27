import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ICategoriaArticulo, CategoriaArticulo } from 'app/shared/model/categoria-articulo.model';
import { CategoriaArticuloService } from './categoria-articulo.service';
import { CategoriaArticuloComponent } from './categoria-articulo.component';
import { CategoriaArticuloDetailComponent } from './categoria-articulo-detail.component';
import { CategoriaArticuloUpdateComponent } from './categoria-articulo-update.component';

@Injectable({ providedIn: 'root' })
export class CategoriaArticuloResolve implements Resolve<ICategoriaArticulo> {
  constructor(private service: CategoriaArticuloService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICategoriaArticulo> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((categoriaArticulo: HttpResponse<CategoriaArticulo>) => {
          if (categoriaArticulo.body) {
            return of(categoriaArticulo.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new CategoriaArticulo());
  }
}

export const categoriaArticuloRoute: Routes = [
  {
    path: '',
    component: CategoriaArticuloComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'CategoriaArticulos',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: CategoriaArticuloDetailComponent,
    resolve: {
      categoriaArticulo: CategoriaArticuloResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'CategoriaArticulos',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: CategoriaArticuloUpdateComponent,
    resolve: {
      categoriaArticulo: CategoriaArticuloResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'CategoriaArticulos',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: CategoriaArticuloUpdateComponent,
    resolve: {
      categoriaArticulo: CategoriaArticuloResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'CategoriaArticulos',
    },
    canActivate: [UserRouteAccessService],
  },
];
