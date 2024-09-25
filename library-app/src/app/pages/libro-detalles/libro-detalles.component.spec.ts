import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroDetallesComponent } from './libro-detalles.component';

describe('LibroDetallesComponent', () => {
  let component: LibroDetallesComponent;
  let fixture: ComponentFixture<LibroDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibroDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
