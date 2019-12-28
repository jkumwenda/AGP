import { Component, OnInit } from '@angular/core';
import { Format } from '../../../shared/interfaces/format';
import { Router } from '@angular/router';
import { FormatService } from '../../../shared/services/format.service';

@Component({
  selector: 'app-formats',
  templateUrl: './formats.component.html',
  styleUrls: ['./formats.component.css']
})
export class FormatsComponent implements OnInit {
  moduleTitle = 'Format';
  public formats: Format[];

  constructor(
    private formatService: FormatService,
    private router: Router,
  ) { }

  getFormats() {
    this.formatService.getFormats().then((result) => {
      this.formats = result as Format[];
    }, (error) => {
    });
  }

  checkIfEmpty(){
    return Array.isArray(this.formats) && this.formats.length
  }

  editFormat(formatId) {
    this.router.navigate(['/manage/edit-format', formatId]);
  }

  deleteFormat(formatId) {
    this.formatService.deleteFormat(formatId).then((result) => {
      this.getFormats();
    }, (error) => {
    });
  }

  ngOnInit() {
    this.getFormats();
  }
}
