import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenGameComponent } from './chosen-game.component';

describe('ChosenGameComponent', () => {
  let component: ChosenGameComponent;
  let fixture: ComponentFixture<ChosenGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosenGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
