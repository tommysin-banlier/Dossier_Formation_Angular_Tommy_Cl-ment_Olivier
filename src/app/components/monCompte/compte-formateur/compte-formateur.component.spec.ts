import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteFormateurComponent } from './compte-formateur.component';

describe('CompteFormateurComponent', () => {
  let component: CompteFormateurComponent;
  let fixture: ComponentFixture<CompteFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
