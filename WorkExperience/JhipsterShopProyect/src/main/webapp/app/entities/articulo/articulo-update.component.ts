import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

import { IArticulo, Articulo } from 'app/shared/model/articulo.model';
import { ArticuloService } from './articulo.service';
import { AlertError } from 'app/shared/alert/alert-error.model';
import { ICategoriaArticulo } from 'app/shared/model/categoria-articulo.model';
import { CategoriaArticuloService } from 'app/entities/categoria-articulo/categoria-articulo.service';

@Component({
  selector: 'jhi-articulo-update',
  templateUrl: './articulo-update.component.html',
})
export class ArticuloUpdateComponent implements OnInit {
  isSaving = false;
  categoriaarticulos: ICategoriaArticulo[] = [];

  editForm = this.fb.group({
    id: [],
    nombre: [null, [Validators.required]],
    precio: [null, [Validators.required]],
    precioOferta: [],
    isFav: [null, [Validators.required]],
    img: [null, [Validators.required]],
    imgContentType: [],
    rating: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
    categoriaArticuloId: [],
  });

  constructor(
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected articuloService: ArticuloService,
    protected categoriaArticuloService: CategoriaArticuloService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ articulo }) => {
      this.updateForm(articulo);

      this.categoriaArticuloService
        .query()
        .subscribe((res: HttpResponse<ICategoriaArticulo[]>) => (this.categoriaarticulos = res.body || []));
    });
  }

  updateForm(articulo: IArticulo): void {
    this.editForm.patchValue({
      id: articulo.id,
      nombre: articulo.nombre,
      precio: articulo.precio,
      precioOferta: articulo.precioOferta,
      isFav: articulo.isFav,
      img: articulo.img,
      imgContentType: articulo.imgContentType,
      rating: articulo.rating,
      categoriaArticuloId: articulo.categoriaArticuloId,
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType: string, base64String: string): void {
    this.dataUtils.openFile(contentType, base64String);
  }

  setFileData(event: any, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe(null, (err: JhiFileLoadError) => {
      this.eventManager.broadcast(
        new JhiEventWithContent<AlertError>('siteApp.error', { message: err.message })
      );
    });
  }

  clearInputImage(field: string, fieldContentType: string, idInput: string): void {
    this.editForm.patchValue({
      [field]: null,
      [fieldContentType]: null,
    });
    if (this.elementRef && idInput && this.elementRef.nativeElement.querySelector('#' + idInput)) {
      this.elementRef.nativeElement.querySelector('#' + idInput).value = null;
    }
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const articulo = this.createFromForm();
    if (articulo.id !== undefined) {
      this.subscribeToSaveResponse(this.articuloService.update(articulo));
    } else {
      this.subscribeToSaveResponse(this.articuloService.create(articulo));
    }
  }

  private createFromForm(): IArticulo {
    return {
      ...new Articulo(),
      id: this.editForm.get(['id'])!.value,
      nombre: this.editForm.get(['nombre'])!.value,
      precio: this.editForm.get(['precio'])!.value,
      precioOferta: this.editForm.get(['precioOferta'])!.value,
      isFav: this.editForm.get(['isFav'])!.value,
      imgContentType: this.editForm.get(['imgContentType'])!.value,
      img: this.editForm.get(['img'])!.value,
      rating: this.editForm.get(['rating'])!.value,
      categoriaArticuloId: this.editForm.get(['categoriaArticuloId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IArticulo>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: ICategoriaArticulo): any {
    return item.id;
  }
}
