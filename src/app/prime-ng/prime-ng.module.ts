import { NgModule } from '@angular/core';

//import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';


// EL OBJETIVO DE ESTO ES UNICAMENTE EXPORTAR TODOS
// LOS MODULOS QUE VAMOS A NECESITAR
@NgModule({
 exports:[
  MenubarModule
  //MenuModule
 ]
})
export class PrimeNgModule { }
