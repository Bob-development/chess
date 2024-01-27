import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BishopBlackComponent } from './bishop-black.component';

describe('BishopBlackComponent', () => {
  let component: BishopBlackComponent;
  let fixture: ComponentFixture<BishopBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BishopBlackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BishopBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
