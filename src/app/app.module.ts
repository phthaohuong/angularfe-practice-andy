import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DataBindingDemoModule } from "./data-binding-demo/data-binding-demo.module";
import { BTDataBindingModule } from "./btdata-binding/btdata-binding.module";
import { DirectivesDemoModule } from "./directives-demo/directives-demo.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DataBindingDemoModule,
    BTDataBindingModule,
    DirectivesDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
