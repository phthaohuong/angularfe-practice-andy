import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directives-demo",
  templateUrl: "./directives-demo.component.html",
  styleUrls: ["./directives-demo.component.scss"],
})
export class DirectivesDemoComponent implements OnInit {
  status: boolean = false;

  isLogin: boolean = false;
  notifyLogin: string = "";

  color: string = "red";

  productArr: Array<any> = [
    {
      id: 1,
      name: "Pen",
      price: 5000,
      desc: "Pen is good",
    },
    {
      id: 2,
      name: "Apple",
      price: 5000,
      desc: "Apple is good",
    },
    {
      id: 3,
      name: "Durian",
      price: 6000,
      desc: "Durian is welldone",
    },
  ];

  user: any = {
    id: 1,
    img: "https://picsum.photos/200",
    name: "Andy",
    desc: "Lorem16",
  };
  constructor() {}

  ngOnInit(): void {}

  ShowDetail() {
    this.status = !this.status;
  }

  signOut() {
    this.isLogin = false;
    this.notifyLogin = "Success";
  }

  signIn(txtEmail: string, txtPassword: string) {
    if (txtEmail === "andy@gmail.com" && txtPassword === "123") {
      this.isLogin = true;
    } else {
      this.isLogin = false;
      this.notifyLogin = "Wrong Password or Username";
    }
  }

  changeColor(colorSelected: string) {
    this.color = colorSelected;
  }

  addNewItem(id, name, price, desc) {
    this.productArr.push({ id: id, name: name, price: price, desc: desc });
  }
}
