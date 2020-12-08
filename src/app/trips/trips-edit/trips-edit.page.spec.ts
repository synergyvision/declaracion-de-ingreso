import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripsEditPage } from './trips-edit.page';

describe('TripsEditPage', () => {
  let component: TripsEditPage;
  let fixture: ComponentFixture<TripsEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TripsEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
