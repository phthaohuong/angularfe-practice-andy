import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-btdata-binding",
  templateUrl: "./btdata-binding.component.html",
  styleUrls: ["./btdata-binding.component.scss"],
})
export class BTDataBindingComponent implements OnInit {
  user: any = {
    email: "",
    name: "",
  };

  constructor() {}

  ngOnInit(): void {}
  submitEmail(inputEmail) {
    this.user.email = inputEmail.value;
  }
}
