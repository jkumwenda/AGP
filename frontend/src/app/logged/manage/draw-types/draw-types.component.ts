import { Component, OnInit } from '@angular/core';
import { DrawType } from '../../../shared/interfaces/draw-type';
import { Router } from '@angular/router';
import { DrawTypeService } from '../../../shared/services/draw-type.service';

@Component({
  selector: 'app-draw-types',
  templateUrl: './draw-types.component.html',
  styleUrls: ['./draw-types.component.css']
})
export class DrawTypesComponent implements OnInit {
  moduleTitle = 'Draw Type';
  public drawTypes: DrawType[];

  constructor(
    private drawTypeService: DrawTypeService,
    private router: Router,
  ) { }

  getDrawTypes() {
    this.drawTypeService.getDrawTypes().then((result) => {
      this.drawTypes = result as DrawType[];
    }, (error) => {
    });
  }

  checkIfEmpty(){
    return Array.isArray(this.drawTypes) && this.drawTypes.length
  }

  editDrawType(drawTypeId) {
    this.router.navigate(['/manage/edit-draw-type', drawTypeId]);
  }

  deleteDrawType(drawTypeId) {
    this.drawTypeService.deleteDrawType(drawTypeId).then((result) => {
      this.getDrawTypes();
    }, (error) => {
    });
  }

  ngOnInit() {
    this.getDrawTypes();
  }
}
