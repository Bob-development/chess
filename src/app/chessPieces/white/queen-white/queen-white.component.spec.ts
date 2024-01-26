import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueenWhiteComponent } from './queen-white.component';

describe('QueenWhiteComponent', () => {
  let component: QueenWhiteComponent;
  let fixture: ComponentFixture<QueenWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueenWhiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueenWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
