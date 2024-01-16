import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSalleComponent } from './get-all-salle.component';

describe('GetAllSalleComponent', () => {
  let component: GetAllSalleComponent;
  let fixture: ComponentFixture<GetAllSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllSalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
