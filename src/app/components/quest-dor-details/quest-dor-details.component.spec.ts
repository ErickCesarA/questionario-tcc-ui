import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestDorDetailsComponent } from './quest-dor-details.component';

describe('QuestDorDetailsComponent', () => {
  let component: QuestDorDetailsComponent;
  let fixture: ComponentFixture<QuestDorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestDorDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestDorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
