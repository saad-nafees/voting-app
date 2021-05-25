import { CityBResultComponent } from './cityB-result/cityB-result.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityBComponent } from './city-B.component';
import { CityBService } from './city-b.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CityBComponent },
      { path: 'result', component: CityBResultComponent },
    ]),
  ],
  providers: [CityBService],
  declarations: [CityBComponent, CityBResultComponent],
})
export class CityBModule {}
