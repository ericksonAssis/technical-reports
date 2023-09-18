import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
@Component({
  selector: "app-report-header",
  templateUrl: "./report-header.component.html",
  styleUrls: ["./report-header.component.css"],
  imports: [
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  standalone: true,
})
export class ReportHeaderComponent {
  expanded: boolean;
  constructor() {
    this.expanded = false;
  }
}
