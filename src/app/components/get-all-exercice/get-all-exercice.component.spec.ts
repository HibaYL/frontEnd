import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllExerciceComponent } from './get-all-exercice.component';

describe('GetAllExerciceComponent', () => {
  let component: GetAllExerciceComponent;
  let fixture: ComponentFixture<GetAllExerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllExerciceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
