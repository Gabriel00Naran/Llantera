import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { BarraComponent } from './componentes/barra/barra.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { EquivalenciasComponent } from './equivalencias/equivalencias.component';
import { ResultadosComponent } from './resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    CuerpoComponent,
    BarraComponent,
    Pagina2Component,
    EquivalenciasComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
