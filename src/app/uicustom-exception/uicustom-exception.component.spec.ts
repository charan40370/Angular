import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UICustomExceptionComponent } from './uicustom-exception.component';

describe('UICustomExceptionComponent', () => {
  let component: UICustomExceptionComponent;
  let fixture: ComponentFixture<UICustomExceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UICustomExceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UICustomExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
