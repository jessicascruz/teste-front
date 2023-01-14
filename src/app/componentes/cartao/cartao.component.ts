import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.scss']
})
export class CartaoComponent implements OnInit {

  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() tipo!: string;
  @Input() nome!: string;
  @Input() situacao!: string;
  @Input() numConta!: number;


  constructor() { }

  ngOnInit(): void {
  }

}
