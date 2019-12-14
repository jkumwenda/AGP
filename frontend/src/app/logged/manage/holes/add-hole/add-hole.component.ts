import { Component, OnInit } from "@angular/core";
import { Hole } from "src/app/shared/interfaces/hole";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HoleService } from "src/app/shared/services/hole.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-hole",
  templateUrl: "./add-hole.component.html",
  styleUrls: ["./add-hole.component.css"]
})
export class AddHoleComponent implements OnInit {
  public moduleTitle = "Add Hole";
  public holeForm: FormGroup;
  private holeData: any;

  addHole() {
    const data = this.holeForm.value;
    this.holeData = {
      hole: data.hole
    };

    this.holeService.addHole(this.holeData).then(
      result => this.router.navigate(["/manage/holes"]),
      error => console.log(error)
    );
  }
  constructor(
    private formBuilder: FormBuilder,
    private holeService: HoleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.holeForm = this.formBuilder.group({
      hole: ["", Validators.compose([Validators.required])]
    });
  }
}
