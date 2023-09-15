import { Injectable } from "@angular/core";
import { PeriodicElement } from "../report-grid/report-grid.component";
import { BehaviorSubject, Observable } from "rxjs";

class FilterData {
  periodo: string = "";
  idRelatorio: string = "";
  postalCode: string = "";
  cpfCnpj: string = "";
  initial: boolean = false;
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
        inspectionNumber: "1234",
        proponentCpfCnpj: "11111",
        proponentName: "proponentName",
        postalCode: "06410200",
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
    var dados: PeriodicElement[];
    if (filtros.initial) {
      dados = this.getDadosMockados();
      this.setDadosFiltrados(dados);
    } else {
      dados = this.filtra(filtros);
      this.setDadosFiltrados(dados);
    }
    // TO passar para o get do backend filtros
    const dadosFiltrados = this.dadosFiltradosSubject.asObservable();
    return dadosFiltrados;
  }

  setDadosFiltrados(dadosFiltrados: PeriodicElement[]) {
    this.dadosFiltradosSubject.next(dadosFiltrados);
  }

  filtra(filterData: FilterData): PeriodicElement[] {
    return this.dados.filter((element) => {
      // Implemente a lógica de filtro aqui com base em filterData
      // Por exemplo, compare os campos de element com os critérios em filterData
      // Se o elemento corresponder aos critérios, retorne true, caso contrário, retorne false
      return (
        (filterData.idRelatorio
          ? element.inspectionNumber === filterData.idRelatorio
          : true) &&
        (filterData.postalCode
          ? element.postalCode === filterData.postalCode
          : true) &&
        // Adicione mais critérios de filtro conforme necessário
        (filterData.cpfCnpj
          ? element.proponentCpfCnpj === filterData.cpfCnpj
          : true)
      );
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
      {
        inspectionNumber: "1234",
        proponentCpfCnpj: "11111",
        proponentName: "proponentName",
        postalCode: "06410200",
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
