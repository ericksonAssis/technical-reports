import { Injectable } from '@angular/core';
import { PeriodicElement } from '../report-grid/report-grid.component';
import { BehaviorSubject, Observable } from 'rxjs';

class FilterData {
  periodo: string = '';
  idRelatorio: string = '';
  postalCode: string = '';
  cpfCnpj: string = '';
}

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  private dados: PeriodicElement[];

  constructor() {
    this.dados = [
      {
        inspectionNumber: 'inspectionNumber',
        proponentCpfCnpj: 'proponentCpfCnpj',
        proponentName: 'proponentName',
        postalCode: 'postalCode',
        opinion: 'opinion',
        addressComplement: 'addressComplement',
        analystObservation: 'analystObservation',
        reportPath: 'reportPath',
        reportValidationDate: new Date(),
        reportReturnDate: new Date(),
      },
      {
        inspectionNumber: 'inspectionNumber',
        proponentCpfCnpj: 'proponentCpfCnpj',
        proponentName: 'proponentName',
        postalCode: 'postalCode',
        opinion: 'opinion',
        addressComplement: 'addressComplement',
        analystObservation: 'analystObservation',
        reportPath: 'reportPath',
        reportValidationDate: new Date(),
        reportReturnDate: new Date(),
      },
    ];
  }

  setDados(dados: PeriodicElement[]) {
    this.dados = dados;
  }

  getDados(): PeriodicElement[] {
    return this.dados;
  }

  private dadosFiltradosSubject = new BehaviorSubject<PeriodicElement[]>([]);

  getDadosFiltrados(filtros: FilterData): Observable<PeriodicElement[]> {
    this.setDados(this.getDadosMockados());
    this.setDadosFiltrados(this.getDadosMockados());
    // TO passar para o get do backend filtros
    const dadosFiltrados = this.dadosFiltradosSubject.asObservable();
    return dadosFiltrados;
  }

  setDadosFiltrados(dados: PeriodicElement[]) {
    this.dadosFiltradosSubject.next(this.dados);
  }

  getDadosMockados() {
    return (this.dados = [
      {
        inspectionNumber: 'inspectionNumber',
        proponentCpfCnpj: 'proponentCpfCnpj',
        proponentName: 'proponentName',
        postalCode: 'postalCode',
        opinion: 'opinion',
        addressComplement: 'addressComplement',
        analystObservation: 'analystObservation',
        reportPath: 'reportPath',
        reportValidationDate: new Date(),
        reportReturnDate: new Date(),
      },
    ]);
  }
}
