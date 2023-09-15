import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-report-header',
  templateUrl: './report-header.component.html',
  styleUrls: ['./report-header.component.css'],
  imports: [FormsModule, MatFormFieldModule, CommonModule, MatExpansionModule],
  standalone: true,
})
export class ReportHeaderComponent {
  expanded: boolean;
  constructor() {
    this.expanded = false;
  }
}
