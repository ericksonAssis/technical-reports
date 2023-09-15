import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DadosService } from '../shared/report-data.service';
import { Observable } from 'rxjs';

class PeriodicElement {
  inspectionNumber: string = '';
  proponentCpfCnpj: string = '';
  proponentName: string = '';
  postalCode: string = '';
  opinion: string = '';
  addressComplement: string = '';
  analystObservation: string = '';
  reportPath: string = '';
  reportValidationDate: Date = new Date();
  reportReturnDate: Date = new Date();
}

class FilterData {
  periodo: string = '';
  idRelatorio: string = '';
  postalCode: string = '';
  cpfCnpj: string = '';
}

@Component({
  selector: 'app-report-filters',
  templateUrl: './report-filters.component.html',
  styleUrls: ['./report-filters.component.css'],
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  standalone: true,
})
export class ReportFiltersComponent {
  filterData: FilterData = new FilterData();

  dataService: DadosService;
  constructor(dadosService: DadosService) {
    this.dataService = dadosService;
  }

  aplicarFiltros() {
    console.log(this.filterData);
    const filteredData: Observable<PeriodicElement[]> =
      this.dataService.getDadosFiltrados(this.filterData);
    console.log('ElementsFiltered: ' + filteredData);
    filteredData.subscribe((elements: PeriodicElement[]) => {
      console.log('ElementsFiltered: ' + elements);

      // Atualize o dataSource do mat-accordion com os dados filtrados
      this.dataService.setDados(elements);
    });
  }
}
