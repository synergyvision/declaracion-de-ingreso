import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripsCreatePage } from './trips-create.page';

describe('TripsCreatePage', () => {
  let component: TripsCreatePage;
  let fixture: ComponentFixture<TripsCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TripsCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
