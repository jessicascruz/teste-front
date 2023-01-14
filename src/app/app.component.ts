import { Component } from '@angular/core';
import { MenuLateral } from './model/menu-lateral';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-front';

  menu: MenuLateral[] = [
    {
      label: 'Menu',
      path: 'assets/img/Menu.png'
    },
    {
      label: 'Lupa',
      path: 'assets/img/Lupa.png'
    },
    {
      label: 'Estrela',
      path: 'assets/img/Estrela.png'
    },
    {
      label: 'Balao',
      path: 'assets/img/Balao.png'
    },
    {
      label: 'Option',
      path: 'assets/img/Option.png'
    },
    {
      label: 'Bank',
      path: 'assets/img/Bank.png'
    }
  ];
}
