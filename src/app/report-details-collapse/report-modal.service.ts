import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReportDetailsComponent } from '../report-details/report-details.component';

@Injectable({
  providedIn: 'root',
})
export class ReportModalService {
  constructor(private dialog: MatDialog) {}

  openModal(item: any): void {
    this.dialog.open(ReportDetailsComponent, {
      width: '1200px', // Defina o tamanho do modal de acordo com suas necessidades
      data: item, // Passe os dados do item para o modal
    });
  }
}
