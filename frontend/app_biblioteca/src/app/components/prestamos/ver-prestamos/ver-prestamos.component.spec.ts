import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPrestamosComponent } from './ver-prestamos.component';

describe('VerPrestamosComponent', () => {
  let component: VerPrestamosComponent;
  let fixture: ComponentFixture<VerPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerPrestamosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
