import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Tournament } from "src/app/shared/interfaces/tournament";
import { Field } from "src/app/shared/interfaces/field";
import { Slot } from "src/app/shared/interfaces/slot";

@Component({
  selector: "app-tournament-detail",
  templateUrl: "./tournament-detail.component.html",
  styleUrls: ["./tournament-detail.component.css"]
})
export class TournamentDetailComponent implements OnInit {
  @Input() tournament: Tournament;
  @Output() updatedSlots = new EventEmitter<Slot[]>();
  public field: Field;

  constructor() {
    this.tournament = Tournament.initialize();
    this.tournament.field.push(new Field(""));
    this.field = new Field(null);
  }

  updateField(field) {
    this.field = field;
    this.updatedSlots.emit(this.field.slots);
  }

  ngOnChanges(): void {
    let fields = this.tournament.field;
    this.field = fields.length > 0 ? fields[0] : new Field(null);
  }

  ngOnInit() {
    console.log(this.tournament);
  }
}
