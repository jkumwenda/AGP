import { Component, OnInit } from "@angular/core";
import { Hole } from "src/app/shared/interfaces/hole";
import { HoleService } from "src/app/shared/services/hole.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-holes",
  templateUrl: "./holes.component.html",
  styleUrls: ["./holes.component.css"]
})
export class HolesComponent implements OnInit {
  public moduleTitle: string = "Holes";
  public holes: Hole[];

  constructor(private holeService: HoleService, private router: Router) {}

  deleteHole(holeId) {
    this.holeService.deleteHole(holeId).then(
      resullt => this.getHoles(),
      error => console.log(error)
    );
  }
  getHoles() {
    this.holeService.getHoles().then(
      (result: Hole[]) => (this.holes = result),
      error => {}
    );
  }

  editHole(holeId) {
    this.router.navigate(['/manage/edit-hole', holeId]);
  }
  ngOnInit() {
    this.getHoles();
  }
}
