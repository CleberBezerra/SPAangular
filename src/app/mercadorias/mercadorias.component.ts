import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valorInicial: number = 10;
}
