import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestPessolDetailsComponent } from './quest-pessol-details.component';

describe('QuestPessolDetailsComponent', () => {
  let component: QuestPessolDetailsComponent;
  let fixture: ComponentFixture<QuestPessolDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestPessolDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestPessolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
