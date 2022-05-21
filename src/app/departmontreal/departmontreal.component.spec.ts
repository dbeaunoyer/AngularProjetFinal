import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmontrealComponent } from './departmontreal.component';

describe('DepartmontrealComponent', () => {
  let component: DepartmontrealComponent;
  let fixture: ComponentFixture<DepartmontrealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmontrealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmontrealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
