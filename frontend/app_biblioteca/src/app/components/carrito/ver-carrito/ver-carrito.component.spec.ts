import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCarritoComponent } from './ver-carrito.component';

describe('VerCarritoComponent', () => {
  let component: VerCarritoComponent;
  let fixture: ComponentFixture<VerCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerCarritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
