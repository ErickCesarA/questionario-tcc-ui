import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestRespostaComponent } from './components/quest-resposta/quest-resposta.component';
import { QuestComponent } from './components/quest/quest.component';


const routes: Routes = [
  { path: '', component: QuestComponent },
  { path: 'respostas', component: QuestRespostaComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
