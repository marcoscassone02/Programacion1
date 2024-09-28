import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonGenerosCatalogoComponent } from './boton-generos-catalogo.component';

describe('BotonGenerosCatalogoComponent', () => {
  let component: BotonGenerosCatalogoComponent;
  let fixture: ComponentFixture<BotonGenerosCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonGenerosCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonGenerosCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
