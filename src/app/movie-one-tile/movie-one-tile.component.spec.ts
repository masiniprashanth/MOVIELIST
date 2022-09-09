import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOneTileComponent } from './movie-one-tile.component';

describe('MovieOneTileComponent', () => {
  let component: MovieOneTileComponent;
  let fixture: ComponentFixture<MovieOneTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieOneTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieOneTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
