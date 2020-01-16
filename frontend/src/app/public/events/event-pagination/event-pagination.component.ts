import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tournament} from '../../../shared/interfaces/tournament';

@Component({
  selector: 'app-event-pagination',
  templateUrl: './event-pagination.component.html',
  styleUrls: ['./event-pagination.component.css']
})
export class EventPaginationComponent implements OnInit {

  @Input() tournaments: Tournament[];
  @Output() displayPageContent = new EventEmitter<Tournament[]>();
  @Input() numberOfEventsToDisplay: number;
  public currentPage = 0;
  public numberOfPages: number[];


  constructor() { }

  getNumberOfPages(tournaments: Tournament[]) {
    const numb = Math.ceil(tournaments.length / this.numberOfEventsToDisplay);
    this.numberOfPages = Array.from(Array(numb).keys());
  }
  ngOnInit() {
    this.getNumberOfPages(this.tournaments);
    // this.filterArray(this.currentPage);
  }
  selectPage(numberOfPage: number) {
    this.currentPage = numberOfPage;
    this.filterArray(this.currentPage);

  }
  previousPage() {
    this.currentPage -= 1;
    this.filterArray(this.currentPage);

  }

  filterArray(currentIndex) {
    const startIndex = (currentIndex * this.numberOfEventsToDisplay);
    const endIndex = startIndex + this.numberOfEventsToDisplay - 1;
    const displayedTournaments = this.tournaments.filter(
      (tournament, index) => {
        return index >= startIndex && index <= endIndex;
      }
    );
    this.displayPageContent.emit(displayedTournaments);
  }

  nextPage() {
    this.currentPage += 1;
    this.filterArray(this.currentPage);

  }
}
