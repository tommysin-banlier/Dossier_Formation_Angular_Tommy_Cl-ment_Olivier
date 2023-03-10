import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteCommercialComponent } from './compte-commercial.component';

describe('CompteCommercialComponent', () => {
  let component: CompteCommercialComponent;
  let fixture: ComponentFixture<CompteCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteCommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
