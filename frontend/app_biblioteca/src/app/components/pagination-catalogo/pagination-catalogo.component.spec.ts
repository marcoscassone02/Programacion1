import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationCatalogoComponent } from './pagination-catalogo.component';

describe('PaginationCatalogoComponent', () => {
  let component: PaginationCatalogoComponent;
  let fixture: ComponentFixture<PaginationCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
