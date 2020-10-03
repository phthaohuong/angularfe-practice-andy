import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-showtimes",
  templateUrl: "./showtimes.component.html",
  styleUrls: ["./showtimes.component.scss"],
})
export class ShowtimesComponent implements OnInit {
  upcomingTab: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  showUpComingTab() {
    this.upcomingTab = true;
  }

  showNowShowingTab() {
    this.upcomingTab = false;
  }
}
