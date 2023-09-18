import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { DadosService } from "../shared/report-data.service";
import { Observable } from "rxjs";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatButtonModule } from "@angular/material/button";

class PeriodicElement {
  inspectionNumber: string = "";
  proponentCpfCnpj: string = "";
  proponentName: string = "";
  postalCode: string = "";
  opinion: string = "";
  addressComplement: string = "";
  analystObservation: string = "";
  reportPath: string = "";
  reportValidationDate: Date = new Date();
  reportReturnDate: Date = new Date();
}

class FilterData {
  dataInicio: Date = new Date();
  dataFim: Date = new Date();
  idRelatorio: string = "";
  postalCode: string = "";
  cpfCnpj: string = "";
  initial: boolean = false;
}

@Component({
  selector: "app-report-filters",
  templateUrl: "./report-filters.component.html",
  styleUrls: ["./report-filters.component.css"],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  standalone: true,
})
export class ReportFiltersComponent {
  filterData: FilterData = new FilterData();

  dataService: DadosService;
  constructor(dadosService: DadosService) {
    this.dataService = dadosService;
  }

  aplicarFiltros() {
    this.filterData.initial = false;
    console.log(this.filterData);
    const filteredData: Observable<PeriodicElement[]> =
      this.dataService.getDadosFiltrados(this.filterData);
    console.log("ElementsFiltered: " + filteredData);
    filteredData.subscribe((elements: PeriodicElement[]) => {
      console.log("ElementsFiltered: " + elements);

      // Atualize o dataSource do mat-accordion com os dados filtrados
      this.dataService.setDados(elements);
    });
  }

  limpaFiltros() {
    this.filterData.initial = true;
    this.filterData.cpfCnpj = "";
    this.filterData.idRelatorio = "";
    this.filterData.postalCode = "";
    console.log(this.filterData);
    const filteredData: Observable<PeriodicElement[]> =
      this.dataService.getDadosFiltrados(this.filterData);
    console.log("ElementsFiltered: " + filteredData);
    filteredData.subscribe((elements: PeriodicElement[]) => {
      console.log("ElementsFiltered: " + elements);

      // Atualize o dataSource do mat-accordion com os dados filtrados
      this.dataService.setDados(elements);
    });
  }
}
