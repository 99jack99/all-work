import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IInfo } from 'app/shared/model/info.model';
import { InfoService } from './info.service';
import { InfoDeleteDialogComponent } from './info-delete-dialog.component';

@Component({
  selector: 'jhi-info',
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit, OnDestroy {
  infos?: IInfo[];
  eventSubscriber?: Subscription;

  constructor(protected infoService: InfoService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.infoService.query().subscribe((res: HttpResponse<IInfo[]>) => (this.infos = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInInfos();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IInfo): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInInfos(): void {
    this.eventSubscriber = this.eventManager.subscribe('infoListModification', () => this.loadAll());
  }

  delete(info: IInfo): void {
    const modalRef = this.modalService.open(InfoDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.info = info;
  }
}
