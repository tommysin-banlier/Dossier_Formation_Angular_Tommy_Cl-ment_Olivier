import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteParticipantComponent } from './compte-participant.component';

describe('CompteParticipantComponent', () => {
  let component: CompteParticipantComponent;
  let fixture: ComponentFixture<CompteParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
