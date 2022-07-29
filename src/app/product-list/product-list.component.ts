import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productos: any = [
    {
      id: 1,
      descripcion: "Computador",
      valor: 1000000
    },
    {
      id: 2,
      descripcion: "Teclado",
      valor: 30000
    }
  ];

  tittle: string = "Lista Productos";

  constructor() { }

  ngOnInit(): void {
  }

  sumar(n1: number, n2: number) {
    return n1 + n2;
  }

}
