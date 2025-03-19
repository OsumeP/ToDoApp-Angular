import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoBtnComponent } from './create-todo-btn.component';

describe('CreateTodoBtnComponent', () => {
  let component: CreateTodoBtnComponent;
  let fixture: ComponentFixture<CreateTodoBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTodoBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTodoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
