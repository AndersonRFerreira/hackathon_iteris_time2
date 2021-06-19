import { Component, OnInit } from '@angular/core';
import { OlimpiadasModalidadesModel } from 'src/app/services/olimpiadas-modalidades-model';
import { OlimpiadasModalidaesApiService } from 'src/app/services/olimpiadas-modalidaes-api.service';

@Component({
  selector: 'app-modalidades',
  templateUrl: './modalidades.component.html',
  styleUrls: ['./modalidades.component.css']
})
export class ModalidadesComponent implements OnInit {
  displayedColumns: string[] = ['symbol', 'name', 'proves'];
  dataSource: OlimpiadasModalidadesModel[] = [];

  constructor(public modalidadesApi: OlimpiadasModalidaesApiService) { }

  ngOnInit(): void {
    this.modalidadesApi.get().subscribe({
      next: (retornoDaApi) => {
        this.dataSource = retornoDaApi;
      }
    });
  }



}

