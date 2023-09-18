import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { DadosService } from "../shared/report-data.service";
import {
  MatExpansionModule,
  MatExpansionPanel,
} from "@angular/material/expansion";
import { HttpClient } from "@angular/common/http";
import { DateFormatPipe } from "../shared/dateformat.pipe";

class FilterData {
  dataInicio: Date = new Date();
  dataFim: Date = new Date();
  idRelatorio: string = "";
  postalCode: string = "";
  cpfCnpj: string = "";
  initial: boolean = false;
}
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
  selector: "app-report-details-collapse",
  templateUrl: "./report-details-collapse.component.html",
  styleUrls: ["./report-details-collapse.component.css"],
  imports: [MatTableModule, CommonModule, MatExpansionModule, DateFormatPipe],
  standalone: true,
  viewProviders: [MatExpansionPanel],
})
export class ReportDetailsCollapseComponent {
  dataSource: Array<PeriodicElement>;
  panelOpenState = false;
  constructor(private dadosService: DadosService, private http: HttpClient) {
    this.dataSource = ELEMENT_DATA;
  }

  ngOnInit(): void {
    // No ngOnInit do modal, obtenha os dados do serviço de dados
    //this.dataSource = this.dadosService.getDados();
    //console.log(this.dataSource);
    const filtros: FilterData = new FilterData();
    filtros.initial = true;
    this.dadosService.getDadosFiltrados(filtros).subscribe((dados) => {
      this.dataSource = dados;
    });
    console.log(this.dataSource);
  }

  atualizaDataSource(dataSource: PeriodicElement[]) {
    this.dataSource = dataSource;
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

  downloadPDF(reportPath: string) {
    this.openPDF(reportPath);
  }

  openPDF(reportPath: string) {
    reportPath = "/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    window.open(reportPath, "_blank");
  }

  downloadFilePDF(reportPath: string) {
    // Substitua 'your_backend_url' pelo URL do seu backend e 'your_api_endpoint' pelo endpoint apropriado.
    const downloadUrl = "/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

    // Faz a chamada REST para baixar o PDF.
    this.http
      .get(downloadUrl, { responseType: "blob" })
      .subscribe((response: Blob) => {
        // Cria um objeto Blob com o conteúdo do PDF.
        const blob = new Blob([response], { type: "application/pdf" });

        // Cria uma URL temporária para o Blob.
        const url = window.URL.createObjectURL(blob);

        // Cria um elemento <a> para iniciar o download.
        const a = document.createElement("a");
        a.href = url;
        a.download = "documento.pdf"; // Nome do arquivo PDF.
        document.body.appendChild(a);
        a.click();

        // Libera a URL temporária.
        window.URL.revokeObjectURL(url);
      });
  }
}
