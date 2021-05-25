import { CityCResultComponent } from './cityC-result/cityC-result.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityCComponent } from './city-C.component';
import { FormsModule } from '@angular/forms';
import { CityCService } from './city-c.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CityCComponent },
      { path: 'result', component: CityCResultComponent },
    ]),
  ],
  declarations: [CityCComponent, CityCResultComponent],
  providers: [CityCService],
})
export class CityCModule {}
