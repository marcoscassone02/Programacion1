import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoCatalogoComponent } from './resultado-catalogo.component';

describe('ResultadoCatalogoComponent', () => {
  let component: ResultadoCatalogoComponent;
  let fixture: ComponentFixture<ResultadoCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultadoCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
