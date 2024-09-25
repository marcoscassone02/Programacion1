import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCarritoComponent } from './nav-carrito.component';

describe('NavCarritoComponent', () => {
  let component: NavCarritoComponent;
  let fixture: ComponentFixture<NavCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavCarritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
