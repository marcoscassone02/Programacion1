import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaDetallesComponent } from './reserva-detalles.component';

describe('ReservaDetallesComponent', () => {
  let component: ReservaDetallesComponent;
  let fixture: ComponentFixture<ReservaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservaDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
