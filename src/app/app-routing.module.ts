import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { EquivalenciasComponent } from './equivalencias/equivalencias.component';
import { NavegadorComponent} from './componentes/navegador/navegador.component'
import { ResultadosComponent } from './resultados/resultados.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/cuerpo', pathMatch: 'full' },
  { path: 'cuerpo', component: CuerpoComponent },
  { path: 'pagina2', component: Pagina2Component },
  { path: 'equivalencias', component: EquivalenciasComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'navegador', component: NavegadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
