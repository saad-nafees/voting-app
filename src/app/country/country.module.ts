import { CountryDataService } from './country.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { CountryResultComponent } from './country-result/country-result.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CountryComponent, CountryResultComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CountryComponent,
      },
      {
        path: 'result',
        component: CountryResultComponent,
      },
      {
        path: 'cityA',
        loadChildren: () =>
          import('./city-A/city-A.module').then((mod) => mod.CityAModule),
      },
      {
        path: 'cityB',
        loadChildren: () =>
          import('./city-B/city-B.module').then((mod) => mod.CityBModule),
      },
      {
        path: 'cityC',
        loadChildren: () =>
          import('./city-C/city-C.module').then((mod) => mod.CityCModule),
      },
    ]),
  ],
  providers: [CountryDataService],
})
export class CountryModule {}
