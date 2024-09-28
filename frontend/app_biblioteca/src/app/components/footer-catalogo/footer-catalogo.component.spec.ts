import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCatalogoComponent } from './footer-catalogo.component';

describe('FooterCatalogoComponent', () => {
  let component: FooterCatalogoComponent;
  let fixture: ComponentFixture<FooterCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
