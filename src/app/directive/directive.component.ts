import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  nom: string = '';
  inputType: string = 'number';
  nombre: string;
  status: boolean = true;
  public texts: Array<string> = ['un', 'deux', 'trois'];

  changeStatus(event: Event): void {
    this.status = !this.status;
  }


  constructor() {
    this.nombre = '10';
   }

  ngOnInit() {
  }

}
