import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamepostComponent } from './gamepost.component';

describe('GamepostComponent', () => {
  let component: GamepostComponent;
  let fixture: ComponentFixture<GamepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamepostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
