import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReportGridComponent } from "./report-grid/report-grid.component";
import { ReportDetailsComponent } from "./report-details/report-details.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ReportDetailsCollapseComponent } from "./report-details-collapse/report-details-collapse.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { HttpClientModule } from "@angular/common/http";
import { ReportHeaderComponent } from "./report-header/report-header.component";
import { ReportFiltersComponent } from "./report-filters/report-filters.component";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import localePt from "@angular/common/locales/pt"; // Importe a localização brasileira
import { registerLocaleData } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { DateFormatPipe } from "./shared/dateformat.pipe";
registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReportGridComponent,
    MatDialogModule,
    ReportDetailsComponent,
    ReportDetailsCollapseComponent,
    HttpClientModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReportHeaderComponent,
    ReportFiltersComponent,
    MatDatepickerModule,
  ],
  // Configure o MAT_DATE_LOCALE para 'pt-BR'
  providers: [
    // Configure o MAT_DATE_LOCALE para 'pt-BR'
    { provide: MAT_DATE_LOCALE, useValue: "pt-BR" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
