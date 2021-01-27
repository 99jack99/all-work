import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IInfo, Info } from 'app/shared/model/info.model';
import { InfoService } from './info.service';
import { IArticulo } from 'app/shared/model/articulo.model';
import { ArticuloService } from 'app/entities/articulo/articulo.service';
import { IColores } from 'app/shared/model/colores.model';
import { ColoresService } from 'app/entities/colores/colores.service';

type SelectableEntity = IArticulo | IColores;

@Component({
  selector: 'jhi-info-update',
  templateUrl: './info-update.component.html',
})
export class InfoUpdateComponent implements OnInit {
  isSaving = false;
  articulos: IArticulo[] = [];
  colores: IColores[] = [];

  editForm = this.fb.group({
    id: [],
    cantidadStock: [null, [Validators.required]],
    talla: [null, [Validators.required]],
    articuloId: [],
    coloresId: [],
  });

  constructor(
    protected infoService: InfoService,
    protected articuloService: ArticuloService,
    protected coloresService: ColoresService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ info }) => {
      this.updateForm(info);

      this.articuloService.query().subscribe((res: HttpResponse<IArticulo[]>) => (this.articulos = res.body || []));

      this.coloresService.query().subscribe((res: HttpResponse<IColores[]>) => (this.colores = res.body || []));
    });
  }

  updateForm(info: IInfo): void {
    this.editForm.patchValue({
      id: info.id,
      cantidadStock: info.cantidadStock,
      talla: info.talla,
      articuloId: info.articuloId,
      coloresId: info.coloresId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const info = this.createFromForm();
    if (info.id !== undefined) {
      this.subscribeToSaveResponse(this.infoService.update(info));
    } else {
      this.subscribeToSaveResponse(this.infoService.create(info));
    }
  }

  private createFromForm(): IInfo {
    return {
      ...new Info(),
      id: this.editForm.get(['id'])!.value,
      cantidadStock: this.editForm.get(['cantidadStock'])!.value,
      talla: this.editForm.get(['talla'])!.value,
      articuloId: this.editForm.get(['articuloId'])!.value,
      coloresId: this.editForm.get(['coloresId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IInfo>>): void {
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

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
