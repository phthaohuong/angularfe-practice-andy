import { Component, OnInit, ViewChild } from "@angular/core";
import { SeatListComponent } from "../seat-list/seat-list.component";

@Component({
  selector: "app-edit-seat",
  templateUrl: "./edit-seat.component.html",
  styleUrls: ["./edit-seat.component.scss"],
})
export class EditSeatComponent implements OnInit {
  @ViewChild(SeatListComponent) SeatListComp;

  constructor() {}

  addSeat(...value: any) {
    let newSeat = {
      SoGhe: value[0],
      TenGhe: value[1],
      Gia: value[2],
      TrangThai: null,
    };
    if (value[3] == "false") {
      newSeat.TrangThai = false;
    } else if (value[3] == "true") {
      newSeat.TrangThai = true;
    }
    this.SeatListComp.addNewSeat(newSeat);
  }

  ngOnInit(): void {}
}
