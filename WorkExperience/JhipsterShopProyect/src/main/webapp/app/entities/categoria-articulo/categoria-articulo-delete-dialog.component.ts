import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICategoriaArticulo } from 'app/shared/model/categoria-articulo.model';
import { CategoriaArticuloService } from './categoria-articulo.service';

@Component({
  templateUrl: './categoria-articulo-delete-dialog.component.html',
})
export class CategoriaArticuloDeleteDialogComponent {
  categoriaArticulo?: ICategoriaArticulo;

  constructor(
    protected categoriaArticuloService: CategoriaArticuloService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.categoriaArticuloService.delete(id).subscribe(() => {
      this.eventManager.broadcast('categoriaArticuloListModification');
      this.activeModal.close();
    });
  }
}
