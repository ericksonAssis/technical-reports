import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ReportModalService } from '../shared/report-modal.service';

import {
  MatExpansionModule,
  MatExpansionPanel,
} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { DadosService } from '../shared/report-data.service';

export interface PeriodicElement {
  inspectionNumber: string;
  proponentCpfCnpj: string;
  proponentName: string;
  postalCode: string;
  opinion: string;
  addressComplement: string;
  analystObservation: string;
  reportPath: string;
  reportValidationDate: Date;
  reportReturnDate: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    inspectionNumber: '12345',
    proponentCpfCnpj: '11.111.111.0001-11',
    proponentName: 'Proponente Teste',
    postalCode: '11111-111',
    opinion: 'Opinion Teste',
    addressComplement: 'Street Test',
    analystObservation: 'Observation',
    reportPath: '/data/bucket/a123s-5s123s-1as23-s564',
    reportValidationDate: new Date(),
    reportReturnDate: new Date(),
  },
];

@Component({
  selector: 'app-report-grid',
  templateUrl: './report-grid.component.html',
  styleUrls: ['./report-grid.component.css'],
  standalone: true,
  viewProviders: [MatExpansionPanel],
  imports: [MatTableModule, CommonModule, MatExpansionModule, FormsModule],
})
export class ReportGridComponent {
  constructor(
    private modalService: ReportModalService,
    private dadosService: DadosService
  ) {}
  openModal(item: PeriodicElement): void {
    this.modalService.openModal(item);
    console.log(item);
    this.dadosService.setDados([item]);
  }
  displayedColumns: string[] = [
    'inspectionNumber',
    'proponentCpfCnpj',
    'proponentName',
    'postalCode',
    'showDetails',
    'opinion',
    'addressComplement',
    'analystObservation',
    'reportPath',
    'reportValidationDate',
    'reportReturnDate',
  ];
  dataSource = ELEMENT_DATA;
}
