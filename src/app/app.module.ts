import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuestComponent } from './components/quest/quest.component';
import { QuestPessoalComponent } from './components/questPessoal/questPessoal.component';
import { QuestDorComponent } from './components/questDor/questDor.component';
import { QuestCafeleiaComponent } from './components/questCafeleia/questCafeleia.component';
import { QuestRespostaComponent } from './components/quest-resposta/quest-resposta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestComponent,
    QuestPessoalComponent,
    QuestDorComponent,
    QuestCafeleiaComponent,
    QuestRespostaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
