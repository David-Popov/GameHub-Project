import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOptionsComponent } from './admin-options.component';

describe('AdminOptionsComponent', () => {
  let component: AdminOptionsComponent;
  let fixture: ComponentFixture<AdminOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
