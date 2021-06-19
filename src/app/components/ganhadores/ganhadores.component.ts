import { Component, OnInit } from '@angular/core';
import { OlimpiadasMedalhaApiService } from 'src/app/services/olimpiadas-medalha-api.service';
import { OlimpiadasMedalhaModel } from 'src/app/services/olimpiadas-medalha-model';

@Component({
  selector: 'app-ganhadores',
  templateUrl: './ganhadores.component.html',
  styleUrls: ['./ganhadores.component.css']
})
export class GanhadoresComponent implements OnInit {
  displayedColumns: string[] = ['posicao', 'pais', 'ouro','prata','bronze'];
  dataSource: OlimpiadasMedalhaModel[] = [];

  constructor(public medalhasApi: OlimpiadasMedalhaApiService) { }

  ngOnInit(): void {
    this.medalhasApi.get().subscribe({
      next: (retornoDaApi) => {
        this.dataSource = retornoDaApi;
      }
    });
  }


}
