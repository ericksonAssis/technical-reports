import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportGridComponent } from './report-grid/report-grid.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReportDetailsCollapseComponent } from './report-details-collapse/report-details-collapse.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { ReportHeaderComponent } from './report-header/report-header.component';
import { ReportFiltersComponent } from './report-filters/report-filters.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
