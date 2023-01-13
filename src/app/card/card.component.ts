import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

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
