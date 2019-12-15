import { Component, OnInit } from "@angular/core";
import { TypeService } from "src/app/shared/services/type.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-type",
  templateUrl: "./add-type.component.html",
  styleUrls: ["./add-type.component.css"]
})
export class AddTypeComponent implements OnInit {
  public moduleTitle: string = "Add Course Type";
  public typeForm: FormGroup;
  private typeData: any;

  constructor(
    private typeService: TypeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  addType() {
    const data = this.typeForm.value;
    this.typeData = {
      type: data.type
    };

    this.typeService.addType(this.typeData).then(
      result => this.router.navigate(["manage/types"]),
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.typeForm = this.formBuilder.group({
      type: ["", Validators.compose([Validators.required])]
    });
  }
}
