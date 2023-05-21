import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestSucessComponent } from './quest-sucess.component';

describe('QuestSucessComponent', () => {
  let component: QuestSucessComponent;
  let fixture: ComponentFixture<QuestSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestSucessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
