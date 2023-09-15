import { Injectable } from "@angular/core";
import { PeriodicElement } from "../report-grid/report-grid.component";
import { BehaviorSubject, Observable } from "rxjs";

class FilterData {
  periodo: string = "";
  idRelatorio: string = "";
  postalCode: string = "";
  cpfCnpj: string = "";
}

@Injectable({
  providedIn: "root",
})
export class DadosService {
  private dados: PeriodicElement[];

  constructor() {
    this.dados = [
      {
        inspectionNumber: "inspectionNumber",
        proponentCpfCnpj: "proponentCpfCnpj",
        proponentName: "proponentName",
        postalCode: "postalCode",
        opinion: "opinion",
        addressComplement: "addressComplement",
        analystObservation: "analystObservation",
        reportPath: "reportPath",
        reportValidationDate: new Date(),
        reportReturnDate: new Date(),
      },
      {
        inspectionNumber: "inspectionNumber",
        proponentCpfCnpj: "proponentCpfCnpj",
        proponentName: "proponentName",
        postalCode: "postalCode",
        opinion: "opinion",
        addressComplement: "addressComplement",
        analystObservation: "analystObservation",
        reportPath: "reportPath",
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
    const dados: PeriodicElement[] = this.filtra(filtros);
    this.setDadosFiltrados(dados);
    // TO passar para o get do backend filtros
    const dadosFiltrados = this.dadosFiltradosSubject.asObservable();
    return dadosFiltrados;
  }

  setDadosFiltrados(dados: PeriodicElement[]) {
    const dadosFiltrados = dados;
    this.dadosFiltradosSubject.next(dadosFiltrados);
  }

  filtra(filterData: FilterData): PeriodicElement[] {
    return this.dados.filter((element) => {
      // Implemente a lógica de filtro aqui com base em filterData
      // Por exemplo, compare os campos de element com os critérios em filterData
      // Se o elemento corresponder aos critérios, retorne true, caso contrário, retorne false
      return filterData.postalCode ? element.postalCode : true;
      // Adicione mais critérios de filtro conforme necessário
    });
  }
  getDadosMockados() {
    return (this.dados = [
      {
        inspectionNumber: "inspectionNumber",
        proponentCpfCnpj: "proponentCpfCnpj",
        proponentName: "proponentName",
        postalCode: "postalCode",
        opinion: "opinion",
        addressComplement: "addressComplement",
        analystObservation: "analystObservation",
        reportPath: "reportPath",
        reportValidationDate: new Date(),
        reportReturnDate: new Date(),
      },
    ]);
  }
}
