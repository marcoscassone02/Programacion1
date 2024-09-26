import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosBibliotecarioComponent } from './prestamos-bibliotecario.component';

describe('PrestamosBibliotecarioComponent', () => {
  let component: PrestamosBibliotecarioComponent;
  let fixture: ComponentFixture<PrestamosBibliotecarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrestamosBibliotecarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestamosBibliotecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
