import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueenBlackComponent } from './queen-black.component';

describe('QueenBlackComponent', () => {
  let component: QueenBlackComponent;
  let fixture: ComponentFixture<QueenBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueenBlackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueenBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
