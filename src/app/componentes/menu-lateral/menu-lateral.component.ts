import { Component, Input, OnInit } from '@angular/core';
import { MenuLateral } from 'src/app/model/menu-lateral';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  @Input() menu!: MenuLateral[];

  constructor() { }

  ngOnInit(): void {
  }

}
