import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SiteTestModule } from '../../../test.module';
import { InfoDetailComponent } from 'app/entities/info/info-detail.component';
import { Info } from 'app/shared/model/info.model';

describe('Component Tests', () => {
  describe('Info Management Detail Component', () => {
    let comp: InfoDetailComponent;
    let fixture: ComponentFixture<InfoDetailComponent>;
    const route = ({ data: of({ info: new Info(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SiteTestModule],
        declarations: [InfoDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(InfoDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(InfoDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load info on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.info).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
