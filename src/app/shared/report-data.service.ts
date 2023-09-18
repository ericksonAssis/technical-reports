import { Injectable } from "@angular/core";
import { PeriodicElement } from "../report-grid/report-grid.component";
import { BehaviorSubject, Observable } from "rxjs";

class FilterData {
  dataInicio: Date = new Date();
  dataFim: Date = new Date();
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
    this.dados = this.getDadosMockados();
    if (filterData.idRelatorio.length > 0) {
      this.dados = this.filterByIdReport(filterData);
    } else if (filterData.cpfCnpj.length > 0) {
      this.dados = this.filterByCpfCnpj(filterData);
    } else if (filterData.postalCode.length > 0) {
      this.dados = this.filterByPostalCode(filterData);
    } else if (filterData.dataInicio) {
      this.dados = this.filterByPeriod(filterData);
    }
    return this.dados;
  }

  filterByPostalCode(filterData: FilterData): PeriodicElement[] {
    var elements: PeriodicElement[] = this.dados.filter((element) => {
      // Implemente a lógica de filtro aqui com base em filterData
      // Por exemplo, compare os campos de element com os critérios em filterData
      // Se o elemento corresponder aos critérios, retorne true, caso contrário, retorne false
      return filterData.postalCode
        ? element.postalCode === filterData.postalCode
        : true;
      // Adicione mais critérios de filtro conforme necessário
    });
    console.log("filterByPostalCode: " + elements);
    return elements;
  }
  filterByCpfCnpj(filterData: FilterData): PeriodicElement[] {
    var elements: PeriodicElement[] = this.dados.filter((element) => {
      // Implemente a lógica de filtro aqui com base em filterData
      // Por exemplo, compare os campos de element com os critérios em filterData
      // Se o elemento corresponder aos critérios, retorne true, caso contrário, retorne false
      return filterData.cpfCnpj
        ? element.proponentCpfCnpj === filterData.cpfCnpj
        : true;
      // Adicione mais critérios de filtro conforme necessário
    });
    console.log("filterByCpfCnpj: " + elements);
    return elements;
  }
  filterByIdReport(filterData: FilterData): PeriodicElement[] {
    var elements: PeriodicElement[] = this.dados.filter((element) => {
      // Implemente a lógica de filtro aqui com base em filterData
      // Por exemplo, compare os campos de element com os critérios em filterData
      // Se o elemento corresponder aos critérios, retorne true, caso contrário, retorne false
      return filterData.idRelatorio
        ? element.inspectionNumber === filterData.idRelatorio
        : true;
      // Adicione mais critérios de filtro conforme necessário
    });
    console.log("filterByIdReport: " + elements);
    return elements;
  }
  filterByPeriod(filterData: FilterData): PeriodicElement[] {
    const elements: PeriodicElement[] = this.dados.filter((element) => {
      // Verifique se a data de validação do relatório está dentro do período
      if (filterData.dataInicio && filterData.dataFim) {
        return (
          element.reportValidationDate >= filterData.dataInicio &&
          element.reportValidationDate <= filterData.dataFim
        );
      }

      // Se apenas a data de início for fornecida, verifique se a data é maior ou igual
      if (filterData.dataInicio) {
        return element.reportValidationDate >= filterData.dataInicio;
      }

      // Se apenas a data de fim for fornecida, verifique se a data é menor ou igual
      if (filterData.dataFim) {
        return element.reportValidationDate <= filterData.dataFim;
      }

      // Se nenhuma data for fornecida, retorne true para incluir todos os elementos
      return true;
    });

    return elements;
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

      {
        inspectionNumber: "1234",
        proponentCpfCnpj: "22222",
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
