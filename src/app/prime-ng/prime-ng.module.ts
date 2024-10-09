import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';

//import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';


// EL OBJETIVO DE ESTO ES UNICAMENTE EXPORTAR TODOS
// LOS MODULOS QUE VAMOS A NECESITAR
@NgModule({
 exports:[
  MenubarModule,
  ButtonModule,
  CardModule,
  FieldsetModule,
  PanelModule
  //MenuModule
 ]
})
export class PrimeNgModule { }
