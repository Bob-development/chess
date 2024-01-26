import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightWhiteComponent } from './knight-white.component';

describe('KnightWhiteComponent', () => {
  let component: KnightWhiteComponent;
  let fixture: ComponentFixture<KnightWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KnightWhiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnightWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
