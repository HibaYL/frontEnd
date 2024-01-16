import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProgrammeComponent } from './post-programme.component';

describe('PostProgrammeComponent', () => {
  let component: PostProgrammeComponent;
  let fixture: ComponentFixture<PostProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostProgrammeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
