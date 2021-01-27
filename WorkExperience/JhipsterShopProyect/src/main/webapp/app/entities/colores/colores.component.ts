import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IColores } from 'app/shared/model/colores.model';
import { ColoresService } from './colores.service';
import { ColoresDeleteDialogComponent } from './colores-delete-dialog.component';

@Component({
  selector: 'jhi-colores',
  templateUrl: './colores.component.html',
})
export class ColoresComponent implements OnInit, OnDestroy {
  colores?: IColores[];
  eventSubscriber?: Subscription;

  constructor(
    protected coloresService: ColoresService,
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.coloresService.query().subscribe((res: HttpResponse<IColores[]>) => (this.colores = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInColores();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IColores): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType = '', base64String: string): void {
    return this.dataUtils.openFile(contentType, base64String);
  }

  registerChangeInColores(): void {
    this.eventSubscriber = this.eventManager.subscribe('coloresListModification', () => this.loadAll());
  }

  delete(colores: IColores): void {
    const modalRef = this.modalService.open(ColoresDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.colores = colores;
  }
}
