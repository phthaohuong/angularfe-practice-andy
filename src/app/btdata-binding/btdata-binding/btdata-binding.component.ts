import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-btdata-binding",
  templateUrl: "./btdata-binding.component.html",
  styleUrls: ["./btdata-binding.component.scss"],
})
export class BTDataBindingComponent implements OnInit {
  user: any = {
    email: "Enter Your Email",
    name: "Enter Your Name",
  };

  constructor() {}

  ngOnInit(): void {}
  submitEmail(inputEmail) {
    this.user.email = inputEmail.value;
  }
}
