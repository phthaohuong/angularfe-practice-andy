import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
  newsType: string = "promotion";
  constructor() {}

  ngOnInit(): void {}

  chooseNewsType(type) {
    this.newsType = type;
  }
}
