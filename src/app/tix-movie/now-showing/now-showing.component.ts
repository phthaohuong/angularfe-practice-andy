import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-now-showing",
  templateUrl: "./now-showing.component.html",
  styleUrls: ["./now-showing.component.scss"],
})
export class NowShowingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  DanhSachPhimSapChieu = [
    {
      TenPhim: "Thor: Ragnarok",
      HinhAnh: "../../../assets/img/thor-ragnarok-15088151416399.jpg",
    },
    {
      TenPhim: "Ferdinand",
      HinhAnh:
        "../../../assets/img/pokemon-to-chon-cau-pokemon-i-choose-you-15095249219579.jpg",
    },
    {
      TenPhim: "Trùm Hương Cảng",
      HinhAnh:
        "../../../assets/img/trum-huong-cang-chasing-the-dragon-15088270130890.jpg",
    },
    { TenPhim: "Ferdinand", HinhAnh: "../../../assets/img/ferdinand.jpg" },
    {
      TenPhim: "Trải nghiệm điểm chết",
      HinhAnh:
        "../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg",
    },
    {
      TenPhim: "Thor: Ragnarok",
      HinhAnh: "../../../assets/img/thor-ragnarok-15088151416399.jpg",
    },
    {
      TenPhim: "Ferdinand",
      HinhAnh:
        "../../../assets/img/pokemon-to-chon-cau-pokemon-i-choose-you-15095249219579.jpg",
    },
    {
      TenPhim: "Trùm Hương Cảng",
      HinhAnh:
        "../../../assets/img/trum-huong-cang-chasing-the-dragon-15088270130890.jpg",
    },
    { TenPhim: "Ferdinand", HinhAnh: "../../../assets/img/ferdinand.jpg" },
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
