import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { DadosService } from "../shared/report-data.service";

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
    inspectionNumber: "",
    proponentCpfCnpj: "",
    proponentName: "",
    postalCode: "",
    opinion: "",
    addressComplement: "",
    analystObservation: "",
    reportPath: "",
    reportValidationDate: new Date(),
    reportReturnDate: new Date(),
  },
];
@Component({
  selector: "app-report-details",
  templateUrl: "./report-details.component.html",
  styleUrls: ["./report-details.component.css"],
  imports: [MatTableModule, CommonModule],
  standalone: true,
})
export class ReportDetailsComponent {
  dataSource: Array<PeriodicElement>;
  constructor(private dadosService: DadosService) {
    this.dataSource = ELEMENT_DATA;
  }

  ngOnInit(): void {
    // No ngOnInit do modal, obtenha os dados do serviço de dados
    this.dataSource = this.dadosService.getDados();
  }

  modalDisplayedColumns: string[] = [
    "inspectionNumber",
    "proponentCpfCnpj",
    "proponentName",
    "postalCode",
    "opinion",
    "addressComplement",
    "analystObservation",
    "reportPath",
    "reportValidationDate",
    "reportReturnDate",
  ];
}
