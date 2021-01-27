import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IInfo } from 'app/shared/model/info.model';
import { InfoService } from './info.service';

@Component({
  templateUrl: './info-delete-dialog.component.html',
})
export class InfoDeleteDialogComponent {
  info?: IInfo;

  constructor(protected infoService: InfoService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.infoService.delete(id).subscribe(() => {
      this.eventManager.broadcast('infoListModification');
      this.activeModal.close();
    });
  }
}
