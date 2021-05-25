import { AppDataService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.css'],
})
export class ListCandidatesComponent implements OnInit {
  candidateData: object;

  name: string;
  city: string;
  countryPosition: string;
  cityPosition: string;

  modal = false;

  constructor(public appData: AppDataService) {
    this.candidateData = appData.candidates;
  }

  ngOnInit() {}

  showModal() {
    this.modal = true;
  }

  hideModal() {
    this.modal = false;
  }

  deleteCandidate(indexofelement) {
    this.appData.candidates.splice(indexofelement, 1);
  }

  editCandidate(indexofelement) {
    this.candidateData[indexofelement].edit = true;
  }

  saveCandidate(indexofelement) {
    this.appData.candidates[indexofelement] =
      this.candidateData[indexofelement];

    this.candidateData[indexofelement].edit = false;
  }

  addCandidate() {
    this.appData.candidates.push({
      name: this.name,
      city: this.city === '' ? 'N/A' : this.city,
      countryPosition:
        this.countryPosition === '' ? 'N/A' : this.countryPosition,
      cityPosition: this.cityPosition === '' ? 'N/A' : this.cityPosition,
      edit: false,
    });

    this.name = '';
    this.city = '';
    this.countryPosition = '';
    this.cityPosition = '';

    this.hideModal();
  }
}
