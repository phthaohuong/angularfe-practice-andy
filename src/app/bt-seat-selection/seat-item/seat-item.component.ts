import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-seat-item",
  templateUrl: "./seat-item.component.html",
  styleUrls: ["./seat-item.component.scss"],
})
export class SeatItemComponent implements OnInit {
  @Input() SeatItem;
  @Output() seatSelectedEvent = new EventEmitter();

  // initialSeatStatus
  seatStatus: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  chooseNewSeat() {
    if (this.seatStatus) {
      this.seatStatus = false;
    } else {
      this.seatStatus = true;
    }
    this.seatSelectedEvent.emit(this.seatStatus);
  }
}
