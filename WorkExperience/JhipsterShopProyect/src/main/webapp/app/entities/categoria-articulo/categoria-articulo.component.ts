import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiParseLinks, JhiDataUtils } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ICategoriaArticulo } from 'app/shared/model/categoria-articulo.model';

import { ITEMS_PER_PAGE } from 'app/shared/constants/pagination.constants';
import { CategoriaArticuloService } from './categoria-articulo.service';
import { CategoriaArticuloDeleteDialogComponent } from './categoria-articulo-delete-dialog.component';

@Component({
  selector: 'jhi-categoria-articulo',
  templateUrl: './categoria-articulo.component.html',
})
export class CategoriaArticuloComponent implements OnInit, OnDestroy {
  categoriaArticulos: ICategoriaArticulo[];
  eventSubscriber?: Subscription;
  itemsPerPage: number;
  links: any;
  page: number;
  predicate: string;
  ascending: boolean;


  


  constructor(
    protected categoriaArticuloService: CategoriaArticuloService,
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal,
    protected parseLinks: JhiParseLinks
  ) {
    this.categoriaArticulos = [];
    this.itemsPerPage = ITEMS_PER_PAGE;
    this.page = 0;
    this.links = {
      last: 0,
    };
    this.predicate = 'id';
    this.ascending = true;
  }

  loadAll(): void {
    this.categoriaArticuloService
      .query({
        page: this.page,
        size: this.itemsPerPage,
        sort: this.sort()
      })
      .subscribe((res: HttpResponse<ICategoriaArticulo[]>) => this.paginateCategoriaArticulos(res.body, res.headers));
  }

  reset(): void {
    this.page = 0;
    this.categoriaArticulos = [];
    this.loadAll();
  }

  loadPage(page: number): void {
    this.page = page;
    this.loadAll();
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInCategoriaArticulos();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: ICategoriaArticulo): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType = '', base64String: string): void {
    return this.dataUtils.openFile(contentType, base64String);
  }

  registerChangeInCategoriaArticulos(): void {
    this.eventSubscriber = this.eventManager.subscribe('categoriaArticuloListModification', () => this.reset());
  }

  delete(categoriaArticulo: ICategoriaArticulo): void {
    const modalRef = this.modalService.open(CategoriaArticuloDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.categoriaArticulo = categoriaArticulo;
  }

  sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  protected paginateCategoriaArticulos(data: ICategoriaArticulo[] | null, headers: HttpHeaders): void {
    const headersLink = headers.get('link');
    this.links = this.parseLinks.parse(headersLink ? headersLink : '');
    if (data) {
      for (let i = 0; i < data.length; i++) {
        this.categoriaArticulos.push(data[i]);
      }
    }
  }

  // Buscar
  buscar(): void{

  }
}
