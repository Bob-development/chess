import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RookBlackComponent } from './rook-black.component';

describe('RookBlackComponent', () => {
  let component: RookBlackComponent;
  let fixture: ComponentFixture<RookBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RookBlackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RookBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
