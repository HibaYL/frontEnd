import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEquipementComponent } from './post-equipement.component';

describe('PostEquipementComponent', () => {
  let component: PostEquipementComponent;
  let fixture: ComponentFixture<PostEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostEquipementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
