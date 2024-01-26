import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnWhiteComponent } from './pawn-white.component';

describe('PawnWhiteComponent', () => {
  let component: PawnWhiteComponent;
  let fixture: ComponentFixture<PawnWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PawnWhiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PawnWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
