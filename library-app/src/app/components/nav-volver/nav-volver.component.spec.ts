import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVolverComponent } from './nav-volver.component';

describe('NavVolverComponent', () => {
  let component: NavVolverComponent;
  let fixture: ComponentFixture<NavVolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavVolverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavVolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
