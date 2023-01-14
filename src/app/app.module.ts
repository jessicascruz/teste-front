import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './componentes/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ContainerComponent } from './componentes/container/container.component';
import { EtapasComponent } from './componentes/etapas/etapas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    CabecalhoComponent,
    RodapeComponent,
    EtapasComponent,
    ContainerComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
