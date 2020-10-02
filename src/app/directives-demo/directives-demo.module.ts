import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DirectivesDemoComponent } from "./directives-demo/directives-demo.component";

@NgModule({
  declarations: [DirectivesDemoComponent],
  imports: [CommonModule],
  exports: [DirectivesDemoComponent],
})
export class DirectivesDemoModule {}
