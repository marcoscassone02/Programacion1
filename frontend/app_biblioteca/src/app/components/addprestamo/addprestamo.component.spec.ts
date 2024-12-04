import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprestamoComponent } from './addprestamo.component';

describe('AddprestamoComponent', () => {
  let component: AddprestamoComponent;
  let fixture: ComponentFixture<AddprestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddprestamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
