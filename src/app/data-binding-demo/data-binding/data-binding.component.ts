import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.scss"],
})
export class DataBindingComponent implements OnInit {
  user: any = {
    id: 1,
    name: "Andy",
    age: 16,
    img: "https://picsum.photos/200",
    desc: "Andy is a cool girl with in-depth knowledge",
  };

  constructor() {}

  ngOnInit(): void {}

  ChangeName(inputNameObject: any) {
    this.user.name = inputNameObject.value;
    console.log(this.user.name);
  }
}
