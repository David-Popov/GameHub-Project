import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGameComponent } from './delete-game.component';

describe('DeleteGameComponent', () => {
  let component: DeleteGameComponent;
  let fixture: ComponentFixture<DeleteGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
