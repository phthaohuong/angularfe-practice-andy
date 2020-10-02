import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BTDataBindingComponent } from "./btdata-binding/btdata-binding.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [BTDataBindingComponent],
  imports: [CommonModule, FormsModule],
  exports: [BTDataBindingComponent],
})
export class BTDataBindingModule {}
