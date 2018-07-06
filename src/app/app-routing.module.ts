import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnxietyComponent } from './anxiety/anxiety.component';
import { DepressionComponent } from './depression/depression.component';
import { FlowComponent } from './flow/flow.component';
import { MindfulnessComponent } from './mindfulness/mindfulness.component';
import { PersonalityComponent } from './personality/personality.component';
import { StartComponent } from './start/start.component';
import { PridefulComponent } from './prideful/prideful.component';
import { HopelessComponent } from './hopeless/hopeless.component';
import { WillingComponent } from './willing/willing.component';
import { ChatComponent } from './chat/chat.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: 'anxiety', component: AnxietyComponent },
  { path: 'depression', component: DepressionComponent },
  { path: 'flow', component: FlowComponent },
  { path: 'mindfulness', component: MindfulnessComponent },
  { path: 'personality', component: PersonalityComponent },
  { path: 'start', component: StartComponent },
  { path: 'prideful', component: PridefulComponent },
  { path: 'hopeless', component: HopelessComponent },
  { path: 'willing', component: WillingComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'game', component: GameComponent }
];


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  declarations: []
})
export class AppRoutingModule { 


}
