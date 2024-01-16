import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllEquipementComponent } from './get-all-equipement.component';

describe('GetAllEquipementComponent', () => {
  let component: GetAllEquipementComponent;
  let fixture: ComponentFixture<GetAllEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllEquipementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
