import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BtDirectivesComponent } from "./bt-directives/bt-directives.component";

@NgModule({
  declarations: [BtDirectivesComponent],
  imports: [CommonModule],
  exports: [BtDirectivesComponent],
})
export class BtDirectivesModule {}
