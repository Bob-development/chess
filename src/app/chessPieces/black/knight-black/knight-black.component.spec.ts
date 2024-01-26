import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightBlackComponent } from './knight-black.component';

describe('KnightBlackComponent', () => {
  let component: KnightBlackComponent;
  let fixture: ComponentFixture<KnightBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KnightBlackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnightBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
