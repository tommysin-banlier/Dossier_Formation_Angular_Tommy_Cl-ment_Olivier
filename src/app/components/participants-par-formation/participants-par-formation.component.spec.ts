import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsParFormationComponent } from './participants-par-formation.component';

describe('ParticipantsParFormationComponent', () => {
  let component: ParticipantsParFormationComponent;
  let fixture: ComponentFixture<ParticipantsParFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsParFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantsParFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
