import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaxEditPage } from './tax-edit.page';

describe('TaxEditPage', () => {
  let component: TaxEditPage;
  let fixture: ComponentFixture<TaxEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaxEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
