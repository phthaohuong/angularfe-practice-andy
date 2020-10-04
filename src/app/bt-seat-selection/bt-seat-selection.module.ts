import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SeatItemComponent } from "./seat-item/seat-item.component";
import { SeatListComponent } from "./seat-list/seat-list.component";
import { EditSeatComponent } from "./edit-seat/edit-seat.component";

@NgModule({
  declarations: [SeatItemComponent, SeatListComponent, EditSeatComponent],
  imports: [CommonModule],
  exports: [EditSeatComponent],
})
export class BtSeatSelectionModule {}
