import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalviewProctoringComponent } from './talview-proctoring/talview-proctoring.component';
import { ProctoringPlaceholderComponent } from './proctoring-placeholder/proctoring-placeholder.component';


const routes: Routes = [
  { path: '' , component: ProctoringPlaceholderComponent, pathMatch: 'full'},
  { path: 'checkcompitibility', component: TalviewProctoringComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
