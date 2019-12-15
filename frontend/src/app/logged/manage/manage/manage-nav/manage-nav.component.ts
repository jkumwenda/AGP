import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-nav',
  templateUrl: './manage-nav.component.html',
  styleUrls: ['./manage-nav.component.css']
})
export class ManageNavComponent implements OnInit {
  moduleTitle = "Management Functions";

  constructor() { }

  ngOnInit() {
  }

}
