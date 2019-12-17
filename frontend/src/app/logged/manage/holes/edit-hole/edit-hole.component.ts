import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Hole } from "src/app/shared/interfaces/hole";
import { HoleService } from "src/app/shared/services/hole.service";

@Component({
  selector: "app-edit-hole",
  templateUrl: "./edit-hole.component.html",
  styleUrls: ["./edit-hole.component.css"]
})
export class EditHoleComponent implements OnInit {
  public moduleTitle = "Edit Hole";
  public holeForm: FormGroup;
  private holeData: any;
  public holeId: any;
  public hole: Hole;

  constructor(
    private formBuilder: FormBuilder,
    private holeService: HoleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.holeId = activatedRoute.snapshot.params["id"];
    this.initializeHoleForm();
  }

  initializeHoleForm() {
    if (this.hole == null) {
      this.hole = new Hole();
      this.hole.hole = null;
    }
    this.holeForm = this.formBuilder.group({
      hole: [this.hole.hole, Validators.compose([Validators.required])]
    });
  }

  getHole(holeId) {
    this.holeService.getHole(holeId).then(
      (result: Hole) => {
        this.hole = result;
        this.initializeHoleForm();
      },
      error => {}
    );
  }

  editHole() {
    const data = this.holeForm.value;
    this.holeData = {
      hole: data.hole
    };

    this.holeService.editHole(this.holeId, this.holeData).then(
      result => {
        this.router.navigate(["/manage/holes/"]);
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.getHole(this.holeId);
  }
}
