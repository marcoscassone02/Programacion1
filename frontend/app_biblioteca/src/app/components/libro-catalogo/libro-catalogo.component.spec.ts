import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroCatalogoComponent } from './libro-catalogo.component';

describe('LibroCatalogoComponent', () => {
  let component: LibroCatalogoComponent;
  let fixture: ComponentFixture<LibroCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibroCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
