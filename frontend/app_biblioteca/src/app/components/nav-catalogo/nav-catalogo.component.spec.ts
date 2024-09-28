import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCatalogoComponent } from './nav-catalogo.component';

describe('NavCatalogoComponent', () => {
  let component: NavCatalogoComponent;
  let fixture: ComponentFixture<NavCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
