import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Roberto';
  public gender: 'male' | 'female' = 'male';

  // OBJETO LITERAL CON PARES DE VALORES
  public invitationMap = {
    male:'invitarlo',
    female:'invitarla'
  }

  changeClient(): void {
    this.name = 'Alondra';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia'];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos # clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Roberto',
    age: 24,
    address: 'Hermosillo, Sonora, Mexico.'
  }

  // Async Pipe
  // OBSERVABLE
  public myObservableTimer: Observable<number> = interval(2000).pipe(tap(value => console.log('tap:',value)));

  // PROMISE
  public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa.');
    }, 3500);
  });

}
