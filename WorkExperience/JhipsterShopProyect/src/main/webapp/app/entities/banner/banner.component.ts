import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiDataUtils } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IBanner } from 'app/shared/model/banner.model';
import { BannerService } from './banner.service';
import { BannerDeleteDialogComponent } from './banner-delete-dialog.component';

@Component({
  selector: 'jhi-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent implements OnInit, OnDestroy {
  banners?: IBanner[];
  eventSubscriber?: Subscription;

  constructor(
    protected bannerService: BannerService,
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.bannerService.query().subscribe((res: HttpResponse<IBanner[]>) => (this.banners = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInBanners();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IBanner): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType = '', base64String: string): void {
    return this.dataUtils.openFile(contentType, base64String);
  }

  registerChangeInBanners(): void {
    this.eventSubscriber = this.eventManager.subscribe('bannerListModification', () => this.loadAll());
  }

  delete(banner: IBanner): void {
    const modalRef = this.modalService.open(BannerDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.banner = banner;
  }
}
