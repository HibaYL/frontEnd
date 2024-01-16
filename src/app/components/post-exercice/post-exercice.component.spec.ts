import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostExerciceComponent } from './post-exercice.component';

describe('PostExerciceComponent', () => {
  let component: PostExerciceComponent;
  let fixture: ComponentFixture<PostExerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostExerciceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
