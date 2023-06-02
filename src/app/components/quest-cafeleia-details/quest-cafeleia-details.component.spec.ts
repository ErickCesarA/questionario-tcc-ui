import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestCafeleiaDetailsComponent } from './quest-cafeleia-details.component';

describe('QuestCafeleiaDetailsComponent', () => {
  let component: QuestCafeleiaDetailsComponent;
  let fixture: ComponentFixture<QuestCafeleiaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestCafeleiaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestCafeleiaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
