import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'roberto';
  public nameUpper: string = 'ROBERTO';
  public fullName: string = 'rOberTo CArlOs';

  public customDate: Date = new Date();

}
