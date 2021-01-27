import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IArticulo } from 'app/shared/model/articulo.model';

@Component({
  selector: 'jhi-articulo-detail',
  templateUrl: './articulo-detail.component.html',
})
export class ArticuloDetailComponent implements OnInit {
  articulo: IArticulo | null = null;

  constructor(protected dataUtils: JhiDataUtils, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ articulo }) => (this.articulo = articulo));
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType = '', base64String: string): void {
    this.dataUtils.openFile(contentType, base64String);
  }

  previousState(): void {
    window.history.back();
  }
}
