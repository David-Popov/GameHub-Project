import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteGamesComponent } from './favourite-games.component';

describe('FavouriteGamesComponent', () => {
  let component: FavouriteGamesComponent;
  let fixture: ComponentFixture<FavouriteGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
