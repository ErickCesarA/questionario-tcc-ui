import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestPessoalComponent } from './questPessoal.component';

describe('QuestPessoalComponent', () => {
  let component: QuestPessoalComponent;
  let fixture: ComponentFixture<QuestPessoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestPessoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
