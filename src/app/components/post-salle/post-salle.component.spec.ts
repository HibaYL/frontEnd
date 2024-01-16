import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSalleComponent } from './post-salle.component';

describe('PostSalleComponent', () => {
  let component: PostSalleComponent;
  let fixture: ComponentFixture<PostSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostSalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
