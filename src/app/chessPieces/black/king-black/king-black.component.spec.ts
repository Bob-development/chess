import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingBlackComponent } from './king-black.component';

describe('KingBlackComponent', () => {
  let component: KingBlackComponent;
  let fixture: ComponentFixture<KingBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KingBlackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KingBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
