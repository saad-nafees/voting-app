import { AppDataService } from '../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-positions',
  templateUrl: './list-positions.component.html',
  styleUrls: ['./list-positions.component.css'],
})
export class ListPositionsComponent implements OnInit {
  positionData: any;

  modal = false;
  type = '';
  positionName = '';
  positionStatus = '';
  constructor(public appData: AppDataService) {
    this.positionData = appData.positions;
  }

  ngOnInit() {}
  showModal(type) {
    this.type = type;
    this.modal = true;
  }

  hideModal() {
    this.modal = false;
  }
  editPosition(indexofelement, type) {
    if (type === 'country')
      this.positionData.country[indexofelement].edit = true;
    else if (type === 'city')
      this.positionData.city[indexofelement].edit = true;
  }
  savePosition(indexofelement, type) {
    if (type === 'country') {
      this.appData.positions.country[indexofelement] ===
        this.positionData.country[indexofelement];
      this.positionData.country[indexofelement].edit = false;
    } else if (type === 'city') {
      this.appData.positions.city[indexofelement] ===
        this.positionData.city[indexofelement];
      this.positionData.city[indexofelement].edit = false;
    }
  }

  deletePosition(indexofelement, type) {
    if (type === 'country')
      this.appData.positions.country.splice(indexofelement, 1);
    else if (type === 'city')
      this.appData.positions.city.splice(indexofelement, 1);
  }

  addPosition() {
    if (this.type === 'city')
      this.appData.positions.city.push({
        name: this.positionName,
        status: this.positionStatus,
        edit: false,
      });
    else if (this.type === 'country')
      this.appData.positions.country.push({
        name: this.positionName,
        status: this.positionStatus,
        edit: false,
      });

    this.positionName = '';
    this.positionStatus = '';
    this.hideModal();
  }
}
