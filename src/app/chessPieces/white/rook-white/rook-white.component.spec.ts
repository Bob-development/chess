import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RookWhiteComponent } from './rook-white.component';

describe('RookWhiteComponent', () => {
  let component: RookWhiteComponent;
  let fixture: ComponentFixture<RookWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RookWhiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RookWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
