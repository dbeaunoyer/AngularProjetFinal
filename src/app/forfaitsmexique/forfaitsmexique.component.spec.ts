import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsmexiqueComponent } from './forfaitsmexique.component';

describe('ForfaitsmexiqueComponent', () => {
  let component: ForfaitsmexiqueComponent;
  let fixture: ComponentFixture<ForfaitsmexiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsmexiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitsmexiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
