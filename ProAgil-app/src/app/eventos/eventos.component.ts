import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any =[

    {
      EventoID: 1,
      Tema:     'angular',
      Local: 'BH'
      },
      {
        EventoID: 2,
        Tema:     '.NET',
        Local: 'SP'
        },
        {
          EventoID: 3,
          Tema:     'angular e .NET',
          Local: 'RJ'
          },
  ]
  constructor() { }

  ngOnInit() {
  }

}
