import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementsParFormationComponent } from './paiements-par-formation.component';

describe('PaiementsParFormationComponent', () => {
  let component: PaiementsParFormationComponent;
  let fixture: ComponentFixture<PaiementsParFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementsParFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementsParFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
