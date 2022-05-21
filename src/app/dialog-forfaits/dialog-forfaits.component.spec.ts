import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForfaitsComponent } from './dialog-forfaits.component';

describe('DialogForfaitsComponent', () => {
  let component: DialogForfaitsComponent;
  let fixture: ComponentFixture<DialogForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogForfaitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
