import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IColores } from 'app/shared/model/colores.model';
import { ColoresService } from './colores.service';

@Component({
  templateUrl: './colores-delete-dialog.component.html',
})
export class ColoresDeleteDialogComponent {
  colores?: IColores;

  constructor(protected coloresService: ColoresService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.coloresService.delete(id).subscribe(() => {
      this.eventManager.broadcast('coloresListModification');
      this.activeModal.close();
    });
  }
}
