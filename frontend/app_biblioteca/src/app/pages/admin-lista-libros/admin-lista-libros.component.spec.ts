import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListaLibrosComponent } from './admin-lista-libros.component';

describe('AdminListaLibrosComponent', () => {
  let component: AdminListaLibrosComponent;
  let fixture: ComponentFixture<AdminListaLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminListaLibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListaLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
