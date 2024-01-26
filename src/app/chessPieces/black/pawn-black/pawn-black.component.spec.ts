import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnBlackComponent } from './pawn-black.component';

describe('PawnBlackComponent', () => {
  let component: PawnBlackComponent;
  let fixture: ComponentFixture<PawnBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PawnBlackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PawnBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
