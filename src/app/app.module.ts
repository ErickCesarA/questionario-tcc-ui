import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuestComponent } from './components/quest/quest.component';
import { QuestPessoalComponent } from './components/questPessoal/questPessoal.component';
import { QuestDorComponent } from './components/questDor/questDor.component';
import { QuestCafeleiaComponent } from './components/questCafeleia/questCafeleia.component';
import { QuestRespostaComponent } from './components/quest-resposta/quest-resposta.component';
import { QuestSucessComponent } from './components/quest-sucess/quest-sucess.component';
import { QuestDetailsComponent } from './components/quest-details/quest-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestComponent,
    QuestPessoalComponent,
    QuestDorComponent,
    QuestCafeleiaComponent,
    QuestRespostaComponent,
    QuestSucessComponent,
    QuestDetailsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
