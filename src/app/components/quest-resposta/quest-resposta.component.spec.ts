import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestRespostaComponent } from './quest-resposta.component';

describe('QuestRespostaComponent', () => {
  let component: QuestRespostaComponent;
  let fixture: ComponentFixture<QuestRespostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestRespostaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestRespostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
