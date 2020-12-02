import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripsDetailPage } from './trips-detail.page';

describe('TripsDetailPage', () => {
  let component: TripsDetailPage;
  let fixture: ComponentFixture<TripsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TripsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
