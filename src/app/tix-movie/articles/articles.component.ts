import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.scss"],
})
export class ArticlesComponent implements OnInit {
  DanhSachKhuyenMai = [
    {
      TieuDeSuKien: "Khuyến Mãi 1",
      HinhAnh:
        "https://media.vietteltelecom.vn/upload/ckfinder/images/3112.png",
    },
    {
      TieuDeSuKien: "Khuyến Mãi 2",
      HinhAnh:
        "https://topshare.s3.amazonaws.com/production/posts/pictures/000/000/145/original/kichi-kichi-khuyen-mai.jpg?1502809882",
    },
    {
      TieuDeSuKien: "Khuyến Mãi 3",
      HinhAnh:
        "http://giaydantuong365.com/uploads/user/2/khuyenmaigiay/khuyen-mai-giay-dan-tuong-dep-gia-re-cuc-soc.jpg",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

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
}
