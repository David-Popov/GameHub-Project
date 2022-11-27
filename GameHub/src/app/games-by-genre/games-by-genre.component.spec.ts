import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesByGenreComponent } from './games-by-genre.component';

describe('GamesByGenreComponent', () => {
  let component: GamesByGenreComponent;
  let fixture: ComponentFixture<GamesByGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesByGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
