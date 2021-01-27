import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { ICategoriaArticulo } from 'app/shared/model/categoria-articulo.model';

@Component({
  selector: 'jhi-categoria-articulo-detail',
  templateUrl: './categoria-articulo-detail.component.html',
})
export class CategoriaArticuloDetailComponent implements OnInit {
  categoriaArticulo: ICategoriaArticulo | null = null;

  constructor(protected dataUtils: JhiDataUtils, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ categoriaArticulo }) => (this.categoriaArticulo = categoriaArticulo));
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
