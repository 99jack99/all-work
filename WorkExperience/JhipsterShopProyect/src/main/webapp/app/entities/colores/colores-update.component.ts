import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

import { IColores, Colores } from 'app/shared/model/colores.model';
import { ColoresService } from './colores.service';
import { AlertError } from 'app/shared/alert/alert-error.model';
import { IArticulo } from 'app/shared/model/articulo.model';
import { ArticuloService } from 'app/entities/articulo/articulo.service';

@Component({
  selector: 'jhi-colores-update',
  templateUrl: './colores-update.component.html',
})
export class ColoresUpdateComponent implements OnInit {
  isSaving = false;
  articulos: IArticulo[] = [];

  editForm = this.fb.group({
    id: [],
    nombreColor: [null, [Validators.required]],
    img: [null, [Validators.required]],
    imgContentType: [],
    articuloId: [],
  });

  constructor(
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected coloresService: ColoresService,
    protected articuloService: ArticuloService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ colores }) => {
      this.updateForm(colores);

      this.articuloService.query().subscribe((res: HttpResponse<IArticulo[]>) => (this.articulos = res.body || []));
    });
  }

  updateForm(colores: IColores): void {
    this.editForm.patchValue({
      id: colores.id,
      nombreColor: colores.nombreColor,
      img: colores.img,
      imgContentType: colores.imgContentType,
      articuloId: colores.articuloId,
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
    const colores = this.createFromForm();
    if (colores.id !== undefined) {
      this.subscribeToSaveResponse(this.coloresService.update(colores));
    } else {
      this.subscribeToSaveResponse(this.coloresService.create(colores));
    }
  }

  private createFromForm(): IColores {
    return {
      ...new Colores(),
      id: this.editForm.get(['id'])!.value,
      nombreColor: this.editForm.get(['nombreColor'])!.value,
      imgContentType: this.editForm.get(['imgContentType'])!.value,
      img: this.editForm.get(['img'])!.value,
      articuloId: this.editForm.get(['articuloId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IColores>>): void {
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

  trackById(index: number, item: IArticulo): any {
    return item.id;
  }
}
