import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoDetallesComponent } from './prestamo-detalles.component';

describe('PrestamoDetallesComponent', () => {
  let component: PrestamoDetallesComponent;
  let fixture: ComponentFixture<PrestamoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrestamoDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestamoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
