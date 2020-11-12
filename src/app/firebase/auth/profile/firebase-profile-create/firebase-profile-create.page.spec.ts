import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirebaseProfileCreatePage } from './firebase-profile-create.page';

describe('FirebaseProfileCreatePage', () => {
  let component: FirebaseProfileCreatePage;
  let fixture: ComponentFixture<FirebaseProfileCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseProfileCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirebaseProfileCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
