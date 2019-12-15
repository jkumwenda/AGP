import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TypeService } from "src/app/shared/services/type.service";
import { Type } from "src/app/shared/interfaces/type";

@Component({
  selector: "app-types",
  templateUrl: "./types.component.html",
  styleUrls: ["./types.component.css"]
})
export class TypesComponent implements OnInit {
  public moduleTitle: string = "Course Type";
  public types: Type[];

  constructor(private router: Router, private typeService: TypeService) {}

  getTypes() {
    this.typeService.getTypes().then(
      (result: Type[]) => (this.types = result),
      error => console.log(error)
    );
  }

  deleteType(typeId) {
    this.typeService.deleteType(typeId).then(
      result => {
        this.router.navigate(["manage/types"]);
        this.getTypes();
      },
      error => console.log(error)
    );
  }

  editType(typeId) {
    this.router.navigate(["manage/edit-type", typeId]);
  }
  ngOnInit() {
    this.getTypes();
  }
}
