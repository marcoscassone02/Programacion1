import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLibrosComponent } from './add-libros.component';

describe('AddLibrosComponent', () => {
  let component: AddLibrosComponent;
  let fixture: ComponentFixture<AddLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
