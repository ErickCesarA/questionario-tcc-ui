import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestCafeleiaComponent } from './questCafeleia.component';

describe('QuestCafeleiaComponent', () => {
  let component: QuestCafeleiaComponent;
  let fixture: ComponentFixture<QuestCafeleiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestCafeleiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestCafeleiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
