import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingWhiteComponent } from './king-white.component';

describe('KingWhiteComponent', () => {
  let component: KingWhiteComponent;
  let fixture: ComponentFixture<KingWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KingWhiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KingWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
