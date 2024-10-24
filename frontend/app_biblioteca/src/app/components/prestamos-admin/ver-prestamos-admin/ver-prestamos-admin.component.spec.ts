import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPrestamosAdminComponent } from './ver-prestamos-admin.component';

describe('VerPrestamosAdminComponent', () => {
  let component: VerPrestamosAdminComponent;
  let fixture: ComponentFixture<VerPrestamosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerPrestamosAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPrestamosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
