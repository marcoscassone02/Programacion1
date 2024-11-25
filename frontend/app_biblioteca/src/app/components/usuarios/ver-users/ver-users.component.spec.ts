import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerUsersComponent } from './ver-users.component';

describe('VerUsersComponent', () => {
  let component: VerUsersComponent;
  let fixture: ComponentFixture<VerUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
