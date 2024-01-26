import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BishopWhiteComponent } from './bishop-white.component';

describe('BishopWhiteComponent', () => {
  let component: BishopWhiteComponent;
  let fixture: ComponentFixture<BishopWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BishopWhiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BishopWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
