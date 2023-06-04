import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuestComponent } from './components/quest/quest.component';
import { QuestPessoalComponent } from './components/quest-pessoal/quest-pessoal.component';
import { QuestDorComponent } from './components/quest-dor/quest-dor.component';
import { QuestCafeleiaComponent } from './components/quest-cafeleia/quest-cafeleia.component';
import { QuestRespostaComponent } from './components/quest-resposta/quest-resposta.component';
import { QuestSucessComponent } from './components/quest-sucess/quest-sucess.component';
import { QuestDetailsComponent } from './components/quest-details/quest-details.component';
import { QuestPessolDetailsComponent } from './components/quest-pessol-details/quest-pessol-details.component';
import { QuestDorDetailsComponent } from './components/quest-dor-details/quest-dor-details.component';
import { QuestCafeleiaDetailsComponent } from './components/quest-cafeleia-details/quest-cafeleia-details.component';
import { EventEmitterService } from './services/event-emitter.service';

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
    QuestDetailsComponent,
    QuestPessolDetailsComponent,
    QuestDorDetailsComponent,
    QuestCafeleiaDetailsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
