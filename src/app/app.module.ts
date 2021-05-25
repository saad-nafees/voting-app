import { AppDataService } from './app.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListCandidatesComponent } from './list-candidates/list-candidates.component';
import { FormsModule } from '@angular/forms';
import { ListPositionsComponent } from './list-positions/list-positions.component';

@NgModule({
  declarations: [AppComponent, ListCandidatesComponent, ListPositionsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListCandidatesComponent },
      { path: 'list-candidate', component: ListCandidatesComponent },
      {
        path: 'list-position',
        component: ListPositionsComponent,
      },
      {
        path: 'country',
        loadChildren: () =>
          import('./country/country.module').then((mod) => mod.CountryModule),
      },
    ]),
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
