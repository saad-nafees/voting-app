import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityAComponent } from './city-A.component';
import { CityAService } from './city-a.service';
import { FormsModule } from '@angular/forms';
import { CityAResultComponent } from './cityA-result/cityA-result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CityAComponent },
      { path: 'result', component: CityAResultComponent },
    ]),
  ],
  declarations: [CityAResultComponent, CityAComponent],
  providers: [CityAService],
})
export class CityAModule {}
