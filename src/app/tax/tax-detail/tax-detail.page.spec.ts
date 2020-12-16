import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaxDetailPage } from './tax-detail.page';

describe('TaxDetailPage', () => {
  let component: TaxDetailPage;
  let fixture: ComponentFixture<TaxDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaxDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
