import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './team/team.component';
import { EventsComponent } from './events/events.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } },
  { path: 'team', component: TeamComponent, data: { text: 'Team' } },
  { path: 'events', component: EventsComponent, data: { text: 'Events' } },
  { path: 'child-view', component: ChildViewComponent, data: { text: 'Child View' } },
  { path: 'grid-view', component: GridViewComponent, data: { text: 'GridView' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true }), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
