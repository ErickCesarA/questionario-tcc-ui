import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestDorComponent } from './questDor.component';

describe('QuestDorComponent', () => {
  let component: QuestDorComponent;
  let fixture: ComponentFixture<QuestDorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestDorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestDorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
