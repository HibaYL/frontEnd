import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllProgrammeComponent } from './get-all-programme.component';

describe('GetAllProgrammeComponent', () => {
  let component: GetAllProgrammeComponent;
  let fixture: ComponentFixture<GetAllProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllProgrammeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
