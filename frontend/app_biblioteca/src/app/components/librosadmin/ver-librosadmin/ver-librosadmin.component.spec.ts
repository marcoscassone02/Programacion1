import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerLibrosadminComponent } from './ver-librosadmin.component';

describe('VerLibrosadminComponent', () => {
  let component: VerLibrosadminComponent;
  let fixture: ComponentFixture<VerLibrosadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerLibrosadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerLibrosadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
