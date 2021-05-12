import { Component, OnInit } from '@angular/core';
import { mercadorias } from '../model/mercadorias';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeLista: boolean = false;

  listaMercadorias: mercadorias[] = [
    { produto: 'Arroz', codigo: 89001, preco: '7,00' },
    { produto: 'Feijão', codigo: 89002, preco: '9,00' },
    { produto: 'Farinha', codigo: 89003, preco: '4,00' },
    { produto: 'Charque', codigo: 89004, preco: '15,00' },
    { produto: 'Macarrão', codigo: 89005, preco: '6,00' },
    { produto: 'Banana', codigo: 89006, preco: '5,00' },
    { produto: 'Laranja', codigo: 89007, preco: '4,50' },
    { produto: 'Mamão', codigo: 89008, preco: '5,60' },
    { produto: 'Abacate', codigo: 89009, preco: '8,35' },
    { produto: 'Melancia', codigo: 89010, preco: '12,99' },
    { produto: 'Pera', codigo: 89011, preco: '9,00' },
    { produto: 'Creme', codigo: 89012, preco: '4,00' },
    { produto: 'Sabonete', codigo: 89013, preco: '7,00' },
    { produto: 'Shampoo', codigo: 89014, preco: '9,00' },
    { produto: 'Escova', codigo: 89015, preco: '4,00' }
  ];

  displayedColumns: string[] = ['Produto', 'Código', 'Preço']

  ngOnInit(): void {
    this.valor = 5;
  }
  mudarValor() {
    this.valor++;
  }
  reiniciarValor() {
    this.valor = 0;
  }
  exibirValor() {
    this.exibeLista = true;
  }
  esconderValor() {
    this.exibeLista = false;
  }
}
