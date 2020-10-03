import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-promotion",
  templateUrl: "./promotion.component.html",
  styleUrls: ["./promotion.component.scss"],
})
export class PromotionComponent implements OnInit {
  DanhSachDienAnh = [
    {
      TieuDeSuKien: "Marvel mua lại DC",
      HinhAnh:
        "../../../assets/img/diem-mat-dan-sao-dinh-dam-trong-bom-tan-lien-minh-cong-ly-15106519084263.jpg",
    },
    {
      TieuDeSuKien: "Ferdinand",
      HinhAnh:
        "../../../assets/img/fast-and-furious-9-co-bien-kich-moi-ngay-phat-hanh-cua-phim-doi-tu-2019-sang-2020-15263575332878.jpg",
    },
    {
      TieuDeSuKien: "Trùm Hương Cảng",
      HinhAnh:
        "../../../assets/img/nhom-losers-club-lon-dang-dan-dan-lo-dien-trong-sieu-pham-it-chapter-two-15265444875493.jpg",
    },
  ];

  slideConfig = { slidesToShow: 3, slidesToScroll: 1 };

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

  constructor() {}

  ngOnInit(): void {}
}
