import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TypeService } from "src/app/shared/services/type.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Type } from "src/app/shared/interfaces/type";

@Component({
  selector: "app-edit-type",
  templateUrl: "./edit-type.component.html",
  styleUrls: ["./edit-type.component.css"]
})
export class EditTypeComponent implements OnInit {
  public moduleTitle: string = "Edit Type";
  public typeForm: FormGroup;
  public typeData: any;
  public type: Type;
  public typeId: any;

  constructor(
    private typeService: TypeService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.typeId = this.activatedRoute.snapshot.params["id"];
    this.initializetypeForm();
  }
  initializetypeForm() {
    if (this.type == null) {
      this.type = new Type(null);
    }

    this.typeForm = this.formBuilder.group({
      type: [this.type.type, Validators.compose([Validators.required])]
    });
  }

  getType(typeId) {
    this.typeService.getType(typeId).then(
      (result: Type) => {
        this.type = result;
        this.initializetypeForm();
      },
      error => console.log(error)
    );
  }

  editType() {
    const data  = this.typeForm.value;
    this.typeData = {
      type: data.type,
    };

    this.typeService.editType(this.typeId, this.typeData).then((result) => {
      this.router.navigate(['/manage/types/']);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.getType(this.typeId);
  }
}
