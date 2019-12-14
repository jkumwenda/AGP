import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GenderService } from "src/app/shared/services/gender.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Gender } from 'src/app/shared/interfaces/gender';
import { Hole } from 'src/app/shared/interfaces/hole';
import { HoleService } from 'src/app/shared/services/hole.service';

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
    this.holeId = activatedRoute.snapshot.params['id'];
    this.initializeGenderForm();
  }

  initializeGenderForm() {
    if (this.hole == null) {
      this.hole = new Hole();
      this.hole.hole = null;
    }
    this.holeForm = this.formBuilder.group({
      hole: [this.hole.hole, Validators.compose([Validators.required])],
    });
  }

  getHole(holeId) {
    this.holeService.getHole(holeId).then(
      (result:Hole) => {
      this.hole = result;
      this.initializeGenderForm();
    }, (error) => {
    });
  }

  ngOnInit() {
    this.getHole(this.holeId)
  }
}
