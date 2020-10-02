import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bt-directives",
  templateUrl: "./bt-directives.component.html",
  styleUrls: ["./bt-directives.component.scss"],
})
export class BtDirectivesComponent implements OnInit {
  isAddMovieOn: boolean = false;

  movieArr: Array<any> = [
    { id: 1, name: "Zues", showtimes: "7:00", theatres: "BHD", price: 70000 },
    { id: 2, name: "Low", showtimes: "7:00", theatres: "BHD", price: 70000 },
    { id: 3, name: "Fall", showtimes: "7:00", theatres: "BHD", price: 70000 },
  ];

  constructor() {}

  ngOnInit(): void {}

  showModalAddMovie() {
    this.isAddMovieOn = true;
  }

  showTableData() {
    this.isAddMovieOn = false;
  }

  AddNewMovie(id, name, showtimes, theatres, price) {
    this.movieArr.push({
      id: id,
      name: name,
      showtimes: showtimes,
      theatres: theatres,
      price: price,
    });
  }
}
