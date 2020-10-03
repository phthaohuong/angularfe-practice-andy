import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-upcoming",
  templateUrl: "./upcoming.component.html",
  styleUrls: ["./upcoming.component.scss"],
})
export class UpcomingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  slides = [
    {
      TenPhim: "The Walking Dead",
      HinhAnh: "../../../assets/img/ferdinand.jpg",
    },
    { TenPhim: "Ferdinand", HinhAnh: "../../../assets/img/ferdinand.jpg" },
    {
      TenPhim: "Ngắm Pháo Hoa",
      HinhAnh:
        "../../../assets/img/phao-hoa-nen-ngam-tu-duoi-hay-ben-canh-15088436147700.jpg",
    },
    {
      TenPhim: "Nhóc Ma Siêu Quậy",
      HinhAnh:
        "../../../assets/img/nhoc-ma-sieu-quay-the-little-vampire-3d-15090331183157.jpg",
    },
    {
      TenPhim: "Trải nghiệm điểm chết",
      HinhAnh:
        "../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg",
    },
    {
      TenPhim: "The Walking Dead",
      HinhAnh: "../../../assets/img/ferdinand.jpg",
    },
    { TenPhim: "Ferdinand", HinhAnh: "../../../assets/img/ferdinand.jpg" },
    {
      TenPhim: "Ngắm Pháo Hoa",
      HinhAnh:
        "../../../assets/img/phao-hoa-nen-ngam-tu-duoi-hay-ben-canh-15088436147700.jpg",
    },
    {
      TenPhim: "Nhóc Ma Siêu Quậy",
      HinhAnh:
        "../../../assets/img/nhoc-ma-sieu-quay-the-little-vampire-3d-15090331183157.jpg",
    },
    {
      TenPhim: "Trải nghiệm điểm chết",
      HinhAnh:
        "../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg",
    },
  ];

  slideConfig = { slidesToShow: 4, slidesToScroll: 1 };

  slickInit(e) {
    console.log("slick initialized");
  }

  breakpoint(e) {
    console.log("breakpoint");
  }

  afterChange(e) {
    console.log("afterChange");
  }

  beforeChange(e) {
    console.log("beforeChange");
  }
}
