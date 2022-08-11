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
  displayedColumns: string[] = ['id', 'descripcion', 'valor', 'opciones'];

  constructor() { }

  ngOnInit(): void {
  }


}
