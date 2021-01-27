import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

import { ICategoriaArticulo, CategoriaArticulo } from 'app/shared/model/categoria-articulo.model';
import { CategoriaArticuloService } from './categoria-articulo.service';
import { AlertError } from 'app/shared/alert/alert-error.model';

@Component({
  selector: 'jhi-categoria-articulo-update',
  templateUrl: './categoria-articulo-update.component.html',
})
export class CategoriaArticuloUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    nombreCategoriaArticulo: [null, [Validators.required]],
    descriptionCategoriaArticulo: [null, [Validators.required]],
    logo: [null, [Validators.required]],
    logoContentType: [],
  });

  constructor(
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected categoriaArticuloService: CategoriaArticuloService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ categoriaArticulo }) => {
      this.updateForm(categoriaArticulo);
    });
  }

  updateForm(categoriaArticulo: ICategoriaArticulo): void {
    this.editForm.patchValue({
      id: categoriaArticulo.id,
      nombreCategoriaArticulo: categoriaArticulo.nombreCategoriaArticulo,
      descriptionCategoriaArticulo: categoriaArticulo.descriptionCategoriaArticulo,
      logo: categoriaArticulo.logo,
      logoContentType: categoriaArticulo.logoContentType,
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
    const categoriaArticulo = this.createFromForm();
    if (categoriaArticulo.id !== undefined) {
      this.subscribeToSaveResponse(this.categoriaArticuloService.update(categoriaArticulo));
    } else {
      this.subscribeToSaveResponse(this.categoriaArticuloService.create(categoriaArticulo));
    }
  }

  private createFromForm(): ICategoriaArticulo {
    return {
      ...new CategoriaArticulo(),
      id: this.editForm.get(['id'])!.value,
      nombreCategoriaArticulo: this.editForm.get(['nombreCategoriaArticulo'])!.value,
      descriptionCategoriaArticulo: this.editForm.get(['descriptionCategoriaArticulo'])!.value,
      logoContentType: this.editForm.get(['logoContentType'])!.value,
      logo: this.editForm.get(['logo'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICategoriaArticulo>>): void {
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
}
